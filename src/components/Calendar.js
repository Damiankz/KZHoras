import React from "react";
import Month from "./Month";
import styled from 'styled-components'

import { animated } from 'react-spring';
import { Router } from '@reach/router';
export default function Calendar() {
	return (
		<CalendarStyles>
			<Router>
				<Month path={'/'} month={new Date().getMonth() + 1} year={new Date().getFullYear()} default />
				<Month path="/:year/:month" />
			</Router>
		</CalendarStyles>
	);
}

const CalendarStyles = styled(animated.div)`
	font-family: 'Rubik';
	padding: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`