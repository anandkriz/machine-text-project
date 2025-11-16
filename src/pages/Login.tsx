
import { useState } from 'react'
import { useNavigate } from 'react-router'

import img from '../assets/images/illustration-img.png'
import fb from '../assets/images/fb.png'
import google from "../assets/images/google.png"
import linkedin from "../assets/images/linkedin.png"
import twitter from "../assets/images/twitter.png"

const Login:React.FC = () => {
    const [formData, setFormData] = useState<{ username: string, password: string }>({
        username: '',
        password: ''
    })
    const [error, setError] = useState<{ [key: string]: string }>({ username: '', password: '' });
   const navigate = useNavigate()
    const fields = [
        {   
            name: 'username',
            type: 'text',
            placeholder: 'Username or email',
            isRequired: true,
        },
        {
            name: 'password',
            type: 'text',
            placeholder: 'Password',
            isRequired: true,
        }
    ]

    const handleValidate = () => {
        // let error:[key: string]: string = {}
        const error: Record<string, string> = {};

        fields.forEach((field) => {
            if (field.isRequired && !formData?.[field?.name as keyof typeof formData]) {
                error[field.name] = `${field.placeholder} is required`;
            }
            const { password } = formData;
            if (field.name === 'password' && formData[field.name]) {
                if (password.length < 8) {
                    error[field.name] = "Password must be at least 8 characters long";
                }
                if (!/[A-Z]/.test(password)) {
                    error[field.name] = "Password must contain a capital letter";
                }
                if (!/[0-9]/.test(password)) {
                    error[field.name] = "Password must contain a number";
                }
                 const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
                if (!hasSymbol) {
                    error[field.name] = "Password must contain a symbol";
                }
            }
        });
        return error;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        delete error?.[name];
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async () => {
        const errors = await handleValidate();
        if(Object.keys(errors).length === 0){
            navigate('/home');
        }else{
             setError(errors);
        }
    }
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 px-md-5">
            <div className="row w-100 align-items-center justify-content-between login-wrapper">

                <div className="col-md-4 px-md-7">
                    <div className='text-center text-md-start'>
                        <h2 className="fw-bold mb-2">Sign In</h2>
                        <p className="mb-6 fw-bold">
                            New user?{" "}
                            <a href="#" className="text-primary text-decoration-none">
                                Create an account
                            </a>
                        </p>
                    </div>

                    {fields.map((field) => {
                        return (
                            <>
                                <input
                                    type={field.type}
                                    className="form-control mb-3 input-box mt-4"
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    onChange={handleChange}
                                />
                                {error?.[field.name] && <p className="text-danger fs-13">{error?.[field.name]}</p>}
                            </>
                        )
                    })}

                    <div className="form-check my-3">
                        <input type="checkbox" className="form-check-input" id="keep" />
                        <label htmlFor="keep" className="ms-3 mt-2 fw-semibold">Keep me signed in</label>
                    </div>

                    <button className="btn btn-dark w-100 py-2 mt-2 fw-bold rounded-0" onClick={handleSubmit}>Sign In</button>

                    <div className="text-center my-4 d-flex">
                        <div
                            className="flex-grow-1"
                            style={{
                                height: 2,
                                background: "#b1b1b1ff",
                                transform: "translateY(8px)"
                            }}
                        />
                        <span className="px-2 text-muted  fs-13 fw-semibold">Or Sign In With</span>
                        <div
                            className="flex-grow-1"
                            style={{
                                height: 2,
                                background: "#b1b1b1ff",
                                transform: "translateY(8px)"
                            }}
                        />
                    </div>

                    <div className="d-flex gap-1 justify-content-evenly">
                        <div className="social-circle">
                            <img src={google} alt='google' />
                        </div>
                        <div className="social-circle">

                            <img src={fb} alt='fb' />
                        </div>
                        <div className="social-circle">
                            <img src={linkedin} alt='linkedin' />
                        </div>
                        <div className="social-circle">
                            <img src={twitter} alt='twitter' />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 d-none d-md-flex justify-content-end">
                    <img
                        src={img}
                        className="illustration-img"
                        alt="Illustration"
                    />
                </div>

            </div>
        </div>
    );
};

export default Login;

