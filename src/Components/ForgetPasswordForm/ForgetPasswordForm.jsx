import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginFetch, setLoginLoad } from "../../Features/User/userSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ForgetPasswordForm() {
  const dispatch = useDispatch();
  const [load, setLoad] = useState();

  const generateEmailForgetPassword = async (email) => {
    try {
      setLoad(true);
      const result = await axios.post(
        "http://localhost:5999/users/forget-pass-email",
        { email: email }
      );
      if (result.status === 200) {
        toast.success(result.data.message);
        console.log(result);
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
      toast.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Format").required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      generateEmailForgetPassword(values.email);
    },
  });

  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={formik.handleSubmit}>
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
      <LoadingButton
        className="!bg-[#1877f2] !rounded-lg"
        type="submit"
        loading={load}
        loadingIndicator="Loading…"
        variant="contained"
        // onClick={handleClick}
      >
        <span className="font-bold">SEND</span>
      </LoadingButton>
    </form>
  );
}
