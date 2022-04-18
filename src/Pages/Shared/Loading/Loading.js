import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div style={{ height: "200px", width: "200px", marginTop: "100px" }} className="spinner-border text-primary" role="status">
                <span class="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loading;