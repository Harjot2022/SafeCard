import {React,useState} from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    // const { register, handleSubmit } = useForm();
    const [username,setInputValue] = useState();
    const [password,setInpValue] = useState();
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleChan = (event) => {
        setInpValue(event.target.value);
    };
    const handleSubmit = (e) =>{
        axios.post('http://localhost:3001/login',{username,password})
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
                    Sign in to your account
                </h2>
                <p className="text-white mb-8">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="text-yellow-300 underline">Sign up</Link>
                </p>

                <form onSubmit={handleSubmit()} className="space-y-6">
                    <Input
                        label="Username: "
                        type="text"
                        placeholder="Enter your username"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        // {...register("email", {
                        //     required: true,
                        //     validate: {
                        //         matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                        //     }
                        // })}
                        value = {username} onChange = {handleChange}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        // {...register("password", {
                        //     required: true
                        // })}
                        value = {password} onChange = {handleChan}
                    />
                    <button type="submit" className="w-full p-3 bg-yellow-300 text-indigo-900 font-semibold rounded-lg transition-colors duration-300 hover:bg-yellow-400">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;


