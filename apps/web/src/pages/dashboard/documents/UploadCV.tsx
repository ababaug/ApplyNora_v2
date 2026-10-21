import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import { Button } from 'ui';

export const UploadCV = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      await api.post('/documents', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/dashboard/documents');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Upload failed');
      setUploading(false);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload CV</h2>
      <form onSubmit={handleUpload} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select a PDF or DOCX file (Max 10MB)</label>
          <input
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <Button type="submit" disabled={!file || uploading} className="w-full">
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </form>
    </div>
  );
};