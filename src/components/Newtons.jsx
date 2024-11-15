import './Newtons.css';
import { useState } from 'react';

function NewtonsMethod() {
    
    const [guess, setGuess] = useState('');
    const [root, setRoot] = useState('');

    function newtons(e) {
        e.preventDefault();

        function f(x) {
            return 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
        }

        function fDeriv(x) {
            return 24 * x ** 3 - 39 * x ** 2 - 36 * x + 7;
        }

        var x = guess

        do {
            x = x - f(x)/fDeriv(x);
        } while (Math.abs(f(x) > 0.00001));

        setRoot(x);

    }

    return (
        <form onSubmit={(e) => newtons(e)}>
            <h3>Newtons Method</h3>
            <label>Root Guess:</label>
            <input type="number" value={guess} onChange={(event) => { setGuess(event.target.value) }} required />
            <label>Root Approximation (Result):</label>
            <input type="text" value={root} readOnly />
            <button type="submit">Calculate</button>
        </form>
    )

}

export default NewtonsMethod;