import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const navigate = useNavigate();
    const backgroundImageUrl = 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg';

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const {user, signUp} = UserAuth();

      const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target);
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(formData.password !== formData.confirmPassword){
            toast.error("Password Do Not Match");
            return;
        }

        try{
            await signUp(formData.email, formData.password);
            toast.success("Sign Up Successfully")
            navigate('/login');
        }
        catch(error){
            toast.error("Error Signing In");
            // console.log(error);
        }
      };


  return (
    <div>
    <Toaster />
      <section className="bg-gray-50 dark:bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-12 h-12 mr-2" src="https://img.freepik.com/free-vector/yellow-house_1110-691.jpg?w=740&t=st=1700549866~exp=1700550466~hmac=49ba49076a52603bc22a57463b23bf0eed2208a2aa7384bf04ebb09474dd5854" alt="logo" />
          GetHome
      </Link>

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required 
                    value={formData.email}
                    onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                    value={formData.password}
                    onChange={handleChange}
                    minLength="6"
                      />
                  </div>
                  <div>
                      <label for="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength="6"
                      />
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-500">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? 
                      <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Signup