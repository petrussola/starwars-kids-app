import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import GoBackToItemButton from './GoBackToItemButton';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin: 1rem;
	.image-container {
		width: 500px;
		height: 500px;
		margin: 1rem 0;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center top;
			border-radius: 5px;
		}
	}
`;

const DisplaySelectedImage = (props) => {
	const { contentUrl, name } = props.location.state.image;
	const { prevPath } = props.location.state;
	return (
		<StyledDiv>
			<GoBackToItemButton prevPath={prevPath} />
			<div className='image-container'>
				<img src={contentUrl} alt={name} />
			</div>
			<GoBackToItemButton prevPath={prevPath} />
		</StyledDiv>
	);
};

export default DisplaySelectedImage;
