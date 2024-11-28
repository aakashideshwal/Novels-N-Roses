import './navbar.css';
function Navbar() {
  return (
   <>
   <nav className='navbar'>
    <div className='navbar-left'>
        <a href="#aboutus">ABOUT US</a>
        <a href="#newbook">NEW BOOK</a>
    </div>
    <div className='navbar-logo'>
        <img src="https://i.postimg.cc/4xW7jFzf/logo.png" alt="logo" className='logo1'/>
    </div>
    <div className='navbar-right'>
        <a href="#signup">SIGN UP</a>
        <a href="#contactus">CONTACT US</a>
    </div>
   </nav>
   </>
  );
}

export default Navbar;
