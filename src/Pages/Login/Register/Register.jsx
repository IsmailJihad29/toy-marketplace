import React, { useContext, useState } from "react";
import register from "../../../../public/Images/login/register.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, updateUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;


    createUser(email, password)
      .then((result) => {
          const user = result.user
          updateUser(name, photo)
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your Profile Created successfully.',
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/")
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <img className="w-3/4 lg:w-full" src={register} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center font-bold font-primary uppercase text-3xl text-[#FF725E]">
              Login Here
            </h1>

            <form onSubmit={handleRegister}>
              {/* name filed */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              {/* email field */}
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
              {/* photo URL field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo URL"
                  name="photo"
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
                  <input
                    onClick={() => setShow(!show)}
                    type="checkbox"
                    className="checkbox checkbox-md"
                  />
                  <p>Show Password</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="button-primary btn"
                  type="submit"
                  value="Register"
                />
              </div>
              <p className="mt-2 text-center font-semibold">
                Already A User ?{" "}
                <Link to={"/login"}>
                  <span className="text-[#FF725E]">Login Here</span>
                </Link>
              </p>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
