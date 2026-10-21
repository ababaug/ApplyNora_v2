import { useParams } from 'react-router-dom';
import { Button } from 'ui';

export const CVTailor = () => {
  const { id } = useParams();

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">AI Tailoring {id}</h2>
      <p className="text-gray-600 mb-6">AI Tailoring service is currently unavailable. This will be implemented in Phase 05.</p>
      <textarea className="w-full border rounded p-4 mb-4" rows={6} placeholder="Paste job description here..."></textarea>
      <Button disabled>Tailor CV (Coming Soon)</Button>
    </div>
  );
};