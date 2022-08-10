import './App.css';
import FirstComponents, {SecondComponents, ThirdComponent} from './components/FirstComponents';


function App() {
  return (
    <div className="App">
      <FirstComponents title = "Título enviado desde el padre" date = "16 de Agosto de 2025"/>
      <FirstComponents title = "Otro titulo enviado desde el padre"/>
      <SecondComponents />
      <ThirdComponent />
      
    </div>
  );
}

export default App;
