import React,{ useState } from 'react';

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: "#000000"
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);

        setFormData(INITIAL_STATE);
    };
    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="color" >Color:</label>
        <input type="color" id="color" name="color"
            placeholder="Color of the box"
            value={formData.color}
            onChange={(e) => { handleOnChange(e) }}
            required />
        <label htmlFor="width" >Width:</label>
        <input type="number" id="width" name="width"
            placeholder="Width of the box"
            value={formData.width}
            onChange={(e) => { handleOnChange(e) }}
			min='100'
            required />
        <label htmlFor="height" >Height:</label>
        <input type="number" id="height" name="height"
            placeholder="Height of the box"
            value={formData.height}
            onChange={(e) => { handleOnChange(e) }}
			min='100'
            required />

        <button>Add Box</button>
    </form>);
}

export default NewBoxForm;