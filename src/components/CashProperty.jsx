import React from 'react';
import styled from 'styled-components';

function CashProperty({currency, value, currencyColor, backgroundColor}) {
	return (
		<CashPropertyContainer backgroundColor={backgroundColor}>
			<CashPropertyCurrencyContainer backgroundColor={currencyColor}>
				<CashPropertyCurrency>
					{currency}
				</CashPropertyCurrency>
			</CashPropertyCurrencyContainer>
			<CashPropertyValue>{value}</CashPropertyValue>
		</CashPropertyContainer>
	);
}

const CashPropertyContainer = styled.div`
	width: 6vw;
	transform: skewX(-12deg);
	background: ${props => props.backgroundColor};
	border-radius: .5vw;

	display: flex;
	
`
const CashPropertyCurrencyContainer = styled.div`
	background: ${props => props.backgroundColor};
	padding: .3vw .5vw;
	border-radius: .5vw 0 .5vw .5vw;
`

const CashPropertyCurrency = styled.h3`
	transform: skewX(12deg);
	font-weight: 500;
	font-size: 1vw;
`
const CashPropertyValue = styled.h3`
	padding: .25vw .75vw;
	transform: skewX(12deg);
	font-weight: 500;
	font-size: 1vw;
`

export default CashProperty;