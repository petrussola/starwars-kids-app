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
	movieItemsCache,
	setMovieItemsCache,
	setSelectedItem,
}) => {
	const [char, setChar] = useState({});

	const clickItemHandler = () => {
		setSelectedItem({ ...char, media: [] });
		localStorage.setItem(
			'selectedItem',
			JSON.stringify({ ...char, media: [] })
		);
	};

	useEffect(() => {
		if (!movieItemsCache[item]) {
			axios
				.get(item)
				.then((res) => {
					setChar(res.data);
					// sets the item in the cache
					// key is the link and value is res.data returned by the api call
					setMovieItemsCache((movieItemsCache) => {
						return { ...movieItemsCache, [item]: res.data };
					});
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			setChar(movieItemsCache[item]);
		}
	}, []);
	return (
		<Link to={`/${char.name}`}>
			<StyledDiv onClick={clickItemHandler}>{char.name}</StyledDiv>
		</Link>
	);
};

export default DisplayMovieItem;
