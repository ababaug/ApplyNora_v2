
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Bell, Shield, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { api } from '../../api';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/dashboard/overview');
        setData(res.data);
      } catch (_err) {
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">ApplyNora</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-blue-600 bg-blue-50 rounded-md">
            Dashboard
          </Link>
          <Link to="/dashboard/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
            <User className="w-5 h-5 mr-3" /> Profile
          </Link>
          <Link to="/dashboard/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
            <SettingsIcon className="w-5 h-5 mr-3" /> Settings
          </Link>
          <Link to="/dashboard/security" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
            <Shield className="w-5 h-5 mr-3" /> Security
          </Link>
          <Link to="/dashboard/notifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
            <Bell className="w-5 h-5 mr-3" /> Notifications
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button onClick={async () => {
            await api.post('/auth/logout');
            navigate('/login');
          }} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Workspace Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Profile Completion</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">{data?.profileCompletion || 0}%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Active Applications</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">{data?.applicationStats?.active || 0}</p>
            <p className="text-sm text-gray-500 mt-1">No applications yet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Job Matches</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">{data?.jobRadarMatches || 0}</p>
            <p className="text-sm text-gray-500 mt-1">Your job matches will appear here once Job Radar is configured.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <p className="text-gray-500">No recent activity.</p>
        </div>
      </main>
    </div>
  );
};