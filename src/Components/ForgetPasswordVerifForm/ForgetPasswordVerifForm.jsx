import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginFetch, setLoginLoad } from "../../Features/User/userSlice";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ForgetPasswordVerifForm() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirm, setshowConfirm] = useState(false);
  const [load, setLoad] = useState(false);
  const token = useParams();

  const changePass = async (password, confirmPassword) => {
    try {
      setLoad(true);
      const result = await axios.patch(
        "http://localhost:5999/users/password",
        {
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      console.log(result);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
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
      password: Yup.string()
        .min(8, "Min 8 Character")
        .matches(/^(?=.*[a-z])/, "Must have min one lowercase letter")
        .matches(/^(?=.*[A-Z])/, "Must have min one uppercase letter")
        .matches(/[^\w\s]/, "Password have min one symbol")
        .required("Required!"),
      confirmPassword: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      changePass(values.password, values.confirmPassword);
    },
  });
  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={formik.handleSubmit}>
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
      <div className="relative">
        <TextField
          fullWidth={true}
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
        loading={load}
        loadingIndicator="Loading…"
        variant="contained"
      >
        <span className="font-bold">Change Password</span>
      </LoadingButton>
    </form>
  );
}
