"use client";
import React from "react";
import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import { GetCookie, SetCookie } from "@/helpers/manageCookie";
import { Cookie } from "@/utils/types/helpersType";
import { LoginForm } from "@/utils/types/loginTypes";
import api from "@/helpers/api/apiMethods";

import RootLayout from "../../components/layouts/AuthLayouts";
import Button from "@/components/usefulComponents/button/button";

const Login = () => {
  const router = useRouter();

  const initialState = {};
  const [state, setState] = useState(initialState);
  const initialValues: LoginForm = { UserName: "", password: "" };

  const validateYupSchema = Yup.object().shape({
    UserName: Yup.string()
      .min(4, "UserName must be at least 4 characters")
      .required("UserName is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // const myCookie: Cookie = {
  //     name: "user",
  //     value: "Ali",
  //     domain: "example.com", // Replace this with your domain name
  //     days: 7
  //   };

  const handleSubmit = (
    values: LoginForm,
    { setSubmitting }: FormikHelpers<LoginForm>
  ) => {
    api.auth
      .login(values)
      .then((res) => {
        const cookie: Cookie = {
          name: "token",
          value: JSON.stringify(res.token),
          domain: "example.com",
          days: 7,
        };
        SetCookie(cookie);
        setState(res.data);
        setSubmitting(false);
        router.push("/");
      })
      .catch((e) => {
        setState((prevState) => ({ ...prevState, submitting: false }));
      });
  };

  return (
    <RootLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validateYupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="UserName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    User Name
                  </label>
                  <div className="mt-2">
                    <Field
                      type="text"
                      name="UserName"
                      id="UserName"
                      placeholder="Enter your UserName number"
                    />
                    <ErrorMessage name="UserName" component="div" />
                    {/* <input
                        id="username"
                        name="UserName"
                        type="UserName"
                        autoComplete="UserName"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>

                  <div className="mt-2">
                    <Field name="password" type="password" id="password" />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                    {/* <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      /> */}
                  </div>
                </div>

                <div>
                  <Button
                    // type="submit"
                    kind="danger"
                    shape="dashed"
                    // className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isSubmitting}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default Login;
