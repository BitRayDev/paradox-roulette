import React from 'react';
import styled from 'styled-components';

function SpinButton({onClick, spinsLeft}) {
	return (
		<SpinContainer>
			<SpinButtonContainer onClick={onClick}>Крутить</SpinButtonContainer>
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
const SpinButtonContainer = styled.button`
	border: none;
	border-radius: 1vw;
	background: linear-gradient(232.51deg, #943030 -15.58%, #46005F 162.66%);
	padding: .75vw 2vw;
	font-size: 1vw;

	transition: all .25s ease-out;
	:hover {
		font-size: 1.1vw;
	}
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