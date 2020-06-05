import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: #3498db;
	border: 1px solid #3498bd;
	border-radius: 4px;
	color: #fff;
	padding: 1rem;
	margin: 0 0 1rem 0;
`;

const MovieButton = ({ movie, setSelectedMovie }) => {
	const selectMovie = (e) => {
		setSelectedMovie(movie);
	};

	return (
		<StyledButton value={movie.title} onClick={selectMovie}>
			{movie.title}
		</StyledButton>
	);
};

export default MovieButton;
