# PHASE 04 IMPLEMENTATION PLAN

## 1. Existing capabilities
- TypeScript monorepo with NestJS (`apps/api`) and React (`apps/web`).
- Authentication and session management working.
- Prisma ORM configured and connected to PostgreSQL.
- Dashboard basic structure exists.
- Shared Tailwind components available.

## 2. Missing functionality
- Database models for Document, CV, and Versions.
- Local storage provider for document uploading.
- Text parsing service for PDF and DOCX files.
- Endpoints for CV templates, saving, and versioning.
- Export services for generating PDF and DOCX files.
- UI for Document Vault and CV Builder.

## 3. Planned components
- **DocumentModule**: Handles `POST /documents`, `GET /documents`, downloading, and text extraction logic.
- **CVModule**: Handles CV data persistence, fetching, saving versions, duplicating, and exporting.
- **TemplateModule**: Handles providing predefined CV templates.
- **StorageProvider**: Service abstraction that writes to local disk for development.
- **Frontend Pages**: React components mapping to the requested 12 functional routes.

## 4. Backend service boundaries
- `DocumentModule` uses Prisma for metadata and `StorageProvider` for bytes.
- `CVModule` uses Prisma for structured JSON storage.

## 5. Database changes
- New tables: `Document`, `DocumentVersion`, `CV`, `CVVersion`, `DocumentProcessingJob`.

## 6. Storage architecture
- Local filesystem storage adapter located in `/uploads` during development.

## 7. API contracts
- Following the exact REST contracts proposed in Section 15.

## 8. Security controls
- User ID verification on all data access. Files cannot be accessed across tenants.

## 9. Testing strategy
- Integration tests checking document upload endpoints and CV saving logic.

## 10. Acceptance criteria
- Document Vault functions completely (Upload, List, Preview).
- CV Builder operates with templates, saving, autosave.
- PDF and DOCX export produces valid files.
