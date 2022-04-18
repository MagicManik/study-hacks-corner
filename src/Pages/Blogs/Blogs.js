import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='blog-container'>

            <div className='blog-text'>
                <h3><span className='gradient-text-2'>Difference between authorization and authentication?</span></h3>
                <h4 className='pt-2'>Authorization:</h4>
                <p>The process of giving someone permission to use a job or a resource. The process of giving someone permission to use a job or a resource. Where owners share power between certain groups of people and allow them to do different kinds of work like Admin, Modarator user etc.
                </p>
                <h4 className='pt-2'>Authentication:</h4>
                <p>It is a process of verifying whether someone's act or someone's claim is fair. Authentication will tell whether the user is valid or not.</p>

            </div>

            <div className='blog-text'>
                <h3><span className='gradient-text-2'>Why are you using firebase? What other options do you have to implement authentication?</span></h3>
                <p className='pt-2'>Firebase is an authentication tool from Google. It acts as a third party tool between the main website and the user. The main purpose of using it is to give us a lot of security. In addition to Google, there are several other third party authentication providers such as Okta, Azure Active Directory, Auth0 etc..</p>
            </div>
            <div className='blog-text'>
                <h3 className='text-center'><span className='gradient-text-2'> What other services does firebase provide other than authentication?
                </span></h3>
                <p>Google Firebase is an application development platform of Google. Where Google helps developers to create web, ios and android applications. Also provides tools for firebase, app crash reporting and fixing, analytics tracking etc.</p>
            </div>
        </section>
    );
};

export default Blogs;