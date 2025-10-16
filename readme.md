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
