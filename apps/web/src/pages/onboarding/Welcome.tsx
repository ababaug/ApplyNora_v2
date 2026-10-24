
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Welcome to ApplyNora</h2>
        <p className="text-gray-600">Let's get your profile set up so you can start applying.</p>
        <Button className="w-full mt-4" onClick={() => navigate('/onboarding/profile')}>Continue</Button>
      </div>
    </div>
  );
};