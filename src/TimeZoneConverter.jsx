import React, { useEffect, useState } from "react";
import DateTimePicker from "./Components/DatePicker";
import dayjs from "dayjs";
import Select from "./Components/Select";
import { timezones } from "./resources/constant";
import moment from "moment-timezone";

export default function TimeZoneConverter() {
	var now = dayjs();

	const [dateAndTime, setDateAndTime] = useState(now);

	const [fromTimeZone, setFromTimeZone] = useState({});

	const [toTimeZone, setToTimeZone] = useState({
		code: "UTC+00:00",
	});
	const [history, sethistory] = useState([]);
	const [output, setOutput] = useState("");

	function convertUTCOffsetToTimezone(offset) {
		const match = offset.match(/UTC([+-]\d{2}):(\d{2})/);
		if (match) {
			const hours = match[1]; // +03 or -04
			const minutes = match[2]; // 00 or 30
			return `${hours}:${minutes}`;
		}
		return null;
	}

	const convertTime = (dateAndTime, FromZone, ToZone) => {
		const fromOffset = convertUTCOffsetToTimezone(FromZone);
		const toOffset = convertUTCOffsetToTimezone(ToZone);

		if (!fromOffset || !toOffset) {
			throw new Error("Invalid timezone format");
		}

		const sourceTime = moment(dateAndTime).utcOffset(fromOffset);
		const targetTime = sourceTime.clone().utcOffset(toOffset);

        handleHistory(fromOffset,toOffset)
		setOutput(targetTime.format("hh:mm a, dddd, D MMMM"));
	};


	const handleHistory = (fromOffset,toOffset) => {
		console.log(fromOffset,toOffset,'handle');
	};

	useEffect(() => {
		const timeString = dateAndTime?.format("YYYY-MM-DD HH:mm Z"); // Time to convert
		const fromZone = fromTimeZone?.code; // Original timezone
		const toZone = toTimeZone?.code; // Target timezone
		if (timeString && fromZone && toZone) {
			const convertedTime = convertTime(timeString, fromZone, toZone);
			console.log(convertedTime, "hello");
		}
	}, [dateAndTime, fromTimeZone, toTimeZone]);

	return (
		<div className="flex  justify-center align-bottom ">
			<div className="bg-white dark:bg-black text-black dark:text-white rounded-md shadow-lg p-2 min-w-[600px] w-[600px] max-w-[600px]">
				<h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
					Time Zone/City Converter
				</h3>
				<div className="w-[100%] border-2 p-[10px] border-gray-200 rounded-md">
					<span className="ml-2 text-sm text-gray-600">Select Time&Date</span>
					<DateTimePicker
						dateAndTime={dateAndTime}
						setDateAndTime={setDateAndTime}
					/>
				</div>
				<div className="flex gap-[12px] w-[100%] border-2 p-[10px] border-gray-200 rounded-md mt-2">
					<div className="w-[50%]">
						<label className="inline-flex items-center mr-2">
							<span className="ml-2 text-sm text-gray-600">From</span>
						</label>

						<React.Fragment>
							<Select
								is="time-zone"
								onChange={setFromTimeZone}
								options={timezones}
								value={fromTimeZone}
								handleHistory={handleHistory}
							/>
						</React.Fragment>
					</div>
					<div className="w-[50%]">
						<label className="inline-flex items-center mr-2">
							<span className="ml-2 text-sm text-gray-600">To</span>
						</label>

						<React.Fragment>
							<Select
								is="time-zone"
								onChange={setToTimeZone}
								options={timezones}
								value={toTimeZone}
								handleHistory={handleHistory}
							/>
						</React.Fragment>
					</div>
				</div>

				<div className="border border-2 p-[10px] border-gray-200 rounded-md mt-[12px] flex justify-between">
					<p className="text-[16px] flex gap-[20px] align-middle">
						Your time from {fromTimeZone?.value} to {toTimeZone?.value} :&nbsp;
						<span className="font-semibold text-[16px]">{output}</span>
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 mt-1 cursor-pointer"
						onClick={() => {
							console.log("add");
						}}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</div>
				<div className="border border-2 p-[10px] border-gray-200 rounded-md mt-[12px]">
					<p className="text-[20px]">Your Saved Time-zones</p>
				</div>
			</div>
		</div>
	);
}
