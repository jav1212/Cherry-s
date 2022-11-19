import Form from 'react-bootstrap/Form';

const ImagenVariedad = ({ handleChange }) => {
    return(
        <>
            <div className="d-flex flex-column align-items-center">
                <h2 className=' text-white'>Ingresa una imagen</h2>
                <Form.Group className="w-75 mt-4">
                    <Form.Control
                      placeholder="Email"
                      onChange={handleChange("email")}
                      name="email"
                    />
                </Form.Group>
                <Form.Group    p className="w-75 mt-4">
                    <Form.Control
                      placeholder="Phone Number"
                      onChange={handleChange("phone_number")}
                      name="phone_number"
                    />
                </Form.Group>
            </div>
        </>
    );
};

export default ImagenVariedad;