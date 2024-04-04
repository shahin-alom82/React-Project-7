import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { login } = useContext(AuthContext);
    const { singInUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState("")
    const [success, setSuccess] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password);


        singInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))

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

        // 1st kaj
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Login Successfully!')
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
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Please Login</h5>
                    {/* <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                    </div> */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Address</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email Address" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                        <div>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <span>

                            </span>
                        </div>
                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/registation"><a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a></Link>
                    </div>
                </form>
                {
                    success && <p className="text-center text-green-600">
                        {success}
                    </p>
                }
                {
                    registerError && <p className="text-center text-red-600">
                        {registerError}
                    </p>
                }
            </div>

        </div>
    );
};

export default Login;














// import DownloadLink from 'react-download-link';

// const Login = () => {
//     const handleDownload = () => {
//         // Logic to generate file content or fetch file from server
//         const fileContent = 'This is the content of the file';

//         // Create a Blob object to represent the file content
//         const blob = new Blob([fileContent], { type: 'text/plain' });

//         // Create a URL for the Blob object
//         const url = URL.createObjectURL(blob);

//         // Trigger the download
//         return url;
//     };

//     return (
//         <div>
//             <h1>Download Example</h1>
//             <DownloadLink
//                 label="Download File"
//                 filename="example.txt"
//                 exportFile={handleDownload}
//             />
//         </div>
//     );
// };

// export default Login;