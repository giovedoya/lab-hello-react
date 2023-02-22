import ironhackLogo from './assets/logo.png';
import menuTop from './assets/menu-top.png';
import components from './assets/components.png';
import declarative from './assets/declarative.png';
import singleWay from './assets/single-way.png';
import jsx from './assets/JSX.png';

import './App.css';


function App() {
  return (

    <div className="App">
      <div className="header">
        <img className="img-top" src={ironhackLogo} alt='ironhack-logo'/>
        <img className="img-bottom" src={menuTop} alt='menu-top' /> 
        <section>
            <h1> Say hello to ReactJS </h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button>Awesome!</button>
        </section>              
      </div>
      <div className="card-container">
        <div className="card">
          <img  src={declarative} alt='declarative' />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img  src={components} alt='components' />
          <h2>Components</h2>
          <p>Build encapsulated components that components that manage their state.</p>
        </div>
        <div className="card">
          <img  src={singleWay} alt='single-way' />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card">
          <img  src={jsx} alt='JSX' />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>      
      </div>      
    </div>
  );
}
export default App;
