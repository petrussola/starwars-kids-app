import React from 'react';

// components
import SelectedItemValueArrayItem from './SelectedItemValueArrayItem';

const SelectedItemValue = ({
	nameProperty,
	selectedItem,
	movieItemsCache,
	setMovieItemsCache,
}) => {
	if (Array.isArray(selectedItem[nameProperty])) {
		return (
			<div>
				<h2>{`${nameProperty}: `}</h2>
				{selectedItem[nameProperty].map((arrayItem) => {
					return (
						<SelectedItemValueArrayItem
							arrayItem={arrayItem}
							movieItemsCache={movieItemsCache}
							setMovieItemsCache={setMovieItemsCache}
						/>
					);
				})}
			</div>
		);
	}
	return (
		<div>
			{`${nameProperty[0].toUpperCase()}${nameProperty.slice(1)}: ${
				selectedItem[nameProperty]
			}`}
		</div>
	);
};

export default SelectedItemValue;
