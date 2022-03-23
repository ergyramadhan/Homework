import './App.css';
import data from './Data.js'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <fieldset>
        <legend className='fieldset'> Module 2 Session 1 </legend>
        <img src={data.album.images[0].url} className="App-logo" alt="logo" />
        <p> {data.name} </p>
        <p> {data.album.name} </p>
        <p> {data.artists[0].name} </p>
        <a class="btn" href={data.album.artists[0].external_urls.spotify}>Select</a>
          </fieldset>
      </header>
      
    </div>
  );
}

export default App;
