import './App.css';
import Row from './Row.jsx';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals}/>
      <Row title='Tren.ding Now' fetchURL={requests.fetchTrending}/>

    </div>
  );
}

export default App;
