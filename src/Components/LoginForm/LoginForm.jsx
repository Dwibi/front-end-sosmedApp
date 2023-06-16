import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginFetch, setLoginLoad } from "../../Features/User/userSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);
  const { loginErrorMessage, loginLoad, userData } = useSelector(
    (state) => state.user
  );
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().required("Required!"),
      password: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(setLoginLoad(true));
      const { usernameOrEmail, password } = values;
      dispatch(loginFetch(usernameOrEmail, password));
    },
  });
  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={formik.handleSubmit}>
      <TextField
        id="outlined-basic usernameOrEmail"
        label="Username or email"
        variant="outlined"
        name="usernameOrEmail"
        type="text"
        size="small"
        error={
          formik.errors.usernameOrEmail && formik.touched.usernameOrEmail
            ? true
            : false
        }
        helperText={
          formik.errors.usernameOrEmail && formik.touched.usernameOrEmail
            ? formik.errors.usernameOrEmail
            : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.usernameOrEmail}
      />
      <div className="relative">
        <TextField
          fullWidth={true}
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
      <LoadingButton
        className="!bg-[#1877f2] !rounded-lg"
        type="submit"
        loading={loginLoad}
        loadingIndicator="Loading…"
        variant="contained"
        // onClick={handleClick}
        disabled={
          !formik.values.usernameOrEmail && !formik.values.password
            ? true
            : false
        }
      >
        <span className="font-bold">LOGIN</span>
      </LoadingButton>
      {loginErrorMessage ? (
        <p className="text-center text-[14px] text-[#ed4956]">
          {loginErrorMessage}
        </p>
      ) : null}
    </form>
  );
}
