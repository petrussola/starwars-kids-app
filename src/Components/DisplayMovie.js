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

const DisplayMovie = ({ selectedMovie }) => {
	if (!selectedMovie.title) {
		return <div>Please select a movie</div>;
	}
	return (
		<div>
			<h3>{selectedMovie.title}</h3>
			<p>{selectedMovie.opening_crawl}</p>
			<h4>Characters:</h4>
			<StyledItems>
				{selectedMovie.characters.map((char) => {
					return <DisplayMovieItem char={char} key={char} />;
				})}
			</StyledItems>
			<h4>Planets:</h4>
			<StyledItems>
				{selectedMovie.planets.map((char) => {
					return <DisplayMovieItem char={char} key={char} />;
				})}
			</StyledItems>
			<h4>Starships:</h4>
			<StyledItems>
				{selectedMovie.starships.map((char) => {
					return <DisplayMovieItem char={char} key={char} />;
				})}
			</StyledItems>
			<h4>Vehicles:</h4>
			<StyledItems>
				{selectedMovie.vehicles.map((char) => {
					return <DisplayMovieItem char={char} key={char} />;
				})}
			</StyledItems>
		</div>
	);
};

export default DisplayMovie;
