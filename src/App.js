import './App.css';
import data from './Data.js'
import Album from './components/album';
import Artists from './components/artists';
import Button from './components/button';
import Images from './components/images';

const Row = ({ url, title, artist , album}) => {
  return (
    
          <tr>
            <td>{album}</td>
            <td>{title}</td>
            <td>{artist}</td>
            <td><img src={url} alt=""  height='100' width='100' /></td>
          </tr>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <fieldset>
        <legend className='fieldset'> Homework </legend>
        {/* <Images image={data.album.images[0].url} title={data.name} />
        <Album  album={data.album.name}/>
        <Artists artist={data.artists[0].name}/>
        <Button tombol={data.album.artists[0].external_urls.spotify}/> */}

        <table> 
          <tr>
            <th>Album</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Image</th>
          </tr>
        
        {
           data //.filter(item => item.rating !== "g")
          .map(item => {
            return (
              <Row key="" url={item.album.images[0].url} title={item.name} album={item.album.name} artist={item.artists[0].name} />
            )
          })
        }
                  
      </table>


          </fieldset>
      </header>
      
    </div>
  );
}

export default App;
