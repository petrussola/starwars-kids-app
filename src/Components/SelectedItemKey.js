import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// HELPERS
import { axiosWithBase, baseURL } from '../Axios/axios';

// COMPONENTS
import SelectedItemValue from './SelectedItemValue';

const SelectedItemKey = ({
	selectedItem,
	setSelectedItem,
	selectedMovie,
	movieItemsCache,
	setMovieItemsCache,
}) => {
	useEffect(() => {
		axiosWithBase()
			.get(`${baseURL}?q=${selectedItem.name}`)
			.then((res) => {
				// res.data.value is an array , 35 items
				// data can be found inside the contentUrl property
				setSelectedItem({ ...selectedItem, media: res.data.value });
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
	];
	const keys = Object.keys(selectedItem).filter((nameProperty) => {
		return !noGo.includes(nameProperty);
	});
	return (
		<div>
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
			<Link to='/'>Back to Movie: {selectedMovie.title}</Link>
		</div>
	);
};

export default SelectedItemKey;
