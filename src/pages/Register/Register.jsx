import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from 'react-hot-toast';


const Register = () => {

    const navigate = useNavigate()

    const {createUser,handleUpdateProfile} = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')


    const handleSubmit=(e)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        
        setRegisterError('')

  if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/
.test(password)){
            setRegisterError('Your password should have at least one uppercase character,special character and capital letter')
            return
        }


        createUser(email,password)
        .then(() => {
            handleUpdateProfile(name, photo)
            .then(() => {
                toast.success('User Registered successfully');
                navigate('/')
            })
        })
        .catch(error => {
            toast.error(error.message)
        })

    }

    return (
        <div className="text-white py-10" style={{backgroundImage: 'url(https://i.ibb.co/PwKJffh/login.png)',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleSubmit} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-700 text-center mt-10">{registerError}</p>
                }
            
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
    );
};

export default Register;