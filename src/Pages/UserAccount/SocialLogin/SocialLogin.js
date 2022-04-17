import React from 'react';
import google from '../../../images/google.png'
import github from '../../../images/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

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
        <div className='w-75 me-5 pe-5'>
            <div className='mb-3 mt-3'>
                {
                    errorElement
                }
                <button onClick={() => signInWithGoogle()} className='btn border border-2 border-primary w-100'> <img width={'27px'} className="mx-2" src={google} alt="" /> Google Signin</button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='btn border border-2 border-primary w-100'> <img width={'27px'} className="mx-2" src={github} alt="" /> Github Signin</button>
            </div>
        </div>
    );
};

export default SocialLogin;