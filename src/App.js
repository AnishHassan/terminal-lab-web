import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import AddApplicant from './components/AddApplicant';
import ViewApplicant from './components/ViewApplicant';
import UpdateRecord from "./components/UpdateRecord";
import DeleteRecord from "./components/DeleteRecord";

function App() {
  return (
    <div>
      <h1 className="text-center">Hostel Application System</h1>
      <Navbar />
      <Routes>
        <Route path="/hostelApplicants" element={<AddApplicant />} />
        <Route
          path="/viewApplicants"
          element={<ViewApplicant />}
        />
         <Route
          path="/update-record"
          element={<UpdateRecord/>}
        />
         <Route
          path="/delete-record"
          element={<DeleteRecord/>}
        />
      </Routes>
    </div>
  );
}

export default App;
