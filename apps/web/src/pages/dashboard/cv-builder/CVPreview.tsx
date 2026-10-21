import { useParams } from 'react-router-dom';

export const CVPreview = () => {
  const { id } = useParams();

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">CV Preview {id}</h2>
      <p>Standalone preview component mapping logic goes here.</p>
    </div>
  );
};