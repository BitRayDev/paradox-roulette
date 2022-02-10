import React from 'react';
import styled from 'styled-components';

import infoIcon from '../assets/img/icons/info.svg';

function InfoButton(props) {
	return (
		<Button>
			<Icon src={infoIcon}></Icon>
			Информация
		</Button>
	);
}

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: .5vw;

	border: none;
	border-radius: 1vw;	

	background: rgba(34, 34, 34, 0.7);
	padding: .75vw 1vw;

	font-size: 1vw;
	transition: all .25s ease-out;

	:hover img {
		height: 1.1vw;
	}

	:hover {
		font-size: 1.1vw;
	}
`
const Icon = styled.img`
	height: 1vw;
`

export default InfoButton;