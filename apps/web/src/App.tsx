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
      </Routes>
    </BrowserRouter>
  );
}

export default App;