import './login.css';
function Login() {
  return (
    <>
      <div className="login-container">
      <div className="login-box">
        <div className="logo"></div>
        {/* <img src="novelsnroses/public/Screenshot_2024-11-05_at_9.19.04_PM-removebg.png" alt="logo" className='loginlogo'/> */}
        <h2>Login with email</h2>
        <p>"Welcome back to Novels N Roses! Unlock a world of stories, thoughtful reviews, and a community of book lovers. Let your reading journey blossom!"</p>
        <form>
          
          <input type="text" id="Email" placeholder="Email" />

          
          <input
            type="password"
            id="password"
            placeholder="Password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
