import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( { 
        firstName:"", 
        lastName: "", 
        email:"", 
        password:"", 
        confirmPassword: "" 
    } )

    const [showPassword, setShowPassword] = useState(false);
    const [showConfimPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
    
    function changeHandler(event){
        setFormData((prevData) =>( 
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    };


    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            return toast.error("Password do not match")
        }
        setIsLoggedIn(true);
        toast.success("Account created successfully");
        const accountData = {
            ...formData
        }
        console.log("printing account data: ");
        console.log(accountData);
        navigate('/dashboard')
    }


    return (
    <div>


        <div className='flex bg-[#083344] p-1 gap-x-1 mt-5 rounded-full max-w-max p-2'>
            <button 
            className={`${accountType === "student" ? "bg-black text-white rounded-full" : "bg-transparent text-black"} p-2 transition-all duration-200`} 
            onClick={() => setAccountType("student")}>
                Student
            </button>

            <button 
            className={`${accountType === "instructor" ? "bg-black text-white rounded-full" : "bg-transparent text-black"} p-2 transition-all duration-200`} 
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>


{/* first name last name */}
        <form onSubmit={submitHandler}>
            <div className='flex justify-between mt-[10px]'>
                <label>
                    <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>First Name<sup>*</sup></p>
                    <input
                        required 
                        type="text"
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                </label>

                <label>
                    <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>Last Name<sup>*</sup></p>
                    <input
                        required 
                        type="text"
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                </label>
            </div>


{/* email */}
            <div className='mt-[10px]'>
                <label className='w-full'>
                    <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>Email Address<sup>*</sup></p>
                    <input 
                        type="email" 
                        name='email'
                        value={formData.email}
                        placeholder='Enter Email Address'
                        onChange={changeHandler}
                        required
                        className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                </label>
            </div>

{/* create and confirm password */}
            
                <div className='flex justify-between w-full mt-[10px]'>
                    <label className=' relative'>
                        <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>Create Password<sup>*</sup></p>
                        <input 
                            type={showPassword ? ("text") : ("password")} 
                            value={formData.password}
                            required
                            name='password'
                            placeholder='Enter Password'
                            onChange={changeHandler} 
                            className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={(pos) => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label className=' relative'>
                        <p className='text-white text-[0.875rem] mb-1 leading-[1.375rem]'>Confirm Password<sup>*</sup></p>
                        <input 
                            type={showConfimPassword ? ("text") : ("password")} 
                            value={formData.confirmPassword}
                            required
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            onChange={changeHandler} 
                            className='bg-[#083344] rounded-[0.5rem] text-white w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfimPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>
            

            <button className='bg-[#facc15] w-full mt-6 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
                Create Account
            </button>

        </form>




    </div>
  )
}

export default SignupForm   