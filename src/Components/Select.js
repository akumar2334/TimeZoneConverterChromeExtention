import PropTypes from "prop-types";
import React from "react";
import { Select } from "antd";

export default function SelectInput({
	id,
	placeholder,
	options,
	onChange,
	value,
    handleHistory
}) {
	const handleChange = (value, option) => {
		onChange({...option})
        handleHistory(value)
	};

	return (
		<Select
			id={id}
			className="w-full mt-1 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			showSearch
			placeholder={placeholder}
			optionFilterProp="label"
			filterSort={(optionA, optionB) =>
				(optionA?.label ?? "")
					.toLowerCase()
					.localeCompare((optionB?.label ?? "").toLowerCase())
			}
			value={value}
			onChange={handleChange}
			options={options?.map((item, index) => ({
				label: `${item?.full_name}, ${item?.abbreviation}`,
				value: item?.abbreviation,
                code:item?.code,
                full_name:item?.full_name
			}))}
		/>
	);
}

SelectInput.propTypes = {
	id: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			abbreviation: PropTypes.string.isRequired,
			full_name: PropTypes.string.isRequired,
			code: PropTypes.string.isRequired, // Ensure each option has a value
		})
	).isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	handleHistory: PropTypes.func.isRequired,
};

// Default props example (optional)
SelectInput.defaultProps = {
	id: "default-select",
	placeholder: "Select",
	options: [
		{ abbreviation: "EST", full_name: "New York", code: "America/New_York" },
		{ abbreviation: "GMT", full_name: "London", code: "Europe/London" },
	],
};
