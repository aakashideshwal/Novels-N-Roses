import React from "react"
import Navbar from "./components/navbar/navbar.jsx"
import Herobanner from "./components/herobanner/herobanner.jsx"
import Aboutus from "./components/about us/aboutus.jsx"
import Sponsors from "./components/sponsors/sponsors.jsx"
import Contactus from "./components/contact us/contactus.jsx"
import Footer from "./components/footer /footer.jsx"
import Login from "./components/login/login.jsx"
import Signup from "./components/signup/signup.jsx"

function App() {
  return (
   <>
    <Navbar />
    <Herobanner/>
    <Aboutus />
    <Sponsors />
    <Contactus />
    <Footer />
{/* <Login/> */}

   
   </>
   
 )
}

export default App
