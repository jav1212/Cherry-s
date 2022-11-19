import Form from 'react-bootstrap/Form';

const Confirmation = ({ handleChange }) => {
    return(
        <div className="d-flex flex-column align-items-center">
            <h2 className=' text-white'>Location Info</h2>
            <Form.Group className="w-75 mt-4">
                <Form.Control
                    placeholder="State"
                    onChange={handleChange("state")}
                    name="state"
                />
            </Form.Group>
                <Form.Group className="w-75 mt-4">
                    <Form.Control
                      placeholder="City"
                      onChange={handleChange("city")}
                      name="city"
                    />
            </Form.Group>
        </div>
    )
}

export default Confirmation;