import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';


export default function Home () {
  return (
    <div className='text-foreground bg-background min-h-screen'>
    <Hero />
    <Projects />
    </div>
  );
}


