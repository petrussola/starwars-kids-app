import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// HELPERS
import { axiosWithBase, baseURL } from '../Axios/axios';

// COMPONENTS
import SelectedItemValue from './SelectedItemValue';
import ItemImage from './ItemImage';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 1rem;
	.item-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		margin: 1rem auto;
		.item-images {
			margin: 1rem auto;
			width: 75vw;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-evenly;
		}
		.item-properties {
			margin: 1rem auto;
			width: 25vw;
		}
	}
`;

const SelectedItemKey = ({
	selectedItem,
	setSelectedItem,
	selectedMovie,
	movieItemsCache,
	setMovieItemsCache,
}) => {
	useEffect(() => {
		if (localStorage.getItem('selectedItem') !== null) {
			const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
			console.log(selectedItem);
			setSelectedItem(selectedItem);
		}
		// calling bing image search api
		axiosWithBase()
			.get(`${baseURL}?q=${selectedItem.name}&safeSearch=strict`)
			.then((res) => {
				// res.data.value is an array , 35 items
				// data can be found inside the contentUrl property
				setSelectedItem({ ...selectedItem, media: res.data.value });
				localStorage.setItem(
					'selectedItem',
					JSON.stringify({ ...selectedItem, media: res.data.value })
				);
			})
			.catch((error) => {
				debugger;
			});
	}, []);

	const noGo = [
		'species',
		'pilots',
		'url',
		'edited',
		'created',
		'films',
		'starships',
		'vehicles',
		'homeworld',
		'media',
		'residents',
	];
	const keys = Object.keys(selectedItem).filter((nameProperty) => {
		return !noGo.includes(nameProperty);
	});
	return (
		<StyledContainer>
			<Link to='/'>Back to Movie: {selectedMovie.title}</Link>
			<div className='item-info'>
				<div className='item-images'>
					{selectedItem.media.map((image) => {
						return <ItemImage image={image} key={image.contentUrl} />;
					})}
				</div>
				<div className='item-properties'>
					{keys.map((nameProperty) => {
						return (
							<SelectedItemValue
								nameProperty={nameProperty}
								selectedItem={selectedItem}
								movieItemsCache={movieItemsCache}
								setMovieItemsCache={setMovieItemsCache}
							/>
						);
					})}
				</div>
			</div>
			<Link to='/'>Back to Movie: {selectedMovie.title}</Link>
		</StyledContainer>
	);
};

export default SelectedItemKey;
