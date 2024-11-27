import './contactus.css'
function Contactus() {
    return(
        <>
    <div className="contact-us-container">
      <div className="site-map">
        <h3>Site map</h3>
        <p>All our pages</p>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Sign up</li>
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contact us</h3>
        <p>
          <span className="icon">📞</span> +91 27462843
        </p>
        <p>
          <span className="icon">✉️</span> novelsnroses@gmail.com
        </p>
      </div>

      
      <div className="branding">
        <img
          src="https://i.postimg.cc/kXb0qJyG/Untitled.png" 
          alt="Novels N Roses"
          className="logo"
        />
    
      </div>
    </div>

        </> 
    )
}
export default Contactus;