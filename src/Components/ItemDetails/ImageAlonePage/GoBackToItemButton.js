import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	background-color: orange;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`;

const GoBackToItemButton = ({ prevPath }) => {
	return (
		<StyledLink to={prevPath}>Back to {prevPath.split('/')[1]}</StyledLink>
	);
};

export default GoBackToItemButton;
