import React from 'react'

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Track from './components/Track/Track';
import Tracklist from './components/Tracklist/Tracklist';


const App = () => {
  return (
    <>
    <SearchBar/>
    <SearchResults/>
    <Playlist/>
    <Track/>
    <Tracklist/>
    
    </>
  )
}

export default App