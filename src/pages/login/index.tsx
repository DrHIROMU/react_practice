import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-branding"></div>
        <div className="login-info">
          <form className="login-form">
            <div className="login-logo"></div>
            <div className="environment-notice"></div>
            <div className="login-input-group">
              <div className="login-input">
                <span className="material-icons-outlined">account_circle</span>
              </div>
              <div className="login-input">
                <span className="material-icons-outlined">account_circle</span>
              </div>
            </div>
            <div>
              <button className="login-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
