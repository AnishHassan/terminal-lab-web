import { useState } from "react";
import { addApplicant } from "../Service/api";

const AddApplicant = () => {

    const [ applicantData, setApplicantData] = useState({
        studentName: "",
        registrationNumber: ""
    })

    const { studentName, registrationNumber } = applicantData;

    const handleChannge = (e) => {
        setApplicantData( {...applicantData, [e.target.name]: [e.target.value] } )
    }

    const addDetails = async (e) => {
      e.preventDefault();
      await addApplicant(applicantData);
    }

    return (
      <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
       <form>
        <label className="mb-2">Student Name</label>
        <input
          type="text"
          className="form-control mb-3"
          name="studentName"
          onChange={(e) => handleChannge(e)}
        />

        <label className="mb-2">Registration Number</label>
        <input
          type="text"
          className="form-control mb-3"
          name="registrationNumber"
          onChange={(e) => handleChannge(e)}
        />

        <button className="btn btn-primary form-control" onClick={(e) => addDetails(e)}>Apply</button>
       </form>
      </div>
    );
}

export default AddApplicant;