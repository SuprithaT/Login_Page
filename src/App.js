// import React from 'react'
// import Student from './Components/Student';
// import './Components/Student.css'
// import Studentdetails from './Components/studentinfo'
// function App(){
//   console.log(Studentdetails)
//   return(
// <>
//     <div>
//       {Studentdetails.map(function({sname,sage,sid},index)
//       {
//         return <Student key={sid} sname={sname}/>
//       })}
//     </div>
//     </>
//   )
//     }
// export default App;

// import ReactFormValiadtions from "./Components/ReactFormValiadtions.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Navbar from "./Components/Navbar.jsx"
import Services from "./Components/Services.jsx"
import Products from "./Components/Products.jsx"
import Mobiles from "./Components/Mobiles.jsx"
import Earphone from "./Components/Earphone.jsx"
import Pnf from "./Components/Pnf.jsx"
import Login from "./Components/Login.jsx"
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="*" element={<Pnf/>}/>
        <Route path="products" element={<Products/>}>
        <Route path="mobiles" element={<Mobiles/>}/>
        <Route path="earphone" element={<Earphone/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        </Routes>
      </Router>
  )
}
export default App;
// import stud from './Components/stud'
// import './Components/stud.css'
// function App(){
//   return(
//     <div className="App">
//       <Stud sname="dinga" sage={23}/>
//       <Stud sname="dinga" sage={34}>
//       </Stud>
//     </div>
//   )
// }

// export default App;

// function App(){
//   return(
//     <div>
//      <ReactFormValiadtions/>
//     </div>
//   )
// }


// import { useState } from 'react';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Navbar from './Components/routes/Navbar'
// import Home from './Components/routes/Home'
// import Aboutus from './Components/routes/Aboutus'
// import Login from './Components/routes/Login'
// import Prouducts from './Components/routes/Prouducts'
// import Contact from './Components/routes/Contact'
// import Pnf from './Components/routes/Pnf'

// function App(){
//   return(
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="Home" element={<Home/>}/>
//         <Route path="Aboutus" element={<Aboutus/>}/>
//         <Route path="Prouducts" element={<Prouducts/>}/>
//         <Route path="Contact" element={<Contact/>}/>
//         <Route path="Login" element={<Login/>}/>
//         <Route path="*" element={<Pnf/>}/>
//       </Routes>
//     </Router>
// g  )
// }

// function App(){
//   return(
//     <div className="App">
//       <propsexample sname="dinga" age={23}></propsexample>
//     </div>
  

//export default App;