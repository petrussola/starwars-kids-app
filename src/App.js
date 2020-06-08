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
import SelectedItemKey from './Components/SelectedItemKey';

// helpers
import config from './config';

function App() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [movieItemsCache, setMovieItemsCache] = useState({});
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
						setMovieItemsCache={setMovieItemsCache}
						movieItemsCache={movieItemsCache}
						setSelectedItem={setSelectedItem}
					/>
				)}
			/>
			<Route
				path='/:name'
				render={(props) => (
					<SelectedItemKey
						{...props}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						selectedMovie={selectedMovie}
						movieItemsCache={movieItemsCache}
						setMovieItemsCache={setMovieItemsCache}
					/>
				)}
			/>
		</div>
	);
}

export default App;
