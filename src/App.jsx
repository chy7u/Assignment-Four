import './App.css';
import HeronsFormula from './components/HeronsFormula';
import AmbiguousCase from './components/AmbiguousCase';
import NewtonsMethod from './components/Newtons';
import Polynomial from './components/Polynomial';

function App() {

  return (
    <div class="container">
      <div class="card">
        <AmbiguousCase/>
      </div>
      <div class="card">
        <HeronsFormula/>
      </div>
      <div class="card">
        <NewtonsMethod/>
      </div>
      <div class="card">
        <Polynomial/>
      </div>
    </div>

  )

}

export default App
