import Navbar from "@/Components/Navbar";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from 'firebase/database';
import firebaseApp from '../../../services/firebase-sdk';
import { encodeEmail } from "@/lib/utils";
import { s } from "node_modules/better-auth/dist/index-DN9ozDRm";


function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [scores, setScore] = useState(0);
    const navigate = useNavigate()
  
    const handleRegister = async (e) => {
      e.preventDefault();
      try {
        const db = getDatabase(firebaseApp);
        const encodedEmail = encodeEmail(email);
        const userRef = ref(db, 'users/' + encodedEmail);
        await set(userRef, {
          email,
          password,
          scores,
        });
        alert('User registered successfully');
        navigate('/login');
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Error registering user');
      }
    };
  
    return (
        <>
        <Navbar />
        <section className="bg-gray-900 dark:bg-gray-900 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-gray-300 rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-10 space-y-4 md:space-y-6 sm:p-14">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        checked={isTermsAccepted}
                        onChange={(e) => setIsTermsAccepted(e.target.checked)}
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-900">
                        I accept the{" "}
                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleRegister}                  
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-900">
                    Already have an account?{" "}
                    <a onClick={() => navigate('/login')} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
      );
    };
    

export default RegisterPage;