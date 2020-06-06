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

const DisplayMovieItem = ({
	item,
	title,
	setMovieItems,
	movieItems,
	category,
}) => {
	const [charName, setCharName] = useState();
	useEffect(() => {
		axios
			.get(item)
			.then((res) => {
				setCharName(res.data.name);
				setMovieItems((movieItems) => ({
					...movieItems,
					[title]: {
						...movieItems[title],
						[category]: {
							...movieItems[title][category],
							[res.data.name]: res.data,
						},
					},
				}));
			})
			.catch((error) => {
				console.log(error);
			});
	}, [item]);
	return <StyledDiv>{charName}</StyledDiv>;
};

export default DisplayMovieItem;
