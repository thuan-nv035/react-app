import React, { useState } from 'react'
import { homeService } from '../service/loginService'
import jwt_decode from 'jwt-decode'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')
    async function handleSubmit1() {
        const res = await homeService.Login({email: email,password: password})
            const token = res.data.token
            const data = (jwt_decode(token))
            console.log(data)
            // console.log(res);
            alert("Dang nhap thanh cong")   
    }
    const handleSubmit = async (e) => {
        console.log(1)
        e.preventDefault();
        // setError("");
        try {
            const res = await homeService.Login({email: email,password: password})
            const token = res.data.token
            const data = (jwt_decode(token))
            console.log(data)
            // console.log(res);
            alert("Dang nhap thanh cong")

        } catch (error) {
            // setError(error)
            console.log(error);
        }
    };

     return (
        <>
            <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="text"
									placeholder="Username"
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value = {email}
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
                                    onChange = {(e) => setPassword(e.target.value)}
                                    value = {password}
								/>
								<p className="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							<div className="mb-4">
								<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label className="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
                                    onClick={handleSubmit1}
								>
									Sign In
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default Login