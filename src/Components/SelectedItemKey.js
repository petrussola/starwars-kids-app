import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import SelectedItemValue from './SelectedItemValue';

const SelectedItemKey = ({
	selectedItem,
	selectedMovie,
	movieItemsCache,
	setMovieItemsCache,
}) => {
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
