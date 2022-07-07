import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";


import Auth from "../../utils/auth";
import { LOGIN_USER, ADD_USER } from "../../utils/mutations";


export default function Account() {

  const [showSignup, setShowSignup] = useState(false);
  const [title, setTitle] = useState('LOGIN');
  const [formState, setFormState] = useState({ username: "", password: "" });


  const [login, loginData] = useMutation(LOGIN_USER);
  const [addUser, signupData] = useMutation(ADD_USER);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
      <div className="bg-transparent w-full justify-center text-center max-w-5xl">

        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-sm">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">

                {showSignup ? (<h2 className="text-3xl font-semibold">{title}</h2>) : (<h2 className="text-3xl font-semibold">{title}</h2>)}

              </div>

              {loginData.data

                ?

                (<p>Success! You may now head <Link to="/">back to the homepage.</Link></p>)

                :

                (<div className="relative p-6 flex-auto">
                  {showSignup ?
                    (<>
                      <form onSubmit={handleSignup}>
                        <input className="border mb-2 py-2 px-3 rounded focus:text-neutral-content w-full focus:bg-neutral" name="username" placeholder="Username" onChange={handleChange}/>
                        <input className="border mb-2 py-2 px-3 rounded focus:text-neutral-content w-full focus:bg-neutral" name="email" placeholder="Email" onChange={handleChange}/>
                        <input className="border mb-2 py-2 px-3 rounded focus:text-neutral-content w-full focus:bg-neutral" name="password" type="password" placeholder="Password" onChange={handleChange}/>
                        <button className="btn btn-block btn-primary flex justify-center" style={{ cursor: "pointer" }} type="submit">Submit</button>
                      </form>
                      <p className="text-sm font-semibold mt-2 pt-1 mb-0">Back to login? <a className="flex justify-center items-center text-base-300" href="#login" onClick={() => { setShowSignup(false); setTitle('LOGIN'); }}>Login</a></p>

                      {signupData.error && (<div className="my-3 p-3 bg-danger text-black">{signupData.error.message}</div>)}

                    </>)
                    :
                    (<>
                      <form onSubmit={handleLogin}>
                        <input className="border mb-2 py-2 px-3 rounded focus:text-neutral-content w-full focus:bg-neutral" name="username" placeholder="Your username" onChange={handleChange}/>
                        <input className="border mb-2 py-2 px-3 rounded focus:text-neutral-content w-full focus:bg-neutral" name="password" type="password" placeholder="******" onChange={handleChange}/>
                        <button className="btn btn-block btn-primary flex justify-center" style={{ cursor: "pointer" }} type="submit">Submit</button>
                      </form>
                      <p className="text-sm font-semibold mt-2 pt-1 mb-0">Don't have an account? <a className="flex justify-center items-center text-base-300" href="#signup" onClick={() => { setShowSignup(true); setTitle('SIGN UP!'); }}>Sign Up!</a></p>

                      {loginData.error && (<div className="my-3 p-3 bg-danger text-black">{loginData.error.message}</div>)}

                    </>)
                  }


                </div>)
              }


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
