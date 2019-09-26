import React, { useState, useMemo } from "react";
import Month from "./Month";
import { format, startOfYear } from "date-fns";

export default function Calendar() {
	const year = new Date().getFullYear();
	const months = useMemo(() => {
		return Array(12)
			.fill({})
			.map((month, i) => {
				return {
					name: monthNames[i],
					number: i
				};
			});
	}, []);

	console.log(months);
	return (
		<div>
			<div> {year}</div>
			{months.map((m, i) => (
				<Month month={m} />
			))}
		</div>
	);
}

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
