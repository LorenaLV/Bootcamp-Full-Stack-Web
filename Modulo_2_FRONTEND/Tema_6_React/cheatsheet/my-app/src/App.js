import './App.css';
import Counter from './components/Counter';
import FirstComponents, {SecondComponents, ThirdComponent} from './components/FirstComponents';


function App() {
  return (
    <div className="App">
      <Counter />
      <FirstComponents title = "Título enviado desde el padre" date = "16 de Agosto de 2025"/>
      <FirstComponents title = "Otro titulo enviado desde el padre"/>
      <SecondComponents />
      <ThirdComponent />
      
    </div>
  );
}

export default App;
