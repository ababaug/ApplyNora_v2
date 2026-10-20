
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import { api } from '../../api';

export const Preferences = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ targetJobTitles: '', preferredLocations: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        targetJobTitles: formData.targetJobTitles.split(',').map(s => s.trim()).filter(Boolean),
        preferredLocations: formData.preferredLocations.split(',').map(s => s.trim()).filter(Boolean),
      };
      await api.put('/profile/preferences', payload);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save preferences');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Job Preferences</h2>
          <p className="text-gray-600">What are you looking for?</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input type="text" value={formData.targetJobTitles} onChange={e => setFormData({ ...formData, targetJobTitles: e.target.value })} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Target Job Titles (comma separated)" />
            </div>
            <div>
              <input type="text" value={formData.preferredLocations} onChange={e => setFormData({ ...formData, preferredLocations: e.target.value })} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Preferred Locations (comma separated)" />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full">Complete Onboarding</Button>
          </div>
        </form>
      </div>
    </div>
  );
};