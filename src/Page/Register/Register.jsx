import { Link } from "react-router-dom";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import instagramLogo from "./../../Assets/Images/instagram-logo.png";

export default function Register() {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center gap-5">
      <div className="w-[350px] p-[30px] mt-[30px] flex flex-col items-center h-fit gap-5 min-[430px]:border min-[430px]:border-[#dbdbdb]">
        <img
          className="w-[175px] object-cover"
          src={instagramLogo}
          alt="instagram-logo"
        />
        <h1 className="text-[#737373] text-[17px] font-bold text-center">
          Sign up to see photos and <br /> videos from your friends.
        </h1>
        <RegisterForm />
        <p className="text-[12px] text-[#737373] text-center">
          People who use our service may have uploaded <br /> your contact
          information to Instagram. Learn More
        </p>
        <p className="text-[12px] text-[#737373] text-center">
          By signing up, you agree to our Terms , Privacy <br /> Policy and
          Cookies Policy .
        </p>
      </div>
      <div className="w-[350px] h-[70px] text-[14px] flex justify-center items-center min-[430px]:border min-[430px]:border-[#dbdbdb]">
        <p className="">
          Have an account?{" "}
          <Link className="text-[#0095f6]" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
