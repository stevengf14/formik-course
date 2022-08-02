import React from "react";
import Select from "react-select";

const options = [
    { value: "item 1", label: "item 1" },
    { value: "item 2", label: "item 2" }
]
class DropList extends React.Component {

    handleChange = (value) => {

    }

    handleBlur = () => {

    }

    render() {
        return (
            <Select
                value={options[0]}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                options={options}
            />
        )
    }
}

export default DropList;