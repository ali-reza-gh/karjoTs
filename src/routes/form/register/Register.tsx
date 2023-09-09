import React, { useCallback, useEffect } from 'react';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//React-Hook-Form
import { useForm } from "react-hook-form";

//React-Router-Dom
import { Link, useNavigate } from "react-router-dom";

//Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./RegisterValidation";

//gql
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../graphQL/Mutations";


const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const Register:React.FC = () => {
  const { register, handleSubmit, setFocus, formState: { errors }, } = useForm({ resolver: yupResolver(registerSchema) });

  const [createUser] = useMutation(CREATE_USER);

  const navigate = useNavigate();
type data={
  email:string;
  password:String;
}
  const submitHandler = useCallback(async (data:data, toastMarkup:any) => {
    try {
      const register = await createUser({
        variables: { email: data.email, password: data.password }
      })
      const isRegister = register.data.createUser.status;

      if (isRegister) {
        navigate("/login")
        console.log("Register Successfully");
      } else { toast(register.data.createUser.message); }


    } catch (error:any) { console.log("ERROR:", error.message); }

  }, [createUser, navigate])


  useEffect(() => {
    setFocus("email")
  }, [setFocus]);

  return (
    <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl mt-20">
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className={textInputClassName}
            placeholder="test@test.com"
          />
          {errors.email ? (
            <span className="text-red-600">{errors.email.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className={textInputClassName}
          />
          {errors.password ? (
            <span className="text-red-600">{errors.password.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            className={textInputClassName}
          />
          {errors.confirmPassword ? (
            <span className="text-red-600">
              {errors.confirmPassword.message}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="Type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select your Gender
          </label>
          <select
            {...register("Type")}
            name="Type"
            id="Type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="empty"> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Rather not say">Rather not say</option>
          </select>{" "}
          {errors.Type ? (
            <span className="text-red-600">{errors.Type.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between mb-6">
          <div>
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  {...register("remember")}
                  id="remember"
                  name="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  {...register("toggle")}
                  type="checkbox"
                  name="toggle"
                  value=""
                  id="toggle"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Accept
                </span>
              </label>
            </div>
            {errors.toggle ? (
              <span className="text-red-600">{errors.toggle.message}</span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className='md:ml-3' >
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          > Submit
          </button>
          <Link to="/login">
            <button
              type="submit"
              className="sm:ml-24  md:ml-64 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            > Login
            </button>
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Register;