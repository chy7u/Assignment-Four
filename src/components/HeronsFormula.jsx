import './HeronsFormula.css';
import { useState } from 'react';

function HeronsFormula() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area, setArea] = useState(0);

    function heronsFormula(e) {
        e.preventDefault();
        setAns((1 / 4) * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2));
    }

    return (
        <form onSubmit={(e) => heronsFormula(e)}>
            <h3>Heron's Formula</h3>
            <label>Side A:</label>
            <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side B:</label>
            <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
            <label>Side C:</label>
            <input type="number" value={b} onChange={(event) => { setC(event.target.value) }} required />
            <label>Area (Result):</label>
            <input type="text" value={area} readOnly />
            <button type="submit" value="Calculate"></button>
        </form>
    )

}

export default HeronsFormula;