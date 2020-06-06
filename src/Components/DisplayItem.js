import React from 'react';
import { Link } from 'react-router-dom';

const DisplayItem = ({ selectedItem, selectedMovie }) => {
	const noGo = ['species', 'pilots', 'url', 'edited', 'created', 'films'];
	const keys = Object.keys(selectedItem).filter((item) => {
		return !noGo.includes(item);
	});
	return (
		<div>
			{keys.map((item) => {
				return (
					<h4>
						{item[0].toUpperCase() + item.slice(1)}: {selectedItem[item]}
					</h4>
				);
			})}
			<Link to='/'>Back to Movie: {selectedMovie.title}</Link>
		</div>
	);
};

export default DisplayItem;
