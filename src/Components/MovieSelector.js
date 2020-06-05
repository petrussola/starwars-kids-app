import React from 'react';
import styled from 'styled-components';

import MovieButton from './MovieButton';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	/* margin: 1rem 2rem; */
	border-bottom: 1px solid #777;
`;

const MovieSelector = ({ movies, setSelectedMovie }) => {
	return (
		<StyledDiv>
			{movies.map((movie) => {
				return (
					<MovieButton
						movie={movie}
						setSelectedMovie={setSelectedMovie}
						key={movie.episode_id}
					/>
				);
			})}
		</StyledDiv>
	);
};

export default MovieSelector;
