import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const decrementButton = () => {
        setCount(count - 1)
    }
    const incrementButton = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={decrementButton}>Decrement</button>
            <h3>Count: {count} </h3>
            <button onClick={incrementButton}>Increment</button>
        </div>
    );
};

export default Counter;