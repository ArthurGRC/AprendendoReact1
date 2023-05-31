import './App.css';
import AddHello from './components/helloWorld.jsx';

//JSX nada mais é do que um "JS" dentro do html, porém para utiliza-lo temos de usar todas as tags certinho

function App() {

  const name = "Arthur";

  function sum(a,b){
    return a + b;
  }

  
  const url = 'https://via.placeholder.com/150'



  return (
    <div className="App">
     <h1>Olá {name}</h1>
     <p>Meu primeiro app</p>
     <p>soma = {sum(1,2)}</p>
     <img src = {url} alt = 'Minha img' />
     <p>{AddHello()}</p>
    </div>
  );
}

export default App;
