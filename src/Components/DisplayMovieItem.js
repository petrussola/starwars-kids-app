import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: #3498db;
	color: white;
	padding: 0.5rem;
	margin: 0.2rem;
	border-radius: 4px;
`;

const DisplayMovieItem = ({ char }) => {
	const [charName, setCharName] = useState();
	useEffect(() => {
		axios
			.get(char)
			.then((res) => {
				setCharName(res.data.name);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [char]);
	return <StyledDiv>{charName}</StyledDiv>;
};

export default DisplayMovieItem;
