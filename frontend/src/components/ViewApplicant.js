import { getApplicant } from "../Service/api";
import { useState, useEffect } from 'react';

const ViewApplicant = () => {

  const [ applicantData, setApplicantData ] = useState([]);

  useEffect(() => {
    getApplicatsDetails();
  },[]);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  }

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map(details => (
            <tr>
              <td>{details.studentName}</td>
              <td>{details.registrationNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;
