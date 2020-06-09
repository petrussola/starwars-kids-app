import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
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
			<Link to={prevPath}>Back to {prevPath.split('/')[1]}</Link>
			<div className='image-container'>
				<img src={contentUrl} alt={name} />
			</div>
			<Link to={prevPath}>Back</Link>
		</StyledDiv>
	);
};

export default DisplaySelectedImage;
