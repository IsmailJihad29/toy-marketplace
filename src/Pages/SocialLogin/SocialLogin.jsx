import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
const SocialLogin = () => {
    useTitle("Login");
    const {googleLogin} = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogin()
    }
    return (
        <div>
            <hr />
            <br />
            <div className="text-center text-xl">
                <h1 className=''>Login with</h1>

            </div>
            <div className="flex justify-around">
                <button onClick={handleGoogleLogin} className="btn mt-5 rounded-full"><FcGoogle/></button>
            </div>
        </div>
    );
};

export default SocialLogin;