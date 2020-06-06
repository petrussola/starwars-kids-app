import React from 'react';
import styled from 'styled-components';
import DisplayMovieItem from './DisplayMovieItem';

const StyledItems = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	margin: 1rem;
`;

const DisplayMovie = ({ selectedMovie, setMovieItems, movieItems }) => {
	if (!selectedMovie.title) {
		return <div>Please select a movie</div>;
	}
	return (
		<div>
			<h3>{selectedMovie.title}</h3>
			<p>{selectedMovie.opening_crawl}</p>
			<h4>Characters:</h4>
			<StyledItems>
				{selectedMovie.characters.map((item) => {
					return (
						<DisplayMovieItem
							item={item}
							key={item}
							title={selectedMovie.title}
							setMovieItems={setMovieItems}
							movieItems={movieItems}
							category='characters'
						/>
					);
				})}
			</StyledItems>
			<h4>Planets:</h4>
			<StyledItems>
				{selectedMovie.planets.map((item) => {
					return (
						<DisplayMovieItem
							item={item}
							key={item}
							title={selectedMovie.title}
							setMovieItems={setMovieItems}
							movieItems={movieItems}
							category='planets'
						/>
					);
				})}
			</StyledItems>
			<h4>Starships:</h4>
			<StyledItems>
				{selectedMovie.starships.map((item) => {
					return (
						<DisplayMovieItem
							item={item}
							key={item}
							title={selectedMovie.title}
							setMovieItems={setMovieItems}
							movieItems={movieItems}
							category='starships'
						/>
					);
				})}
			</StyledItems>
			<h4>Vehicles:</h4>
			<StyledItems>
				{selectedMovie.vehicles.map((item) => {
					return (
						<DisplayMovieItem
							item={item}
							key={item}
							title={selectedMovie.title}
							setMovieItems={setMovieItems}
							movieItems={movieItems}
							category='vehicles'
						/>
					);
				})}
			</StyledItems>
		</div>
	);
};

export default DisplayMovie;
