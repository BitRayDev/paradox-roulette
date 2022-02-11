import React from 'react';
import styled from 'styled-components';

function SpinningSlot({backgroundColor, neonColorBegin, neonColorEnd, itemName, itemIcon, id}) {
	return (
		<SlotContainer>
			<svg style={{position: "absolute", width: "100%", height: "100%"}}  viewBox="0 0 186 206" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="item-slot">
					<path id="black-bg-layer" d="M0 24C0 15.7157 6.71573 9 15 9H37.4923C40.5031 9 43.4442 9.90604 45.9331 11.6003L49.5235 14.0444C52.0124 15.7386 54.9535 16.6446 57.9643 16.6446H91.2453H128.036C131.046 16.6446 133.988 15.7386 136.476 14.0444L140.067 11.6003C142.556 9.90604 145.497 9 148.508 9H171C179.284 9 186 15.7157 186 24V179C186 187.284 179.284 194 171 194H148.508C145.497 194 142.556 193.094 140.067 191.4L136.476 188.956C133.988 187.261 131.057 186.355 128.046 186.355C120.278 186.355 104.32 186.355 93 186.355C81.6805 186.355 65.7223 186.355 57.9536 186.355C54.9428 186.355 52.0124 187.261 49.5235 188.956L45.9331 191.4C43.4442 193.094 40.5031 194 37.4923 194H15C6.71574 194 0 187.284 0 179V130.932V115.165V99.3977V83.6307V67.8636V24Z" fill="#271828" />
					
					<path id="gradient-bg-layer" d="M0 24C0 15.7157 6.71573 9 15 9H37.4717C40.4953 9 43.4483 9.91377 45.9435 11.6215L49.5131 14.0645C52.0083 15.7722 54.9613 16.686 57.9849 16.686H91.2453H128.015C131.039 16.686 133.992 15.7722 136.487 14.0645L140.056 11.6215C142.552 9.91377 145.505 9 148.528 9H171C179.284 9 186 15.7157 186 24V180C186 188.284 179.284 195 171 195H148.528C145.505 195 142.552 194.086 140.056 192.379L136.487 189.936C133.992 188.228 131.049 187.314 128.026 187.314C120.249 187.314 104.309 187.314 93 187.314C81.6906 187.314 65.7508 187.314 57.9744 187.314C54.9508 187.314 52.0083 188.228 49.5131 189.936L45.9435 192.379C43.4483 194.086 40.4953 195 37.4717 195H15C6.71574 195 0 188.284 0 180V131.591V115.739V99.8864V84.0341V68.1818V24Z" fill={`url(#paint0_linear_0_62_${id})`} fillOpacity="0.2" />
					<g id="top-neon" filter="url(#filter0_dd_0_62)">
						<path d="M51.7697 15.5734L43.1007 9.67224C42.6812 9.38667 42.1132 9.68714 42.1132 10.1946C42.1132 10.4038 42.2166 10.5994 42.3895 10.717L49.5235 15.5733C52.0124 17.2675 54.9535 18.1736 57.9642 18.1736H127.847C130.975 18.1736 134.025 17.1957 136.569 15.3768L143.687 10.2893C143.812 10.1998 143.887 10.0553 143.887 9.9014C143.887 9.51847 143.458 9.29175 143.142 9.50724L134.23 15.5734C133.205 16.2714 131.993 16.6446 130.753 16.6446H91.2452H55.247C54.0066 16.6446 52.795 16.2714 51.7697 15.5734Z" fill={`url(#paint1_linear_0_62_${id})`} />
					</g>
					<g id="bottom-neon" filter="url(#filter1_dd_0_62)">
						<path d="M134.23 187.426L142.899 193.328C143.319 193.613 143.887 193.313 143.887 192.805C143.887 192.596 143.783 192.401 143.611 192.283L136.477 187.427C133.988 185.732 131.047 184.826 128.036 184.826L58.153 184.826C55.0251 184.826 51.9754 185.804 49.4306 187.623L42.3128 192.711C42.1876 192.8 42.1133 192.945 42.1133 193.099C42.1133 193.481 42.5419 193.708 42.8584 193.493L51.7698 187.426C52.7951 186.729 54.0067 186.355 55.2471 186.355L94.7548 186.355L130.753 186.355C131.993 186.355 133.205 186.729 134.23 187.426Z" fill={`url(#paint2_linear_0_62_${id})`} />
					</g>
				</g>
				<defs>
					<filter id="filter0_dd_0_62" x="33.1132" y="0.423767" width="119.774" height="29.7498" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="4" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_62" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset />
						<feGaussianBlur stdDeviation="4.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0784314 0 0 0 0 0.996078 0 0 0 0.6 0" />
						<feBlend mode="normal" in2="effect1_dropShadow_0_62" result="effect2_dropShadow_0_62" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_62" result="shape" />
					</filter>
					<filter id="filter1_dd_0_62" x="33.1133" y="175.826" width="119.774" height="29.7498" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="4" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_62" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset />
						<feGaussianBlur stdDeviation="4.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.0784314 0 0 0 0 0.996078 0 0 0 0.6 0" />
						<feBlend mode="normal" in2="effect1_dropShadow_0_62" result="effect2_dropShadow_0_62" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_62" result="shape" />
					</filter>
					<linearGradient id={`paint0_linear_0_62_${id}`} x1="92.6491" y1="9" x2="92.649" y2="255.719" gradientUnits="userSpaceOnUse">
						<stop offset="0.255208" stopColor={backgroundColor} stopOpacity="0" />
						<stop offset="1" stopColor={backgroundColor} />
					</linearGradient>
					<linearGradient id={`paint1_linear_0_62_${id}`} x1="93" y1="9" x2="93" y2="17.7913" gradientUnits="userSpaceOnUse">
						<stop stopColor={neonColorBegin} />
						<stop offset="1" stopColor={neonColorEnd} />
					</linearGradient>
					<linearGradient id={`paint2_linear_0_62_${id}`} x1="93" y1="194" x2="93.0001" y2="185.209" gradientUnits="userSpaceOnUse">
						<stop stopColor={neonColorBegin} />
						<stop offset="1" stopColor={neonColorEnd} />
					</linearGradient>
				</defs>
			</svg>
			<SlotDataContainer>
				<SlotImageContainer>
					<SlotImage src={itemIcon}/>
				</SlotImageContainer>
				<SlotText color={neonColorBegin}>{itemName}</SlotText>
			</SlotDataContainer>
		</SlotContainer>
	);
}

const SlotContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-grow: 0;
	flex-shrink: 0;

	width: 9vw;

	position: relative;
`

const SlotDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	height: 7vw;
	width: 80%;

	position: relative;
	z-index: 3;
`

const SlotText = styled.h3`
	text-align: center;

	font-size: 1vw;
	font-weight: 300;
	color: ${props => props.color};
`

const SlotImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 5.5vw;
`

const SlotImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`

export default SpinningSlot;