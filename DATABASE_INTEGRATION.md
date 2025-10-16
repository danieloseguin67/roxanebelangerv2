# Database Integration Guide

This document outlines how to integrate the Angular application with a SQL Server database.

## Database Schema Recommendations

### Tables

#### 1. Pages
```sql
CREATE TABLE Pages (
    PageId INT PRIMARY KEY IDENTITY(1,1),
    PageKey NVARCHAR(50) NOT NULL UNIQUE,
    CreatedDate DATETIME DEFAULT GETDATE(),
    ModifiedDate DATETIME DEFAULT GETDATE()
);
```

#### 2. PageContent
```sql
CREATE TABLE PageContent (
    ContentId INT PRIMARY KEY IDENTITY(1,1),
    PageId INT FOREIGN KEY REFERENCES Pages(PageId),
    Language NVARCHAR(5) NOT NULL, -- 'en' or 'fr'
    ContentKey NVARCHAR(100) NOT NULL,
    ContentValue NVARCHAR(MAX) NOT NULL,
    UNIQUE (PageId, Language, ContentKey)
);
```

#### 3. Services
```sql
CREATE TABLE Services (
    ServiceId INT PRIMARY KEY IDENTITY(1,1),
    ServiceKey NVARCHAR(50) NOT NULL,
    DisplayOrder INT NOT NULL,
    IsActive BIT DEFAULT 1
);
```

#### 4. ServiceContent
```sql
CREATE TABLE ServiceContent (
    ServiceContentId INT PRIMARY KEY IDENTITY(1,1),
    ServiceId INT FOREIGN KEY REFERENCES Services(ServiceId),
    Language NVARCHAR(5) NOT NULL,
    Title NVARCHAR(200),
    Description NVARCHAR(MAX),
    UNIQUE (ServiceId, Language)
);
```

#### 5. FAQs
```sql
CREATE TABLE FAQs (
    FAQId INT PRIMARY KEY IDENTITY(1,1),
    DisplayOrder INT NOT NULL,
    IsActive BIT DEFAULT 1
);
```

#### 6. FAQContent
```sql
CREATE TABLE FAQContent (
    FAQContentId INT PRIMARY KEY IDENTITY(1,1),
    FAQId INT FOREIGN KEY REFERENCES FAQs(FAQId),
    Language NVARCHAR(5) NOT NULL,
    Question NVARCHAR(500) NOT NULL,
    Answer NVARCHAR(MAX) NOT NULL,
    UNIQUE (FAQId, Language)
);
```

## Backend API Requirements

### Technology Options
- **ASP.NET Core Web API**: Recommended for SQL Server integration
- **Node.js with Express**: Alternative option
- **Azure Functions**: Serverless option

### API Endpoints

#### Translations
- `GET /api/translations/{language}` - Get all translations for a language
- `GET /api/translations/{language}/{key}` - Get specific translation

#### Services
- `GET /api/services/{language}` - Get all services in specified language

#### FAQs
- `GET /api/faqs/{language}` - Get all FAQs in specified language

#### Pages
- `GET /api/pages/{pageKey}/{language}` - Get page content

### Example ASP.NET Core API Controller

```csharp
[ApiController]
[Route("api/[controller]")]
public class TranslationsController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public TranslationsController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet("{language}")]
    public async Task<ActionResult<Dictionary<string, string>>> GetTranslations(string language)
    {
        var connectionString = _configuration.GetConnectionString("DefaultConnection");
        var translations = new Dictionary<string, string>();

        using (var connection = new SqlConnection(connectionString))
        {
            await connection.OpenAsync();
            var command = new SqlCommand(
                "SELECT ContentKey, ContentValue FROM PageContent WHERE Language = @Language",
                connection
            );
            command.Parameters.AddWithValue("@Language", language);

            using (var reader = await command.ExecuteReaderAsync())
            {
                while (await reader.ReadAsync())
                {
                    translations.Add(
                        reader.GetString(0),
                        reader.GetString(1)
                    );
                }
            }
        }

        return Ok(translations);
    }
}
```

## Frontend Integration

### Update Translation Service

Modify `src/app/services/translation.ts` to fetch translations from the API:

```typescript
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class Translation {
  private currentLanguage = signal<Language>('en');
  private translations: { [key: string]: string } = {};
  private apiUrl = 'https://your-api-url.com/api';

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  async loadTranslations(language: Language) {
    try {
      const data = await firstValueFrom(
        this.http.get<{ [key: string]: string }>(`${this.apiUrl}/translations/${language}`)
      );
      this.translations = data;
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  get language() {
    return this.currentLanguage();
  }

  async setLanguage(lang: Language) {
    await this.loadTranslations(lang);
    this.currentLanguage.set(lang);
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }
}
```

### Add HttpClient

Update `src/app/app.config.ts` to include HttpClient:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

## Deployment Considerations

1. **Connection String**: Store in environment variables, not in code
2. **CORS**: Configure API to allow requests from Angular app domain
3. **Authentication**: Add JWT authentication for admin endpoints
4. **Caching**: Implement caching to reduce database calls
5. **CDN**: Use CDN for static assets (images, CSS)

## Security Best Practices

- Use parameterized queries to prevent SQL injection
- Implement input validation on both frontend and backend
- Use HTTPS for all API communications
- Store sensitive configuration in Azure Key Vault or similar
- Implement rate limiting on API endpoints
- Regular security audits and updates
