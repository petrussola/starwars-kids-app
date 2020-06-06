// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// style
import './App.css';

// components
import Header from './Components/Header';
import MovieSelector from './Components/MovieSelector';
import DisplayMovie from './Components/DisplayMovie';

// helpers
import config from './config';

const initial = {
	'A New Hope': {},
	'The Empire Strikes Back': {},
	'Return of the Jedi': {},
	'The Phantom Menace': {},
	'Attack of the Clones': {},
	'Revenge of the Sith': {},
};

function App() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [movieItems, setMovieItems] = useState(initial);

	useEffect(() => {
		axios
			.get(`${config.baseApi}films/`)
			.then((res) => {
				setMovies(res.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className='App'>
			<Header />
			<MovieSelector movies={movies} setSelectedMovie={setSelectedMovie} />
			<DisplayMovie
				selectedMovie={selectedMovie}
				setMovieItems={setMovieItems}
				movieItems={movieItems}
			/>
		</div>
	);
}

export default App;
