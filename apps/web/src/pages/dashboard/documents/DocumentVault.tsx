import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../api';
import { FileText, Download, Trash, Eye } from 'lucide-react';
import { Button } from 'ui';

export const DocumentVault = () => {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    api.get('/documents').then(res => setDocuments(res.data)).catch(console.error);
  }, []);

  const handleDelete = async (id: string) => {
    await api.delete(`/documents/${id}`);
    setDocuments(docs => docs.filter(d => d.id !== id));
  };

  const handleDownload = async (id: string, filename: string) => {
    const res = await api.get(`/documents/${id}/download`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Document Vault</h2>
        <Link to="/dashboard/documents/upload">
          <Button>Upload CV</Button>
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {documents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No documents uploaded yet.</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {documents.map(doc => (
              <li key={doc.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-blue-500" />
                  <div>
                    <Link to={`/dashboard/documents/${doc.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600">
                      {doc.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {doc.mimeType} • {(doc.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link to={`/dashboard/documents/${doc.id}/preview`}>
                    <Button variant="secondary" className="px-2 py-1"><Eye className="w-4 h-4" /></Button>
                  </Link>
                  <Button variant="secondary" onClick={() => handleDownload(doc.id, doc.originalFilename)} className="px-2 py-1">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" onClick={() => handleDelete(doc.id)} className="px-2 py-1 text-red-600 hover:text-red-700">
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