
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import { api } from '../../api';

export const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', professionalHeadline: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.patch('/profile/me', formData);
      navigate('/onboarding/preferences');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Candidate Profile</h2>
          <p className="text-gray-600">Enter your details</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input type="text" required value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="First Name" />
            </div>
            <div>
              <input type="text" required value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
            </div>
            <div>
              <input type="text" value={formData.professionalHeadline} onChange={e => setFormData({ ...formData, professionalHeadline: e.target.value })} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Professional Headline (e.g. Senior Software Engineer)" />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">Next: Job Preferences</Button>
          </div>
        </form>
      </div>
    </div>
  );
};