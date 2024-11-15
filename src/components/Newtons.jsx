import './Newtons.css';
import { useState } from 'react';

function NewtonsMethod() {
    
    const [func, setF] = useState('');
    const [derivative, setD] = useState(''); 
    const [guess, setGuess] = useState('');
    const [root, setRoot] = useState('');

    function newtons(e) {
        e.preventDefault();

        setF(6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6);
        setD(24 * x ** 3 - 39 * x ** 2 - 36 * x + 7);
        setGuess(0);

    }

    return (
        <form onSubmit={(e) => newtons(e)}>
            <h3>Newtons Method</h3>
            <label>Root Guess:</label>
            <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required />
            <label>Root Approximation (Result):</label>
            <input type="text" value={ans} readOnly />
            <button type="submit">Calculate</button>
        </form>
    )

}

export default NewtonsMethod;