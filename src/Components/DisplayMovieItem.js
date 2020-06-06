import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
	setSelectedItem,
}) => {
	const [char, setChar] = useState({});

	const clickItemHandler = () => {
		setSelectedItem(char);
	};

	useEffect(() => {
		axios
			.get(item)
			.then((res) => {
				setChar(res.data);
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
	return (
		<Link to={`/${char.name}`}>
			<StyledDiv onClick={clickItemHandler}>{char.name}</StyledDiv>
		</Link>
	);
};

export default DisplayMovieItem;
