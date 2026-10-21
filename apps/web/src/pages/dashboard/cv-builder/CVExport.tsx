import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import { Button } from 'ui';

export const CVExport = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDownloadPdf = async () => {
    const res = await api.get(`/cvs/${id}/export/pdf`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `cv-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownloadDocx = async () => {
    const res = await api.get(`/cvs/${id}/export/docx`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `cv-${id}.docx`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Export CV</h2>
      <div className="space-y-4">
        <Button className="w-full py-3" onClick={handleDownloadPdf}>Download as PDF</Button>
        <Button className="w-full py-3" variant="secondary" onClick={handleDownloadDocx}>Download as DOCX</Button>
        <Button className="w-full py-3 mt-8 text-gray-600" variant="secondary" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </div>
  );
};