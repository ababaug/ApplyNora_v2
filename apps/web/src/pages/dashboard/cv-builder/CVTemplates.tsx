import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import { Button } from 'ui';

export const CVTemplates = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<any[]>([]);

  useEffect(() => {
    api.get('/cv-templates').then(res => setTemplates(res.data)).catch(console.error);
  }, []);

  const handleSelect = async (templateId: string) => {
    await api.patch(`/cvs/${id}`, { templateId });
    navigate(`/dashboard/cv-builder/${id}/edit`);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map(t => (
          <div key={t.id} className="bg-white border rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-gray-600 mt-2">{t.description}</p>
            </div>
            <Button className="mt-6" onClick={() => handleSelect(t.id)}>Select {t.name}</Button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="secondary" onClick={() => navigate(-1)}>Cancel</Button>
      </div>
    </div>
  );
};