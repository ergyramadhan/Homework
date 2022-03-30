import './App.css';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import { Component } from 'react';


export default class Home extends Component {
  state = {
    accessToken: '',
    isAuthorize: false,
    tracks: [],
  }

  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);

    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    const params = this.getHashParams();
    const { access_token: accessToken } = params;

    this.setState({ accessToken, isAuthorize: accessToken !== undefined })
  }

  getSpotifyLinkAuthorize() {
    const state = Date.now().toString();
    return `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=playlist-modify-private`;
  }

  onSuccessSearch(tracks) {
    this.setState({ tracks });
  }

  render() {
    return (
      <>
        {!this.state.isAuthorize && (
          <main className="center">
            <fieldset>
              <legend>Homework</legend>
            <p>Klik login untuk melanjutkan ...</p>
            <Button href={this.getSpotifyLinkAuthorize()}>LOGIN</Button>
            </fieldset>
          </main>
        )}

        {this.state.isAuthorize && (
          <main className="container">
            <SearchBar
              accessToken={this.state.accessToken}
              onSuccess={(tracks) => this.onSuccessSearch(tracks)}
            />

            <div className="content">
              {this.state.tracks.length === 0 && (
                <p>No tracks</p>
              )}
              

              <div className="cards">
                {this.state.tracks.map((song) => (
                  <Card
                    key={song.id}
                    imageUrl={song.album.images[0].url}
                    title={song.name}
                    artist={song.artists[0].name}
                  />
                ))}
              </div>
            </div>
          </main>
        )}
      </>
    );
  }
}

// const Row = ({ url, title, artist , album}) => {
//   return (
    
//           <tr>
//             <td>{album}</td>
//             <td>{title}</td>
//             <td>{artist}</td>
//             <td><img src={url} alt=""  height='100' width='100' /></td>
//           </tr>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <fieldset>
//         <legend className='fieldset'> Homework </legend>
//         {/* <Images image={data.album.images[0].url} title={data.name} />
//         <Album  album={data.album.name}/>
//         <Artists artist={data.artists[0].name}/>
//         <Button tombol={data.album.artists[0].external_urls.spotify}/> */}

//         <table> 
//           <tr>
//             <th>Album</th>
//             <th>Title</th>
//             <th>Artist</th>
//             <th>Image</th>
//           </tr>
        
//         {
//            data //.filter(item => item.rating !== "g")
//           .map(item => {
//             return (
//               <Row key="" url={item.album.images[0].url} title={item.name} album={item.album.name} artist={item.artists[0].name} />
//             )
//           })
//         }
                  
//       </table>


//           </fieldset>
//       </header>
      
//     </div>
//   );
// }
