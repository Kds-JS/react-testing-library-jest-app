import { useState } from 'react'


const Counter = () => {

    const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} style={{marginRight: '25px'}}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)} style={{marginLeft: '15px'}}>Set</button>
    </div>
  )
};

export default Counter;