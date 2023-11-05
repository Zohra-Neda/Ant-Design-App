import './App.css';
import Tab from './components/Tab';
import MyForm from './components/Form';


function App() {
  return (
    <div className="App">
      <main>
        <Tab />
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <MyForm/>
        </div>
      </main>
    </div>
  );
}

export default App;
