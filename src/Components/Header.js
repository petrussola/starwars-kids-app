import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
    border-bottom: 1px solid #777
`;

const Header = () => {
	return (
		<StyledDiv>
			<h1>Star Wars Encyclopedia</h1>
		</StyledDiv>
	);
};

export default Header;
