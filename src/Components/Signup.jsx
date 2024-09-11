import {React,useState} from 'react';
import { useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from './Input';
import axios from 'axios';

export default function SignupComponent() {
    // const { register, handleSubmit } = useForm()
    const [username,setUserName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    // const handleRedirect = () => {
    //     fetch('/contact')
    //       .then(response => {
    //         if (response.redirected) {
    //           window.location.href = response.url;
    //         }
    //       });
    //   };    
    const handleSubmit = (e) =>{
        axios.post('http://localhost:3001/register',{username,email,password})
        .then(res => 
            console.log(res))
        .catch(err => 
            console.log(err))
    }

    return (
        <div className="m-auto w-4/5 sm:w-2/5 mt-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-lg">
            <div className="text-center">
                <div className="mb-6">
                    <span className="text-white text-4xl font-bold">
                        logo
                    </span>
                </div>
                <h2 className="text-white text-3xl font-semibold mb-4">
                    Signup to create Account
                </h2>
                <p className="text-white mb-8">
                    Already have an account?&nbsp;
                    <Link to="/login" className="text-yellow-300 underline">Sign in</Link>
                </p>

                <form onSubmit={handleSubmit()} className="space-y-6">
                    <Input
                        label="UserName"
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        // {...register("name", {
                        //     required: true,
                        // })}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        // {...register("email", {
                        //     required: true,
                        //     validate: {
                        //         matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                        //     }
                        // })}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        // {...register("password", {
                        //     required: true
                        // })}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full p-3 bg-yellow-300 text-indigo-900 font-semibold rounded-lg transition-colors duration-300 hover:bg-yellow-400">
                            Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}
