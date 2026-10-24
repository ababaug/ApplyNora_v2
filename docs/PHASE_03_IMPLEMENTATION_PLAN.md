# PHASE 03 IMPLEMENTATION PLAN

## 1. Existing capabilities
- TypeScript monorepo set up via `pnpm` workspaces.
- Shared UI component library exists (`packages/ui`).
- Tailwind CSS is configured and connected across apps.
- API service (NestJS) and Web service (Vite/React) are initialized.
- Environment variables are validated via Zod.
- Docker-compose provides a local PostgreSQL and Redis instance.

## 2. Missing requirements
- Database ORM or query builder (TypeORM or Prisma) is missing from `apps/api`.
- Database schema does not exist.
- Authentication endpoints and security libraries (bcrypt, session/jwt, MFA).
- NestJS guards for authorization.
- 15 mandatory frontend screens (Authentication, Onboarding, Workspace).
- Frontend application routing is completely missing (need `react-router-dom`).

## 3. Planned changes
1. **Tooling & Setup**: Install Prisma ORM to connect to PostgreSQL. Install `react-router-dom` in frontend. Install `bcrypt`, `@nestjs/passport` (or similar secure session/JWT package) for NestJS.
2. **Database Models**: Generate Prisma schema for `User`, `UserSession`, `CandidateProfile`, `JobPreference`, `NotificationPreference`, `SecurityEvent`.
3. **API Implementation**:
   - `apps/api/src/auth/*`: AuthController, AuthService, session/cookie handling.
   - `apps/api/src/profile/*`: ProfileController, ProfileService.
   - `apps/api/src/dashboard/*`: DashboardController.
   - `apps/api/src/account/*`: AccountController.
4. **Frontend Implementation**:
   - `apps/web/src/pages/auth/*`: Register, Login, Verify Email, Forgot Password, Reset Password, MFA, Session Expired.
   - `apps/web/src/pages/onboarding/*`: Welcome, Profile, Preferences.
   - `apps/web/src/pages/dashboard/*`: Dashboard (overview), Profile, Settings, Security, Notifications.
   - `apps/web/src/components/*`: Layouts, generic components.
5. **Testing**: Write unit and integration tests for auth flow. Test frontend rendering.

## 4. Database migrations
- Will use Prisma migrate to generate initial SQL schemas for the outlined tables.

## 5. API contracts
- Following the guidelines provided in Section 13 (Auth, MFA, Profile, Dashboard, Account REST endpoints).

## 6. Authentication architecture
- Standard Session/Cookie or JWT HttpOnly Secure cookie-based authentication.
- Passwords hashed using bcrypt.
- Simulated Email delivery for Email Verification.
- MFA logic with `otplib`.

## 7. Security requirements
- Express helmet, rate-limiters.
- No secrets exposed. Passwords stripped from responses.
- Guards for all protected routes.

## 8. Testing strategy
- Vitest unit tests for backend Auth, Profile services.
- Unauthenticated access tests for dashboard.
- Frontend rendering tests if possible (or Playwright visual verification).

## 9. Implementation risks
- Integration between the backend and frontend cookies for authentication can be tricky to configure locally.
- 15 screens is a large surface area for one phase; focus will be on functional, secure components rather than pixel-perfection without the exact Google Stitch export available.
