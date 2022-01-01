import { getApplicant } from "../Service/api";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewApplicant = () => {

  const [ applicantData, setApplicantData ] = useState([]);
  

  useEffect(() => {
    getApplicatsDetails();
  },[]);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  }
  const navigate = useNavigate();
  const handleDelete = async (e,id) =>{
    e.preventDefault();
    console.log(id)
    axios.delete('http://localhost:5000/deleteRecord/'+id)
    .then(response => { console.log(response.data)});
    navigate('/viewApplicants');
       
  }



  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Preferences</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map(details => (
            <tr>
              
              <td>{details.studentName}</td>
              <td>{details.registrationNumber}</td>
              <td>{details.gender}</td>
              <td>
              {details.hostelPreference.map(dat=>{
                return(
                  <span>{dat}</span>
                )
               
              })}
              </td>
              <td><button type="button" class="btn btn-danger" onClick={(e,)=>{handleDelete(e,details._id)}}>Delete</button>
</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;
