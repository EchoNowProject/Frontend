import { useServer } from '@/hooks/useServer';
import { Group, Server } from '@/pages/Home/components';

export const ShowActiveServer = () => {
  const { server } = useServer();

  return (
    <ul className="flex items-center gap-1.5 shrink-0">
      <Server />
      <Group />
    </ul>
  );
};
