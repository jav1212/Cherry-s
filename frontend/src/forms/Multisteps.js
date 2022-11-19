import Confirmation from "./Confirmation"
import ImagenVariedad from "./ImagenVariedad"
import VariedadForm from "./VariedadForm"
import React, {useState} from "react";
import multityles from './Multisteps.css'

const Multisteps = () => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        email: "",
        phone_number: "",
        city: "",
        state: "",
      });

      const [step, setStep] = useState(1);

      const nextStep = () => {
        if (step < 3) {
          setStep(step + 1);
        } else if(step === 3) {
            console.log(values);
        }
      };

      const prevStep = () => {
        if (step > 1) {
          setStep(step - 1);
        }
      };

      const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
        console.log(values)
      };

    return(
        <div >
            <div className=" d-flex justify-content-center align-items-center ">
                <div className="card p-3 w-50 bg-dark">
                    {
                        {
                            1: <VariedadForm   handleChange={handleChange}/>,
                            2: <ImagenVariedad  handleChange={handleChange}/>,
                            3: <Confirmation  handleChange={handleChange}/>,
                        }[step]
                    }
                    <div className="d-flex justify-content-around px-5 mt-5">
                        {step > 1 ? (
                            <button className="btn btn-warning" onClick={prevStep}>
                                Back
                            </button>
                        ) : null}
                        <button className="btn btn-warning" onClick={nextStep}>
                            {step === 3 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Multisteps;