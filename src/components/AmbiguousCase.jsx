import './AmbiguousCase.css';
import { useState } from 'react';

function AmbiguousCase() {

    const [angleA, setAngle] = useState('Enter angle A');
    const [a, setA] = useState('Enter side A');
    const [b, setB] = useState('Enter side B');
    const [result, setResult] = useState('');

    function ambiguousCase(e) {
        e.preventDefault();

        var angleRadians = angleA * (Math.PI / 180);
        var h = b * Math.sin(angleRadians);
      
        if (angleA < 180) {
          if (angleA < 90) {
            if (a < h) {
              setResult("No triangle.");
            } else if (a > b) {
              setResult("One triangle.");
            } else if (h < a && a < b) {
              setResult("Two triangles (ambiguous case).");
            } else {
              setResult("No triangle.");
            }
          } else if (angleA == 90) {
            setResult("Right triangle.");
          } else {
            if (a < b || a === h) {
              setResult("No triangle.");
            } else if (a > b) {
              setResult("One triangle.");
            } 
          } 
        } else {
          setResult("Invalid angle.");
        }
    }

    return (
        <div className="Form">
        <form onSubmit={(e) => ambiguousCase(e)}>
        <h3>Ambiguous Case</h3>
        <label>Angle A:</label>
        <input type="number" value={angleA} onChange={(event) => { setAngle(event.target.value) }} required />
        <label>Side A:</label>
        <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
        <label>Side B:</label>
        <input type="number" value={b} onChange={(event) => {setB(event.target.value) }} required />
        <label>Triangle Type (Result):</label>
        <input type="text" value={result} readOnly />
        <button type="submit">Calculate</button>
        </form>
        </div>
    )

}

export default AmbiguousCase;