import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test Header</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button name="click" onClick={() => {console.log('Clicked')}}>Click me</button>
        <UserForm></UserForm>
      </header>
    </div>
  );
}

export default App;
