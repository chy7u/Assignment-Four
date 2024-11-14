import './App.css';
import HeronsFormula from './components/HeronsFormula';
import AmbiguousCase from './components/AmbiguousCase';

function App() {

  return (
    <div class="container">
      <div class="card">
        <AmbiguousCase/>
      </div>
      <div class="card">
        <HeronsFormula/>
      </div>
    </div>

  )

}

export default App
