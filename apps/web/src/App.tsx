import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { VerifyEmail } from './pages/auth/VerifyEmail';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import { Mfa } from './pages/auth/Mfa';
import { SessionExpired } from './pages/auth/SessionExpired';
import { Welcome } from './pages/onboarding/Welcome';
import { Profile } from './pages/onboarding/Profile';
import { Preferences } from './pages/onboarding/Preferences';
import { Dashboard } from './pages/dashboard/Dashboard';
import { ProfileEdit } from './pages/dashboard/ProfileEdit';
import { Settings } from './pages/dashboard/Settings';
import { Security } from './pages/dashboard/Security';
import { Notifications } from './pages/dashboard/Notifications';
import { DocumentVault } from './pages/dashboard/documents/DocumentVault';
import { UploadCV } from './pages/dashboard/documents/UploadCV';
import { DocumentDetails } from './pages/dashboard/documents/DocumentDetails';
import { DocumentPreview } from './pages/dashboard/documents/DocumentPreview';
import { CVBuilderOverview } from './pages/dashboard/cv-builder/CVBuilderOverview';
import { CVEditor } from './pages/dashboard/cv-builder/CVEditor';
import { CVExport } from './pages/dashboard/cv-builder/CVExport';
import { CVTemplates } from './pages/dashboard/cv-builder/CVTemplates';
import { CVPreview } from './pages/dashboard/cv-builder/CVPreview';
import { CVTailor } from './pages/dashboard/cv-builder/CVTailor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/auth/mfa" element={<Mfa />} />
        <Route path="/auth/session-expired" element={<SessionExpired />} />

        {/* Onboarding */}
        <Route path="/onboarding/welcome" element={<Welcome />} />
        <Route path="/onboarding/profile" element={<Profile />} />
        <Route path="/onboarding/preferences" element={<Preferences />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<ProfileEdit />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/security" element={<Security />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />

        {/* Documents */}
        <Route path="/dashboard/documents" element={<DocumentVault />} />
        <Route path="/dashboard/documents/upload" element={<UploadCV />} />
        <Route path="/dashboard/documents/:id" element={<DocumentDetails />} />
        <Route path="/dashboard/documents/:id/preview" element={<DocumentPreview />} />

        {/* CV Builder */}
        <Route path="/dashboard/cv-builder" element={<CVBuilderOverview />} />
        <Route path="/dashboard/cv-builder/:id/edit" element={<CVEditor />} />
        <Route path="/dashboard/cv-builder/:id/export" element={<CVExport />} />
        <Route path="/dashboard/cv-builder/:id/templates" element={<CVTemplates />} />
        <Route path="/dashboard/cv-builder/:id/preview" element={<CVPreview />} />
        <Route path="/dashboard/cv-builder/:id/tailor" element={<CVTailor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;