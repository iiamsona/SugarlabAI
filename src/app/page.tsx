import { Button } from '@/components/ui/button/button';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <Button
        variant="primaryRose"
        size="lg"
        iconSrc="/bolt.svg"
      >
        Get Premium
      </Button>
    </main>
  );
}
