import Navbar from "@/Components/Navbar";
import React, {useState} from "react";
import firebaseApp from '../../../services/firebase-sdk';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import { encodeEmail } from "@/lib/utils"; 

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const db = getDatabase(firebaseApp);
        const encodedEmail = encodeEmail(email); 
        const userRef = ref(db, 'users/' + encodedEmail);
        const snapshot = await get(userRef);
        const userData = snapshot.val();
        console.log('userData:', userData);
        if (userData) {
          if (userData.email === email && userData.password === password) {
            alert('Login successful');
            navigate('/', { state: { userData } });
          } else {
            alert('Invalid username or password');
          }
        } else {
          alert('User not found');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Error logging in');
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
                  <button
                    type="submit"
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
      );
    }
  

export default LoginPage;