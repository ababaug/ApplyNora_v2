import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'ui';
import { api } from '../../../api';

export const DocumentPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState<any>(null);

  useEffect(() => {
    api.get(`/documents/${id}`).then((res: any) => setDoc(res.data)).catch(() => navigate('/dashboard/documents'));
  }, [id, navigate]);

  const handleDownload = async () => {
    const res = await api.get(`/documents/${id}/download`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', doc.originalFilename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  if (!doc) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{doc.name}</h2>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={handleDownload}>Download</Button>
          <Button onClick={() => navigate(`/dashboard/documents`)}>Back</Button>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 border rounded-lg shadow-inner flex items-center justify-center text-gray-500">
        <div className="text-center">
          <p className="mb-4 text-lg">Live preview rendering of PDF/DOCX is disabled in development.</p>
          <Button onClick={handleDownload}>Download to View</Button>
        </div>
      </div>
    </div>
  );
};