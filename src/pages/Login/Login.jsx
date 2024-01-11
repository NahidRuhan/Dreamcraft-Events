import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
 


const Login = () => {

    const location = useLocation()

    const navigate = useNavigate()

  const {googleSignIn} = useContext(AuthContext)

  const handleLogin=e=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);

    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    userSignIn(email,password)
    .then(() => {
        toast.success('User logged in successfully');
        navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
        toast.error(error.message)
    })

  }

  const handleGoogle =()=>{
    googleSignIn()
    .then(() => {
        toast('User logged in successfully');
        navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
        toast.error(error.message)
    })
  }

  const {userSignIn} = useContext(AuthContext)
  return (
            <div className="text-white" style={{backgroundImage: 'url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
            <h2 className="text-3xl my-10 text-center pt-10">Please Login</h2>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-5">Login</button>
                </div>
            </form>
            <div className="text-center flex flex-col gap-5">
                <button onClick={handleGoogle} className="btn btn-outline w-1/2 mx-auto text-white">
                    <FaGoogle></FaGoogle>
                    Sign in with Google
                </button>
            </div>
            <p className="text-center mt-4 pb-10">Do not have an account ? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>

);
};

export default Login;