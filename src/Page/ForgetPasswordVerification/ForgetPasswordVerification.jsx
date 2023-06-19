import { Link, Navigate } from "react-router-dom";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import instagramLogo from "./../../Assets/Images/instagram-logo.png";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import ForgetPasswordVerifForm from "../../Components/ForgetPasswordVerifForm/ForgetPasswordVerifForm";

export default function ForgetPasswordVerification() {
  const { userData } = useSelector((state) => state.user);
  if (userData) return <Navigate to="/" />;
  return (
    <div className="h-[100vh] w-full flex flex-col items-center gap-5">
      <div className="w-[350px] p-[40px] mt-[10px] flex flex-col items-center h-fit gap-5 min-[430px]:border min-[430px]:border-[#dbdbdb]">
        <img
          className="w-[175px] object-cover py-[20px]"
          src={instagramLogo}
          alt="instagram-logo"
        />
        <ForgetPasswordVerifForm />
      </div>
    </div>
  );
}
