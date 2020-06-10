import React from 'react';
import styled from 'styled-components';

// components
import SelectedItemValueArrayItem from '../SelectedItemValueArrayItem';

const StyledDiv = styled.div`
	padding: 0.5rem;
	font-size: 1rem;
`;

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
		<StyledDiv>
			{`${nameProperty[0].toUpperCase()}${nameProperty.slice(1)}: ${
				selectedItem[nameProperty]
			}`}
		</StyledDiv>
	);
};

export default SelectedItemValue;
