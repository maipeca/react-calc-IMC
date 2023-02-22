import Header from './components/Header';
import './App.css';
import IMC from './components/IMC';
import Login from './components/Login/LoginControl'


function App() {
  return (
    <div className="App">
     <Header/>
     <IMC/>
    
    <Login name={'Marcelo'} />
    </div>
  );
}

export default App;
