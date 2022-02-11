import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import bg from '../assets/img/bg.png';
import CashProperty from './CashProperty';
import RouletteTypeSelector from './RouletteTypeSelector';
import SpinButton from './SpinButton';
import SpinningSlot from './SpinningSlot';

import porsche from '../assets/img/prizes/porsche.png'
import coin from '../assets/img/prizes/coin.png'

import infoIcon from '../assets/img/icons/info.svg';
import rouletteIcon from '../assets/img/icons/roulette.svg';
import cartIcon from '../assets/img/icons/cart.svg';
import arrow from '../assets/img/arrow.svg'
import closeButton from '../assets/img/icons/close.svg'
import Button from './Button';


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
	const [title, setTitle] = useState("Золотая рулетка");
	const [subTitle, setSubTitle] = useState("Одна из самых драгоценных рулеток, открывай и выигрывай!");

	const [balance, setBalance] = useState(0);
	const [pricePerSpin, setPricePerSpin] = useState(0);

	const [spinButtonTitle, setSpinButtonTitle] = useState("Крутить");
	const [spinButtonIcon, setSpinButtonIcon] = useState(rouletteIcon);
	const [spinButtonBackground, setSpinButtonBackground] = useState("linear-gradient(232.51deg, #943030 -15.58%, #46005F 162.66%)");
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

	useEffect(() => {
		generateSlots();
	}, [])

	useEffect(() => {
		if (spinsLeft === 0) {
			setSpinButtonTitle("Купить");
			setSpinButtonBackground("linear-gradient(232.51deg, #34B429 -15.58%, #2C452E 162.66%)");
			setSpinButtonIcon(cartIcon);
		} else {
			setSpinButtonTitle("Крутить");
			setSpinButtonBackground("linear-gradient(232.51deg, #943030 -15.58%, #46005F 162.66%)");
			setSpinButtonIcon(rouletteIcon);
		}
	}, [spinsLeft])

	function handleSpinButtonClick() {
		if (spinsLeft === 0) {
			// TODO: Покупка спина
			setSpinsLeft(spinsLeft + 1);
		} else {
			if (isRolling)
				return;

			setSpinsLeft(spinsLeft - 1);
			resetRoulette();
			generateSlots();
			setIsRolling(true);
		}
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
		setIsRolling(false);
	}

	function generateSlots() {
		let slots = [];
		for (let i = 0; i < 38; i++) {
			let item;
			if (i === 33) {
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
		let title, subTitle;
		switch (tabIndex) {
			default:
				title = "Бронзовая рулетка";
				subTitle = "Описание бронзовой рулетки";
				break;
			case 1:
				title = "Серебряная рулетка"
				subTitle = "Описание серебряной рулетки";
				break;
			case 2:
				title = "Золотая рулетка"
				subTitle = "Одна из самых драгоценных рулеток, открывай и выигрывай!";
				break;
		}

		setTitle(title);
		setSubTitle(subTitle);
	}

	function handleClose() {

	}

	return (
		<Screen>
			<RouletteContainer>
				<CloseButton src={closeButton} onClick={handleClose}></CloseButton>
				<Title>{title}</Title>
				<Subtitle>{subTitle}</Subtitle>

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
						<RouletteTypeSelectionTitle>Тип рулетки:</RouletteTypeSelectionTitle>
						<RouletteTypeSelector onSelectionChanged={handleRouletteTypeChange} isLocked={isRolling}></RouletteTypeSelector>
					</div>
				</Dashboard>

				<RouletteBody>
					<Splitter></Splitter>
					<Arrow src={arrow}></Arrow>

					<RouletteSlotsContainer ref={slotsContainerRef}>
						{generatedSlots}
					</RouletteSlotsContainer>

					<InversedArrow src={arrow}></InversedArrow>
					<Splitter></Splitter>
				</RouletteBody>

				<Dashboard>
					<div>
						<RoulettePriceTitle>Стоимость прокрутки:</RoulettePriceTitle>
						<CashProperty
							currency="RUB"
							value={pricePerSpin}
							currencyColor="radial-gradient(59.74% 67.54% at 50.67% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #B97A00"
							backgroundColor="linear-gradient(90deg, rgba(231, 168, 74, 0.3) -39.33%, rgba(133, 107, 42, 0.0015625) 99.99%)">
						</CashProperty>
					</div>
					<SpinButton title={spinButtonTitle} icon={spinButtonIcon} backgroundColor={spinButtonBackground} onClick={handleSpinButtonClick} spinsLeft={spinsLeft}></SpinButton>
					<Button title="Информация" icon={infoIcon} backgroundColor="rgba(34, 34, 34, 0.7)"></Button>

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

const CloseButton = styled.img`
	position: absolute;
	display: block;

	right: 2.5vw;
	top: 2.5vw;

	transition: all 0.15s ease-in;
	transform: translate(50%, -50%);

	width: 1.2vw;

	:hover {
		width: 1.4vw;
	}
`

const RouletteContainer = styled.div`
	background-color: rgba(27, 15, 31, 95%);
	border-radius: 1vw;

	height: 30vw;
	width: 55vw;

	padding: 2vw;
	position: relative;
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
	margin: .8vw 0;
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
	font-size: .9vw;
	font-weight: 500;
	margin-bottom: .25vw;
`

export default Roulette;