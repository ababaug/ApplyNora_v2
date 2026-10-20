
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'ui';
import { api } from '../../api';

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/auth/register', { email, password, confirmPassword });
      navigate('/login'); // Assuming they need to login or are auto-logged in. Let's redirect to login for simplicity.
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">Register</Button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
};