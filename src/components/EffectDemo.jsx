import { useState, useEffect } from 'react';

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran! Count is:', count);
  });

  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectDemo;
