import React, { useMemo, useState } from "react";
import styled from "styled-components";

import Day from "./Day";
import { startOfMonth } from "date-fns";

export default function Month({
  month = { name: "January", number: 1 },
  yearsInThePast = 0
}) {
  const [isOpen, setIsOpen] = useState(false);
  const monthDays = daysInMonth[month.number];
  const firstMonthDay = getFirstMonthDay(month, yearsInThePast);

  console.log(firstMonthDay);
  const days = useMemo(() => {
    const ret = [
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
    ret[6] = { ...ret[6], events: ["a", "b", "c"] };
    return ret;
  }, []);

  return (
    <>
      {isOpen ? (
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>{"<"}</button>
          <h3>{month.name}</h3>
          <CalendarStyles style={{ height: "700px" }}>
            {days.map(x => (
              <Day {...x} />
            ))}
          </CalendarStyles>
        </div>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)}>Month</button>
      )}
    </>
  );
}

const CalendarStyles = styled.div`
  max-width: 100%;
  background: wheat;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  border: 1px solid grey;
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
  const dMonth = startOfMonth(new Date(year, month.number));
  const startMonthDay = dMonth.getDay();
  return startMonthDay;
}
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
