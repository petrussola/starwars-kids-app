import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
	height: 150px;
	width: 150px;
	margin: 0.2rem;
	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}
`;

const ItemImage = ({ image, location }) => {
	return (
		<StyledDiv>
			<Link
				to={{
					pathname: `/images/${image.imageId}`,
					state: { image, prevPath: location.pathname },
				}}
			>
				<img src={image.contentUrl} alt={image.name} />
			</Link>
		</StyledDiv>
	);
};

export default ItemImage;
