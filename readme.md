# Roxane Belanger Website

This is a modern Angular-based website for Roxane Bélanger's Speech Language Pathology practice (Communication Development Clinic).

## Features

- **Bilingual Support**: Full English and French translations
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design with purple color scheme
- **5 Main Pages**:
  - Home: Welcome page with image carousel
  - Services: Detailed service offerings for different age groups
  - FAQ: Frequently asked questions with expandable answers
  - About Me: Professional background and credentials
  - Contact: Contact information with location details

## Technology Stack

- **Angular 20**: Modern web framework
- **TypeScript**: Type-safe development
- **CSS**: Custom styling
- **Standalone Components**: Modern Angular architecture

## Development

### Prerequisites
- Node.js 20+ 
- npm 10+

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`

### Build
```bash
npm run build
```
Build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup

The workflow is located at `.github/workflows/deploy-github-pages.yml` and will:
1. Build the Angular application for production
2. Deploy to GitHub Pages
3. Send email notifications on success or failure

### Required GitHub Secrets

To enable email notifications, configure the following secrets in your repository settings (Settings → Secrets and variables → Actions):

- `MAIL_USERNAME`: Your email username (e.g., for Gmail)
- `MAIL_PASSWORD`: Your email password or app-specific password
- `MAIL_TO`: Email address to receive notifications

**For Gmail users:**
- Use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password
- The workflow uses Gmail's SMTP server by default (smtp.gmail.com:465)

### Manual Deployment

You can also trigger a deployment manually from the GitHub Actions tab using the "workflow_dispatch" trigger.

## Language Switching

Users can toggle between English and French using the language switcher button in the top-right corner of the navigation bar.

## Database Integration

The application is ready to be connected to a SQL Server database for dynamic content management. The current implementation uses a translation service that can be easily extended to fetch content from a database.

## Screenshots

See the `screenshots/` directory for example pages in both English and French.

## Future Enhancements

- Backend API integration with SQL Server
- Admin panel for content management
- Online appointment booking system
- Contact form with email notifications
- Image gallery for office photos
