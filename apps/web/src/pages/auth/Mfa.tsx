import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import { api } from '../../api';

export const Mfa = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      // Mock session token for MFA challenge
      const res = await api.post('/auth/mfa/challenge', { token, sessionToken: 'mock' });
      setMessage(res.data.message);
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'MFA failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">MFA Challenge</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {message && <div className="text-green-600 text-sm">{message}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input type="text" required value={token} onChange={e => setToken(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="MFA Code" />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">Verify</Button>
          </div>
        </form>
      </div>
    </div>
  );
};