/* eslint-disable no-unused-vars */
import react from 'react';
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './requests';

function App() {


  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;