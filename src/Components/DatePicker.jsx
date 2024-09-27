import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import PropTypes from "prop-types";
const { RangePicker } = DatePicker;

const DatePickerComponent = ({ dateAndTime, setDateAndTime }) => {
	const [value, setValue] = useState("second");
	const onOk = (value) => {
		setDateAndTime(value);
	};
	return (
		<>
			<DatePicker
				value={dateAndTime}
				showTime={{
                    format: 'HH:mm', // Format the time to display hours and minutes
                }}
				className="w-full mt-1 mb-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				onOk={onOk}
			/>
		</>
	);
};

DatePickerComponent.propTypes = {
	dataAndTime: PropTypes.object,
	setDateAndTime: PropTypes.func,
};

export default DatePickerComponent;
