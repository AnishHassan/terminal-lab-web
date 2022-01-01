import { useState } from "react";
import { addApplicant } from "../Service/api";

import { useNavigate } from 'react-router-dom';
const AddApplicant = () => {

  const [applicantData, setApplicantData] = useState({
    studentName: "",
    registrationNumber: "",
    hostelPreference: '',
    gender: '',
    image: ''

  })

  const { studentName, registrationNumber,hostelPreference,gender,image } = applicantData;

  const handleChannge = (e) => {
    setApplicantData({ ...applicantData, [e.target.name]: [e.target.value] })
  }
  const navigate = useNavigate();

  const addDetails = async (e) => {
    e.preventDefault();
    console.log(applicantData)
    await addApplicant(applicantData);
    navigate('/viewApplicants');

  }

  const handleCheckbox = (e) =>{
    const isChecked = e.target.checked;
    if(isChecked){
      setApplicantData({hostelPreference : [...applicantData.hostelPreference , e.target.value]});
    }else{
      const index = applicantData.indexOf(e.target.value);
      applicantData.hostelPreference.split(index,1);
      setApplicantData({hostelPreference : applicantData.hostelPreference})
    }
  }


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setApplicantData({image : [...applicantData.image ,URL.createObjectURL(event.target.files[0])]});
    }
   }
  const [isChecked, setisChecked] = useState('Male')

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <form>
       
        <label className="mb-2">Hostel Preferences </label>
        <div class="form-check" >
          <input class="form-check-input mb-3" name='hostelPreference' onChange={(e) => handleCheckbox(e)} type="checkbox" value={'Johar Hall'} id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
          Johar Hall
          </label>
        </div>
        <div class="form-check" >
          <input class="form-check-input" name='hostelPreference' onChange={(e) => handleCheckbox(e)} type="checkbox" value={'MA Jinnah Hall'} id="flexCheckChecked" />
          <label class="form-check-label" for="flexCheckChecked">
          MA Jinnah Hall
          </label>
        </div>
        <div class="form-check" >
          <input class="form-check-input" name='hostelPreference' onChange={(e) => handleCheckbox(e)} type="checkbox" value={'Jupiter Hall'} id="flexCheckChecked" />
          <label class="form-check-label  mb-3" for="flexCheckChecked">
          Jupiter Hall
          </label>
        </div>
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

        <div className="mt-5">
            <label class="form-label">Gender</label>
            <div class="form-check" >
              <input class="form-check-input" type="radio" id='Male'
                name='gender'
                value='Male' id="flexRadioDefault1" checked={applicantData.gender==='Male'} onChange={(e) => handleChannge(e)} />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name='gender'
                value='Female' id="Female" checked={applicantData.gender==='Female'} onChange={(e) => handleChannge(e)} />
              <label class="form-check-label" for="flexRadioDefault2" >
                Female
              </label>
            </div>
          </div>
          <input type="file" onChange={(e) => onImageChange(e)} className="filetype" id="group_image"/>

        <button className="btn btn-primary form-control" onClick={(e) => addDetails(e)}>Apply</button>
      </form>
    </div>
  );
}

export default AddApplicant;