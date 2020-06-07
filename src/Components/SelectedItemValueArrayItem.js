import React, { useEffect } from 'react';
import axios from 'axios';

const SelectedItemValueArrayItem = ({
	arrayItem,
	movieItemsCache,
	setMovieItemsCache,
}) => {
	useEffect(() => {
		if (!movieItemsCache[arrayItem]) {
			axios
				.get(arrayItem)
				.then((res) => {
					// sets the item in the cache
					// key is the link and value is res.data returned by the api call
					setMovieItemsCache((movieItemsCache) => {
						return { ...movieItemsCache, [arrayItem]: res.data };
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [movieItemsCache]);
	return (
		<div>
			{movieItemsCache[arrayItem]
				? `${Object.keys(movieItemsCache[arrayItem])[0]}: ${
						movieItemsCache['title']
				  }`
				: 'loading'}
		</div>
	);
};

export default SelectedItemValueArrayItem;
