import React from "react";
import login from "../../../../public/Images/login/login.png"

const Login = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target 
    
}

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <img className="w-3/4 lg:w-full" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center font-bold font-primary uppercase text-3xl text-[#FF725E]">Login Here</h1>
            {/* email filed */}
            <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {/* password field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="button-primary btn" type="submit" value="Login" />
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
