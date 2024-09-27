import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import PropTypes from "prop-types";
const { RangePicker } = DatePicker;
const onOk = ({...value}) => {
	console.log("onOk: ", value);
};
const DatePickerComponent = ({ dateAndTime, setDateAndTime }) => {
    const [value, setValue] = useState('second')
    return <>
        
        <DatePicker
		showTime
		className="w-full mt-1 mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
		onOk={onOk}
        />
        </>
};

DatePickerComponent.propTypes = {
	dataAndTime: PropTypes.object,
	setDateAndTime: PropTypes.func,
};

export default DatePickerComponent;
