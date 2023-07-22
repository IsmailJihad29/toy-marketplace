import React, { useContext, useState } from "react";
import logIn from "../../../../public/Images/login/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const [show, setShow] = useState(false);
  const {login} = useContext(AuthContext)

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    login(email, password)
      .then(result => {
        const user = result.user
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login successful.',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, {replace: true})
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(error.message)
      })
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <img className="w-3/4 lg:w-full" src={logIn} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center font-bold font-primary uppercase text-3xl text-[#FF725E]">
              Login Here
            </h1>
            {/* email filed */}
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {/* show password */}
                <label className="label">
                  <input onClick={()=>setShow(!show)} type="checkbox" className="checkbox checkbox-md" />
                  <p>Show Password</p>
                </label> 
              </div>
              <div className="form-control mt-6">
                <input
                  className="button-primary btn"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-2xl text-red-600">{error}</p>
              <p className="mt-2 text-center font-semibold">New Here ? <Link to={"/register"}><span className="text-[#FF725E]">Register Here</span></Link></p>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
