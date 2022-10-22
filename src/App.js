import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <About 
					name="Chloe" 
					age={26} 
					favoriteLanguages={['Javascript','Python','React']}
			/>
    </div>
  );
}

export default App;
