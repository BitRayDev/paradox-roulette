import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function SpinButton({title, icon, backgroundColor, onClick, spinsLeft}) {
	return (
		<SpinContainer>
			<Button title={title} icon={icon} backgroundColor={backgroundColor} onClick={onClick}></Button>
			<SpinsLeftContainer>
				<SpinsLeftTitle>Осталось:</SpinsLeftTitle>
				<SpinsLeftValue>{spinsLeft} шт.</SpinsLeftValue>
			</SpinsLeftContainer>
		</SpinContainer>
	);
}

const SpinContainer = styled.div`
	display: flex;
	align-items: center;

	background: #271828;
	border-radius: 1vw;	
`

const SpinsLeftContainer = styled.div`
	padding: 0 .5vw;	
`

const SpinsLeftTitle = styled.h3`
	font-weight: 500;
	font-size: .5vw;
`
const SpinsLeftValue = styled.h3`
	font-size: 1vw;
`

export default SpinButton;