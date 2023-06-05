import './App.css';
import FirstPage from './component/Login/FirstPage';
import Navbar from './component/SuperAdmin/Navbar/Navbar';
import {Route , Routes} from "react-router-dom"
import SchoolProfile from './component/SuperAdmin/Schools/schoolProfile/SchoolProfile';
import Schools from './component/SuperAdmin/Schools/Schools';
import Dashboard from './component/SuperAdmin/DeshBord/Deshboard';
import AddSchool from './component/SuperAdmin/AddSchool/AddSchool';
import SchoolDetails from './component/SuperAdmin/Schools/schoolProfile2/SchoolProfille2';
import Userprofile from './component/User/userdetails/userprofile';
import Userprofile2 from './component/User/userdetails/userprofe2';
import Alluser from './component/User/AllUserlist/Admin/alluser';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/alladmin" element={<Alluser />} />
        <Route path="/p" element={<Userprofile />} />
        <Route path="/p2" element={<Userprofile2 />} />
        <Route path="/addschool" element={<AddSchool />} />
        <Route path="/login" element={<FirstPage />} />
        <Route path="/schoollist" element={<Schools />} />
        <Route path="/schoollprofile" element={<SchoolProfile />} />
      </Routes>
    </>
  );
}

export default App;
