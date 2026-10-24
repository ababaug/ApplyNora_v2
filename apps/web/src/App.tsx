
import { Routes, Route } from 'react-router-dom';

// Public Website
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage, BlogArticlePage } from './pages/BlogPage';

// Authentication
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { VerifyEmail } from './pages/auth/VerifyEmail';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import { Mfa } from './pages/auth/Mfa';
import { SessionExpired } from './pages/auth/SessionExpired';

// Onboarding
import { Welcome } from './pages/onboarding/Welcome';
import { Profile } from './pages/onboarding/Profile';
import { Preferences } from './pages/onboarding/Preferences';

// Dashboard
import { Dashboard } from './pages/dashboard/Dashboard';
import { ProfileEdit } from './pages/dashboard/ProfileEdit';
import { Settings } from './pages/dashboard/Settings';
import { Security } from './pages/dashboard/Security';
import { Notifications } from './pages/dashboard/Notifications';

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogArticlePage />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/auth/mfa" element={<Mfa />} />
      <Route
        path="/auth/session-expired"
        element={<SessionExpired />}
      />

      {/* Onboarding */}
      <Route path="/onboarding/welcome" element={<Welcome />} />
      <Route path="/onboarding/profile" element={<Profile />} />
      <Route
        path="/onboarding/preferences"
        element={<Preferences />}
      />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/dashboard/profile"
        element={<ProfileEdit />}
      />
      <Route
        path="/dashboard/settings"
        element={<Settings />}
      />
      <Route
        path="/dashboard/security"
        element={<Security />}
      />
      <Route
        path="/dashboard/notifications"
        element={<Notifications />}
      />
    </Routes>
  );
}

export default App;
