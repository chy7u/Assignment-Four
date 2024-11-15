import './App.css';
import HeronsFormula from './components/HeronsFormula';
import AmbiguousCase from './components/AmbiguousCase';
import NewtonsMethod from './components/Newtons';

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
    </div>

  )

}

export default App
