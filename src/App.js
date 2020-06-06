// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// style
import './App.css';

// components
import Header from './Components/Header';
import MovieSelector from './Components/MovieSelector';
import DisplayMovie from './Components/DisplayMovie';
import DisplayItem from './Components/DisplayItem';

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
	const [selectedItem, setSelectedItem] = useState({});

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
			<Route
				exact
				path='/'
				render={(props) => (
					<MovieSelector
						{...props}
						movies={movies}
						setSelectedMovie={setSelectedMovie}
					/>
				)}
			/>
			<Route
				exact
				path='/'
				render={(props) => (
					<DisplayMovie
						{...props}
						selectedMovie={selectedMovie}
						setMovieItems={setMovieItems}
						movieItems={movieItems}
						setSelectedItem={setSelectedItem}
					/>
				)}
			/>
			<Route
				path='/:name'
				render={(props) => (
					<DisplayItem
						{...props}
						selectedItem={selectedItem}
						selectedMovie={selectedMovie}
					/>
				)}
			/>
		</div>
	);
}

export default App;
