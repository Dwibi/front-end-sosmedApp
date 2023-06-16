import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerFetch, setRegisterLoad } from "../../Features/User/userSlice";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirm, setshowConfirm] = useState(false);
  const { registerErrorMessage, registerLoad } = useSelector(
    (state) => state.user
  );
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password must match";
      }
      return errors;
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid Email Format").required("Required!"),
      password: Yup.string()
        .min(8, "Min 8 Character")
        .matches(/^(?=.*[a-z])/, "Must have min one lowercase letter")
        .matches(/^(?=.*[A-Z])/, "Must have min one uppercase letter")
        .matches(/[^\w\s]/, "Password have min one symbol")
        .required("Required!"),
      confirmPassword: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(setRegisterLoad(true));
      const { username, email, password, confirmPassword } = values;
      dispatch(registerFetch(username, email, password, confirmPassword));
    },
  });

  //   console.log(formik.errors);
  return (
    <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
      <TextField
        id="outlined-basic username"
        label="Username"
        variant="outlined"
        name="username"
        type="text"
        size="small"
        error={formik.errors.username && formik.touched.username ? true : false}
        helperText={
          formik.errors.username && formik.touched.username
            ? formik.errors.username
            : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <TextField
        id="outlined-basic email"
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        size="small"
        error={formik.errors.email && formik.touched.email ? true : false}
        helperText={
          formik.errors.email && formik.touched.email ? formik.errors.email : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div className="relative">
        <TextField
          id="outlined-basic password"
          label="Password"
          variant="outlined"
          name="password"
          type={showPassword ? "text" : "password"}
          size="small"
          error={
            formik.errors.password && formik.touched.password ? true : false
          }
          helperText={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ""
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p
          className="cursor-pointer text-[12px] font-bold absolute right-1 top-0 h-[40px] flex items-center"
          onClick={() => setshowPassword(!showPassword)}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </p>
      </div>
      <div className="relative">
        <TextField
          id="outlined-basic confirmPassword"
          label="Confrim Password"
          variant="outlined"
          name="confirmPassword"
          type={showConfirm ? "text" : "password"}
          size="small"
          error={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? true
              : false
          }
          helperText={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <p
          className="cursor-pointer text-[12px] font-bold absolute right-1 top-0 h-[40px] flex items-center"
          onClick={() => setshowConfirm(!showConfirm)}
        >
          {showConfirm ? "HIDE" : "SHOW"}
        </p>
      </div>
      <LoadingButton
        className="!bg-[#1877f2] !rounded-lg"
        type="submit"
        loading={registerLoad}
        loadingIndicator="Loading…"
        variant="contained"
        // onClick={handleClick}
        disabled={
          !formik.values.username &&
          !formik.values.email &&
          !formik.values.password &&
          !formik.values.confirmPassword
            ? true
            : false
        }
      >
        <span className="font-bold">Sign Up</span>
      </LoadingButton>
      {registerErrorMessage ? (
        <p className="text-center text-[14px] text-[#ed4956]">
          {registerErrorMessage}
        </p>
      ) : null}
    </form>
  );
}
