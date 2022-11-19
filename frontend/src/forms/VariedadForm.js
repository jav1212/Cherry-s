import Form from 'react-bootstrap/Form';

const VariedadForm = ({ handleChange, values }) => {
    return(
        <>
            <div className="d-flex flex-column align-items-center">
                <h2 className=' text-white'>Informacion de la variedad</h2>
                <Form.Group className="w-75 mt-4">
                    <Form.Control
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange("first_name")}/>
                </Form.Group>
                <Form.Group className="w-75 mt-4">
                    <Form.Control
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange("last_name")}/>
                </Form.Group>
                <Form.Group className="w-75 mt-4">
                    <Form.Control
                        placeholder="Gender"
                        as="select"
                        name="gender"
                        onChange={handleChange("gender")} >
                            <option>Male</option>
                            <option>Female</option>
                    </Form.Control>
                </Form.Group>
            </div>
        </>
    );
};

export default VariedadForm;