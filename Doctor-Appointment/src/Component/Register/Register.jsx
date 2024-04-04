import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)


    const [registerError, setRegisterError] = useState("")
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const hadleRegistar = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const tremp = e.target.remember.checked
        console.log(name, email, password, tremp)


        // Create User in Firebase
        createUser(name, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })


        // Reset Error
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters longer");
            return;
        }
        else if (/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!tremp) {
            setRegisterError('Please accept our terms and condition!')
            return;
        }

        // Create User
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user)
                setSuccess('User Registation Successfully!')
            })

            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            }
            )
    }

    return (
        <div>
            <div className="w-full mx-auto mt-10 max-w-sm p-4 bg-white border border-gray-500 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={hadleRegistar} className="space-y-6" action="#">
                    <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Please Registation</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Please Your Name" required />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Address</label>
                        <input type="email"
                            name="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Your Email Address" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                        <div className="flex relative">
                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <span className="absolute ml-72 mt-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />
                                }
                            </span>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept your termp condition?</label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registation</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <Link to="/login"><a href="#" className="text-blue-700 hover:underline dark:text-blue-500 lg:ml-[120px]">Please Login</a></Link>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-600 text-center">
                        {registerError}
                    </p>
                }
                {
                    success && <p className="text-green-600 text-center">
                        {success}
                    </p>
                }
            </div>
        </div>
    );
};

export default Register;