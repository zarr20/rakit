import { useNavigate } from 'react-router-dom';
import { OverviewFeature } from '../features/overview/OverviewFeature';

export default function OverviewPage() {
  const navigate = useNavigate();

  return (
    <OverviewFeature
      onSelectComponent={(category) => {
        navigate(category === 'overview' ? '/' : `/${category}`);
      }}
    />
  );
}
