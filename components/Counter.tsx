'use client';

import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="card max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-accent mb-6">
        CELO Counter
      </h2>
      
      <div className="counter-display">
        {count}
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={decrement}
          className="counter-button"
          aria-label="Decrease count"
        >
          <Minus size={24} />
        </button>
        
        <button
          onClick={reset}
          className="counter-button"
          aria-label="Reset count"
        >
          <RotateCcw size={20} />
        </button>
        
        <button
          onClick={increment}
          className="counter-button"
          aria-label="Increase count"
        >
          <Plus size={24} />
        </button>
      </div>
      
      <div className="text-muted text-sm">
        Click the buttons to change the counter value
      </div>
    </div>
  );
}
