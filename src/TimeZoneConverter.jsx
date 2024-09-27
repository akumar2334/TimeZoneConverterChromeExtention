import React, { useState } from "react";
import DateTimePicker from "./Components/DatePicker";

export default function TimeZoneConverter() {
	const [conversionType, setConversionType] = useState("city");

	const [dateAndTime, setDateAndTime] = useState(new Date());
	return (
		<div className="flex  justify-center align-bottom ">
			<div className="bg-white dark:bg-black text-black dark:text-white rounded-md shadow-lg p-2 min-w-[600px] w-[600px] max-w-[600px]">
				<h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
					Time Zone/City Converter
				</h3>
				<div className="flex justify-between gap-[12px]">
					<div className="w-[50%] border-2 p-[10px] border-gray-200 rounded-md">
						<span className="ml-2 text-sm text-gray-600">Select Time&Date</span>
						<DateTimePicker
							dateAndTime={dateAndTime}
							setDateAndTime={setDateAndTime}
						/>
					</div>
					<div className="w-[50%] border-2 p-[10px] border-gray-200 rounded-md">
						<label className="inline-flex items-center mr-2">
							<input
								type="radio"
								name="selection-type"
								value="timezone"
								checked
								className="form-radio text-blue-600"
								onClick={() => {
									setConversionType("zone");
								}}
							/>
							<span className="ml-2 text-sm text-gray-600">
								Select Time Zone
							</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="radio"
								name="selection-type"
								value="city"
								className="form-radio text-blue-600"
								onClick={() => {
									setConversionType("zone");
								}}
							/>
							<span className="ml-2 text-sm text-gray-600">Select City</span>
						</label>
						{conversionType == "city" ? (
							<React.Fragment>
								<select
									id="city-select"
									className="w-full mt-1 mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									<option value="New York">New York</option>
									<option value="London">London</option>
									<option value="Tokyo">Tokyo</option>
									<option value="Sydney">Sydney</option>
									<option value="Mumbai">Mumbai</option>
								</select>
							</React.Fragment>
						) : (
							<React.Fragment>
								<select
									id="timezone-select"
									className="w-full mt-1 mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									<option value="UTC">UTC</option>
									<option value="America/New_York">New York (EST)</option>
									<option value="Europe/London">London (GMT)</option>
									<option value="Asia/Tokyo">Tokyo (JST)</option>
									<option value="Australia/Sydney">Sydney (AEST)</option>
								</select>
							</React.Fragment>
						)}
					</div>
				</div>
				<div className="border border-2 p-[10px] border-gray-200 rounded-md mt-[12px]">
					<p className="text-[20px] flex gap-[20px] align-middle">
						Your time at EST :&nbsp;
						<span className="font-semibold text-[20px]">
							6:37 am Friday, 27 September 2024
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 mt-1 cursor-pointer"
                            onClick={()=>{
                                console.log('add')
                            }}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</p>
				</div>
				<div className="border border-2 p-[10px] border-gray-200 rounded-md mt-[12px]">
					<p className="text-[20px]">Your Saved Time-zones</p>
				</div>
			</div>
		</div>
	);
}
