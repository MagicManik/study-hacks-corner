import React from 'react';
import google from '../../../images/google.png'
import github from '../../../images/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css'

const SocialLogin = () => {

    // ___________________________________________
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, gitHubError] = useSignInWithGithub(auth);


    // ___________________________________________
    let errorElement;
    if (googleError || gitHubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {gitHubError?.message}</p>

    }


    // ___________________________________________
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='mt-3'>
                {
                    errorElement
                }
                <div className='button-container'>
                    <button className="social-btn" onClick={() => signInWithGoogle()} > <img width={'27px'} src={google} alt="" /></button>


                    <button className="social-btn" onClick={() => signInWithGithub()}> <img width={'27px'} src={github} alt="" /></button>
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;