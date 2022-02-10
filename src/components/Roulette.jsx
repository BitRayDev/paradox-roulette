import React, { createRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import bg from '../assets/img/bg.png';
import CashProperty from './CashProperty';
import InfoButton from './InfoButton';
import RouletteTypeSelector from './RouletteTypeSelector';
import SpinButton from './SpinButton';
import SpinningSlot from './SpinningSlot';

import porsche from '../assets/img/prizes/porsche.png'
import coin from '../assets/img/prizes/coin.png'

import arrow from '../assets/img/arrow.svg'

const itemColors = [
	{
		backgroundColor: "#BD00FF",
		neonColorBegin: "#FF3DF7",
		neonColorEnd: "#FA12FF"
	},
	{
		backgroundColor: "#00C2FF",
		neonColorBegin: "#3D8AFF",
		neonColorEnd: "#129BFF"
	},
	{
		backgroundColor: "#FFA800",
		neonColorBegin: "#FFC329",
		neonColorEnd: "#FFAE12"
	},
	{
		backgroundColor: "#FF5C00",
		neonColorBegin: "#FF543D",
		neonColorEnd: "#FF0F00"
	},

]

const items = [
	{
		name: "Porsche",
		icon: porsche,
		color: itemColors[0]
	},
	{
		name: "Coin",
		icon: coin,
		color: itemColors[1]
	},
	{
		name: "Coin",
		icon: coin,
		color: itemColors[2]
	},
	{
		name: "Coin",
		icon: coin,
		color: itemColors[3]
	},
]

function Roulette(props) {
	const [balance, setBalance] = useState(0);
	const [pricePerSpin, setPricePerSpin] = useState(0);
	const [spinsLeft, setSpinsLeft] = useState(0);
	const [generatedSlots, setGeneratedSlots] = useState([]);
	const [winItem, setWinItem] = useState(items[0]);
	const [isRolling, setIsRolling] = useState(false);

	let slotsContainerRef = React.createRef();

	useEffect(() => {
		if (!isRolling)
			return;

		slotsContainerRef.current.ontransitionend = stopRoulette;
		startRoulette();
	}, [generatedSlots]);

	function handleSpinButtonClick() {
		if (isRolling)
			return;

		resetRoulette();
		generateSlots();
		setIsRolling(true);
	}

	function resetRoulette() {
		slotsContainerRef.current.style.transition = "none";
		slotsContainerRef.current.style.transform = "translate(-7vw)";
	}

	function startRoulette() {
		slotsContainerRef.current.style.transition = "transform 8s cubic-bezier(.08,.6,0,1)";
		slotsContainerRef.current.style.transform = "translate(-307vw)";
		setIsRolling(true);
	}

	function stopRoulette() {
		slotsContainerRef.current.style.transition = "none";
		setIsRolling(false);
	}

	function generateSlots() {
		let slots = [];
		for (let i = 0; i < 38; i++) {
			let item;
			if (i == 33) {
				item = winItem;
			} else {
				let itemIndex = getRandomInt(0, 4);
				item = items[itemIndex];
			}

			slots.push(
				<SpinningSlot
					id={i}
					key={i}
					itemName={item.name}
					itemIcon={item.icon}
					neonColorBegin={item.color.neonColorBegin}
					neonColorEnd={item.color.neonColorEnd}
					backgroundColor={item.color.backgroundColor}>
				</SpinningSlot>
			)
		}
		setGeneratedSlots(slots);
	}

	function handleRouletteTypeChange(tabIndex) {
		console.log("Type have changed!");
	}

	return (
		<Screen>
			<RouletteContainer>
				<Title>Золотая рулетка</Title>
				<Subtitle>Одна из самых дорогоценных рулеток, открывай и выигрывай!</Subtitle>

				<Dashboard>
					<div>
						<BalanceTitle>Баланс:</BalanceTitle>
						<CashProperty
							currency="RUB"
							value={balance}
							currencyColor="radial-gradient(59.74% 67.54% at 50.67% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #2CA22A"
							backgroundColor="linear-gradient(90deg, rgba(77, 231, 74, 0.3) -39.33%, rgba(60, 133, 42, 0.0015625) 99.99%, rgba(57, 89, 254, 0) 100%)">
						</CashProperty>
					</div>
					<div>
						<RouletteTypeSelectionTitle>Выбор рулетки:</RouletteTypeSelectionTitle>
						<RouletteTypeSelector onSelectionChanged={handleRouletteTypeChange}></RouletteTypeSelector>
					</div>
				</Dashboard>

				<SplitterContainer>
					<Splitter></Splitter>
					<Arrow src={arrow}></Arrow>
				</SplitterContainer>

				<RouletteBody>
					<RouletteSlotsContainer ref={slotsContainerRef}>
						{generatedSlots}
					</RouletteSlotsContainer>
				</RouletteBody>

				<SplitterContainer>
					<InversedArrow src={arrow}></InversedArrow>
					<Splitter></Splitter>
				</SplitterContainer>

				<Dashboard>
					<div>
						<RoulettePriceTitle>Стоимость рулетки:</RoulettePriceTitle>
						<CashProperty
							currency="RUB"
							value={pricePerSpin}
							currencyColor="radial-gradient(59.74% 67.54% at 50.67% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #B97A00"
							backgroundColor="linear-gradient(90deg, rgba(231, 168, 74, 0.3) -39.33%, rgba(133, 107, 42, 0.0015625) 99.99%)">
						</CashProperty>
					</div>
					<SpinButton onClick={handleSpinButtonClick} spinsLeft={spinsLeft}></SpinButton>

					<InfoButton></InfoButton>
				</Dashboard>
			</RouletteContainer>
		</Screen>
	);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

const Screen = styled.div`
	background: url(${bg});
	background-size: cover;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`

const RouletteContainer = styled.div`
	background-color: rgba(27, 15, 31, 95%);
	border-radius: 1vw;

	height: 30vw;
	width: 55vw;

	padding: 2vw;
`

const Title = styled.h1`
	color: white;
	font-size: 1.6vw;
	font-weight: 500;
`

const Subtitle = styled.h2`
	color: #ABA6A6;
	font-size: 1vw;
	font-weight: normal;

	margin-bottom: 2vw;
`

const Dashboard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const BalanceTitle = styled.h4`
	color: white;
	font-size: .9vw;
	font-weight: 500;
	margin-bottom: .25vw;
`

const RouletteTypeSelectionTitle = styled.h4`
	font-size: .9vw;
	text-align: right;
	font-weight: 500;
	margin-bottom: .25vw;
`
const SplitterContainer = styled.div`
	margin: .5vw 0;
`

const Splitter = styled.hr`
	border: none;
	background-color: #8122A1;
	
	height: 1px;
`

const ArrowBase = `
	display: block;
	margin: 0 auto;
	width: 20vw;
`

const Arrow = styled.img`
	${ArrowBase}
`

const InversedArrow = styled.img`
	${ArrowBase}
	transform: rotate(180deg);
`

const RouletteBody = styled.div`
	overflow: hidden;
`
const RouletteSlotsContainer = styled.div`
	display: flex;
	transform: translate(-7vw);
	height: 10vw;
	gap: 1vw;
	transition: transform 8s cubic-bezier(.08,.6,0,1);
`

const RoulettePriceTitle = styled.h3`
	color: white;
	font-size: .6vw;
	font-weight: 500;
	margin-bottom: .25vw;
`

export default Roulette;