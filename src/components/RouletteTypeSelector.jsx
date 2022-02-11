import React, { useState } from 'react';
import styled from 'styled-components';

function RouletteTypeSelector({onSelectionChanged, isLocked}) {
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);
	const tabsContainer = React.createRef();

	function handleClick(e) {
		if(isLocked)
			return;

		let selectedIndex = [].indexOf.call (tabsContainer.current.children, e.target);
		if(selectedIndex != selectedTabIndex && selectedIndex >= 0) {
			setSelectedTabIndex(selectedIndex);
			onSelectionChanged(selectedIndex);
		}
	}

	return (
		<TabsContainer onClick={handleClick} ref={tabsContainer}>
			<BronzeTab active={selectedTabIndex === 0}>Бронзовая</BronzeTab>
			<SilverTab active={selectedTabIndex === 1}>Серебряная</SilverTab>
			<GoldTab active={selectedTabIndex === 2}>Золотая</GoldTab>
		</TabsContainer>
	);
}

const TabsContainer = styled.div`
	display: flex;
`
const BaseTab = `
	padding: .5vw .8vw;
	font-size: .8vw;
	font-weight: 500;
	transition: all .25s ease-out;

	opacity: 20%;

	:first-child {
		border-radius: .25vw 0 0 .25vw;
	}

	:last-child {
		border-radius: 0 .25vw .25vw 0;
	}
	cursor: pointer;
`

const ActiveTab = `
	opacity: 100%;
`

const BronzeTab = styled.h4`
	background: linear-gradient(123.54deg, #9B764E -6.88%, #724D25 100.16%);
	${BaseTab}
	${props => (props.active ? ActiveTab : "")}
`
const SilverTab = styled.h4`
	color: #1B1B1B;
	background: linear-gradient(123.54deg, #E5E5E5 -6.88%, #8D8D8D 100.16%);
	${BaseTab}
	${props => (props.active ? ActiveTab : "")}
`
const GoldTab = styled.h4`
	color: rgba(78, 25, 25, 1);
	background: linear-gradient(123.54deg, #F9C922 -6.88%, #BF7300 100.16%);
	${BaseTab}
	${props => (props.active ? ActiveTab : "")}
`

export default RouletteTypeSelector;