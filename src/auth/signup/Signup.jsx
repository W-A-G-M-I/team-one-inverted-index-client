"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";
import Video_car from "../../assets/3752531-hd_1920_1080_24fps.mp4";
import { CreateUserAccount } from "../../lib/query/query";
import { SignupvalidationSchema } from "../../lib/validation/Validation";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const navigate = useNavigate()
    const {mutate:Createuser, isPending:isSigningUp, isError, error} = CreateUserAccount() 
  const initialValues = { fullname: "", email: "", password: "" };
  const handleSubmit = (values, { setSubmitting }) => {
    Createuser(values,{
        onSuccess: () => {
            action.resetForm();
            navigate("/sign-in");
        },
    })
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 p-6 max-sm:p-4">
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <video
          src={Video_car}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      {/* Signup Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-white bg-opacity-80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-gray-200 max-sm:p-5"
      >
         <div className="flex items-center justify-center mb-3 gap-2.5">
          <h2 className="text-3xl font-extrabold text-gray-800 max-sm:text-[22px]">Create an Account</h2>
          <FaUserPlus className="text-black text-2xl mr-2" />
        </div>
        <p className="text-gray-600 text-center text-[18px] mb-6 max-sm:text-[15px] max-sm:hidden">Join us and experience seamless car rentals.</p>
        <p className="text-gray-600 text-center text-[18px] mb-6 max-sm:text-[15px] lg:hidden xl:hidden max-sm:flex">Join us for easy car rentals</p>

        <Formik initialValues={initialValues} validationSchema={SignupvalidationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <Field
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-none focus:border-none transition shadow-sm bg-gray-50 outline-none "
                />
                <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-none focus:border-none transition shadow-sm bg-gray-50"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="********"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-none focus:border-none transition shadow-sm bg-gray-50"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSigningUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all"
              >
                {isSubmitting || isSigningUp ? "Signing Up..." : "Sign Up"}
              </motion.button>
            </Form>
          )}
        </Formik>

        {/* Social Login */}
        {/* <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-3 text-gray-400">or sign up with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center w-1/2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-lg transition-all shadow-sm"
          >
            <FaGoogle className="mr-2 text-red-500" /> Google
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center w-1/2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-lg transition-all shadow-sm"
          >
            <FaFacebook className="mr-2 text-blue-600" /> Facebook
          </motion.button>
        </div> */}

        <p className="text-center text-gray-500 mt-6">
          Already have an account? <a href="/sign-in" className="text-blue-600 font-semibold hover:underline">Sign in</a>
        </p>
      </motion.div>
    </div>
  );
}
