import React from 'react';
import styled from 'styled-components';

function Button({title, icon, backgroundColor, onClick}) {
	return (
		<ButtonElement backgroundColor={backgroundColor} onClick={onClick}>
			<ButtonIcon src={icon}></ButtonIcon>
			{title}
		</ButtonElement>
	);
}

const ButtonElement = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: .25vw;

	border: none;
	border-radius: 1vw;	

	background: ${props => props.backgroundColor};
	height: 3vw;
	width: 10vw;

	font-size: 1vw;
	transition: all .25s ease-out;

	:hover img {
		height: 1.05vw;
	}

	:hover {
		font-size: 1.05vw;
	}
`
const ButtonIcon = styled.img`
	height: 1vw;
`

export default Button;