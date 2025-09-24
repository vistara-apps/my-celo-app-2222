import { Counter } from '@/components/Counter';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-fg mb-4">
            Welcome to CELO Counter
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A simple counter application built with Next.js 15, React 19, and OnchainKit. 
            Features the CELO theme with sharp borders and yellow accents.
          </p>
        </div>
        
        <Counter />
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted text-sm">
            <span>Built on</span>
            <span className="text-accent font-bold">Base</span>
            <span>with</span>
            <span className="text-accent font-bold">OnchainKit</span>
          </div>
        </div>
      </main>
    </div>
  );
}
