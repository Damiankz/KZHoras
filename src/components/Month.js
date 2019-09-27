import React, { useMemo, useState } from "react";
import styled from "styled-components";

import Day from "./Day";
import { startOfMonth } from "date-fns";
import { navigate } from '@reach/router';

export default function Month({
  month,
  year
}) {

  let firstMonthDay
  const zeroIndexedMonth = month - 1;
  const yearsInThePast = new Date().getFullYear() - year;
  firstMonthDay = getFirstMonthDay(zeroIndexedMonth, yearsInThePast);
  const monthDays = daysInMonth[zeroIndexedMonth];
  const days = [
    ...Array(firstMonthDay).fill({ empty: true }),
    ...Array(monthDays)
      .fill({})
      .map((_, i) => {
        return {
          day: dayNames[(i + firstMonthDay) % 7],
          date: i
        };
      })
  ];
  const monthName = monthNames[month - 1]

  return (
    <>
      <NavigationButton
        onClick={() => navigate(getPreviousMonth(month, year))}
        position={'left'}>
        {'<'}
      </NavigationButton>
      <div>
        <h3>{monthName} - {year}</h3>
        <CalendarStyles
          style={{ height: "700px" }}
          rows={rowNumToRender(month, firstMonthDay)}>
          {
            days.map(
              (day, i) => (
                <Day key={i} {...day} />
              )
            )
          }
        </CalendarStyles>
      </div>
      <NavigationButton
        onClick={() => navigate(getNextMonth(month, year))}>
        {'>'}
      </NavigationButton>
    </>
  );
}


const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  left: ${props => props.position == 'left' ? '20px' : 'auto'};
  right: ${props => props.position == 'left' ? 'auto' : '20px'};
  background-color: red;
  border: 1px solid blue;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  &:active{
    background: black;
  }
`

const CalendarStyles = styled.div`
  max-width: 900px;
  margin:auto;
  background: wheat;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: 10px;
  border: 1px solid grey;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function getFirstMonthDay(month, yearsInThePast) {
  const year = new Date().getFullYear() - yearsInThePast;
  const dMonth = startOfMonth(new Date(year, month));
  const startMonthDay = dMonth.getDay();
  return startMonthDay;
}

function getPreviousMonth(month, year) {
  if (month > 1) {
    return `/${year}/${+month - 1}`
  } else {
    return `/${year - 1}/12`
  }
}
function getNextMonth(month, year) {
  if (month < 12) {
    return `/${year}/${+month + 1}`
  } else {
    return `/${+year + 1}/1`
  }
}


function rowNumToRender(month, firstMonthDay) {
  const February = 2;
  const Monday = 0;
  const Friday = 5;
  const Saturday = 6;
  let rows;
  if (month == February && firstMonthDay == Monday) {
    rows = 4;
  } else if (
    month != February &&
    (
      firstMonthDay >= Friday &&
      daysInMonth[month - 1] == 31 ||
      firstMonthDay == Saturday
    )
  ) {
    rows = 6;
  } else {
    rows = 5;
  }
  return rows;
}
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
