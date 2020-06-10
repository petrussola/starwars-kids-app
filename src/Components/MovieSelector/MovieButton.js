import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: #3498db;
	color: white;
	min-width: 150px;
	height: 100px;
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 4px;
	font-size: 2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const MovieButton = ({ movie, setSelectedMovie }) => {
	const selectMovie = (e) => {
		setSelectedMovie(movie);
	};

	return (
		<StyledDiv value={movie.title} onClick={selectMovie}>
			{movie.title}
		</StyledDiv>
	);
};

export default MovieButton;
