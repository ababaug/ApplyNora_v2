import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import { Button } from 'ui';

export const DocumentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState<any>(null);

  useEffect(() => {
    api.get(`/documents/${id}`).then((res: any) => setDoc(res.data)).catch(() => navigate('/dashboard/documents'));
  }, [id, navigate]);

  if (!doc) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Document Details</h2>
      <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
        <div><span className="font-semibold text-gray-700">Filename:</span> {doc.originalFilename}</div>
        <div><span className="font-semibold text-gray-700">Name:</span> {doc.name}</div>
        <div><span className="font-semibold text-gray-700">Type:</span> {doc.mimeType}</div>
        <div><span className="font-semibold text-gray-700">Size:</span> {(doc.size / 1024).toFixed(2)} KB</div>
        <div><span className="font-semibold text-gray-700">Status:</span> {doc.status}</div>
        <div><span className="font-semibold text-gray-700">Uploaded:</span> {new Date(doc.createdAt).toLocaleString()}</div>

        <div className="pt-6 flex gap-4">
          <Button onClick={() => navigate(`/dashboard/documents/${doc.id}/preview`)}>Preview File</Button>
          <Button variant="secondary" onClick={() => navigate('/dashboard/documents')}>Back to Vault</Button>
        </div>
      </div>
    </div>
  );
};