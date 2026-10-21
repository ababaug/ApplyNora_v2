import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import { Button } from 'ui';
import { FileText, Copy, Trash, Edit } from 'lucide-react';

export const CVBuilderOverview = () => {
  const navigate = useNavigate();
  const [cvs, setCvs] = useState<any[]>([]);

  useEffect(() => {
    fetchCvs();
  }, []);

  const fetchCvs = () => {
    api.get('/cvs').then(res => setCvs(res.data)).catch(console.error);
  };

  const handleCreate = async () => {
    try {
      const res = await api.post('/cvs', { title: 'New CV', structuredData: {} });
      navigate(`/dashboard/cv-builder/${res.data.id}/edit`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/cvs/${id}`);
    fetchCvs();
  };

  const handleDuplicate = async (id: string) => {
    await api.post(`/cvs/${id}/duplicate`);
    fetchCvs();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">CV Builder</h2>
        <Button onClick={handleCreate}>Create CV</Button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {cvs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No CVs created yet. Start building your perfect resume!</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cvs.map(cv => (
              <li key={cv.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                  <div>
                    <Link to={`/dashboard/cv-builder/${cv.id}/edit`} className="text-lg font-medium text-gray-900 hover:text-purple-700">
                      {cv.title}
                    </Link>
                    <p className="text-sm text-gray-500">
                      Template: {cv.templateId} • Version {cv.currentVersion}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link to={`/dashboard/cv-builder/${cv.id}/edit`}>
                    <Button variant="secondary" className="px-2 py-1"><Edit className="w-4 h-4" /></Button>
                  </Link>
                  <Button variant="secondary" onClick={() => handleDuplicate(cv.id)} className="px-2 py-1">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" onClick={() => handleDelete(cv.id)} className="px-2 py-1 text-red-600 hover:text-red-700">
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};