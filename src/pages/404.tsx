import { useNavigate } from 'react-router-dom';
import { EmptyState, Button } from '@zarr20/rakit-ui';
import { Compass, Home } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="py-12 flex items-center justify-center min-h-[400px]">
      <EmptyState
        title="404 - Page Not Found"
        description="The requested route is not registered in the rakit-routes auto-routing system."
        icon={<Compass className="w-10 h-10 text-emerald-500" />}
        action={
          <Button
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        }
      />
    </div>
  );
}
