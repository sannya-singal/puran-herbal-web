/** @jsx jsx */
import { jsx } from '@emotion/core';
import { baseStyle, handWashImg, comingSoonHeading } from './style';
import handWash from './img/hand_wash.svg';

export function Base() {
	return (
		<div css={baseStyle}>
			<img src={handWash} alt="" css={handWashImg} />
			<div>
				<h1 css={comingSoonHeading}>We are coming to you soon</h1>
				<h2>Mixing the right ingredients for you</h2>
			</div>
		</div>
	);
}
