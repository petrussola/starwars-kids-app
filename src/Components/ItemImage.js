import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	height: 150px;
	width: 150px;
	margin: 0.2rem;
	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}
`;

const ItemImage = ({ image }) => {
	return (
		<StyledDiv>
			<img src={image.contentUrl} alt={image.name} />
		</StyledDiv>
	);
};

export default ItemImage;
