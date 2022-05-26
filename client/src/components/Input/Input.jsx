import React from 'react';
import "./Input.scss"

const Input = ({ name, label, type }) => {
    return (<>
        <div className="form-group">
            <input
                type={type}
                className="form-control"
                id={name}
                name={name}
                />
            <label htmlFor={name} className="label-text">{label}</label>
          
        </div>
        {(type==="password") && <a href="/" className='link side-link'>Forgot Password?</a> }
</>
    );
}

export default Input;