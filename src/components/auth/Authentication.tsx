"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { errorToast, successToast } from "@/utility/Toast";
import { useLazyQuery } from "@apollo/client";
import { loginQuery } from "@/hook/query/login";
import { redirect } from "next/navigation";
import { signIn,signOut } from "next-auth/react";
import SpinnerLoader from "../Loader/SpinnerLoader";

export default function Authentication() {
  const [selected, setSelected] = useState<string | number>("login");

  const signInHandler=()=>{
    signIn("google",{callbackUrl:"/menu"})
  }

  const [login, { loading }] = useLazyQuery(loginQuery, {
    onCompleted: (data) => {
      console.log(data, "data");
      localStorage.setItem("TOKEN", data?.login?.token);
      successToast("login success");
      redirect("/menu");
    },
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      authType: selected,
    },
    validationSchema:
      selected === "login"
        ? Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
            authType: Yup.string(),
          })
        : Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
            authType: Yup.string(),
          }),
    onSubmit: async (values) => {
      if (values.authType === "login") {
        console.log("Form submitted with values:", values);
        const adduser = async () => {
          const result = await login({
            variables: {
              input: {
                email: values.email,
                password: values.password,
              },
            },
          });
          if (!result.data) {
            errorToast("login failed");
          }
        };
        adduser(); // Call the login function for login case
      } else {
        console.log("Form submitted with values:", values);
        errorToast("Registration not implemented yet");
      }
    },
  });

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <div className="min-h-screen justify-center items-center flex flex-col w-full">
      <Card className="max-w-full w-[340px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form
                className="flex flex-col gap-4"
                onSubmit={formik.handleSubmit}
              >
                <Input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-red-500 px-3 text-xs">
                    {formik.errors.email}
                  </span>
                ) : null}
                <Input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className="text-red-500 px-3 text-xs">
                    {formik.errors.password}
                  </span>
                ) : null}
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form
                className="flex flex-col gap-4"
                onSubmit={formik.handleSubmit}
              >
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-red-500 px-3 text-xs">
                    {formik.errors.name}
                  </span>
                ) : null}
                <Input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-red-500 px-3 text-xs">
                    {formik.errors.email}
                  </span>
                ) : null}
                <Input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className="text-red-500 px-3 text-xs">
                    {formik.errors.password}
                  </span>
                ) : null}
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
        <div className="justify-center items-center flex max-w-full w-[340px] mb-5">
          <Button className=" bg-transparent hover:bg-gray-100  font-semibold py-2 px-4 border  rounded shadow flex items-center" onClick={signInHandler}>
            <img
              className="h-6 w-6 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
            />
            <span>Sign in with Google</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
