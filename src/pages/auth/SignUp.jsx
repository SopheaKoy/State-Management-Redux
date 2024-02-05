import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";

// vaildation file
const FILE_SIZE = 1024 * 1024 * 1; // 10MB
const SUPPORT_FORMAT = ["image/jpg", "image/jpeg", "image/"];

// create vaildation schema
const vaildationSchema = Yup.object({
  name: Yup.string().required("name is required...!"),
  email: Yup.string()
    .email("Invalid email format musb include @ ...!")
    .required("Requried"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Requried"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must be match")
    .required("Requried"),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log("User : " + user);

  return (
    <div className='flex flex-col items-center justify-between'>
      <h1 className='text-center text-4xl font-semibold text-blue-500'>
        Sign Up
      </h1>

      {/* Formik */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          avatar: "https://storage.googleapis.com/pod_public/1300/142838.jpg",
        }}
        validationSchema={vaildationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          dispatch(fetchCreateUser(values));
          setTimeout(() => {
            navigate("/");
          }, 100);
        }}>
        {({ isSubmitting }) => {
          return (
            <Form className='w-1/2'>
              {/* username */}
              <div className='mb-5'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  username
                </label>
                <Field
                  id='name'
                  name='name'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <ErrorMessage name='name'>
                  {(msg) => <div className='text-red-600'>{msg}</div>}
                </ErrorMessage>
              </div>

              {/* email */}
              <div className='mb-5'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  email
                </label>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <ErrorMessage name='email'>
                  {(msg) => <div className='text-red-600'>{msg}</div>}
                </ErrorMessage>
              </div>

              {/* password */}
              <div className='mb-5'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password
                </label>
                <Field
                  id='password'
                  name='password'
                  type='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <ErrorMessage name='password'>
                  {(msg) => <div className='text-red-600'>{msg}</div>}
                </ErrorMessage>
              </div>

              {/* confirmPassword */}
              <div className='mb-5'>
                <label
                  htmlFor='confirmPassword'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Confirm Password
                </label>
                <Field
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                <ErrorMessage name='confirmPassword'>
                  {(msg) => <div className='text-red-600'>{msg}</div>}
                </ErrorMessage>
              </div>

              {/* Button Submit */}
              <div>
                {!isSubmitting && (
                  <button
                    disabled={isSubmitting}
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Submit
                  </button>
                )}{" "}
                {isSubmitting && (
                  <button
                    type='button'
                    className='text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    disabled>
                    Submit Disable
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
