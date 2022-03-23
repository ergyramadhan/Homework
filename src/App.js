import './App.css';
import data from './Data.js'
import Album from './components/album';
import Artists from './components/artists';
import Button from './components/button';
import Images from './components/images';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <fieldset>
        <legend className='fieldset'> Module 2 Session 2 </legend>
        <Images image={data.album.images[0].url} title={data.name} />
        <Album  album={data.album.name}/>
        <Artists artist={data.artists[0].name}/>
        <Button tombol={data.album.artists[0].external_urls.spotify}/>
          </fieldset>
      </header>
      
    </div>
  );
}

export default App;
