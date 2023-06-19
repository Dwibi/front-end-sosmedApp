import { useParams } from "react-router-dom";
import instagramLogo from "./../../Assets/Images/instagram-logo.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EmailVerification() {
  const { token } = useParams();
  console.log(token);
  const [isVerify, setIsVerify] = useState();
  const verifyEmail = async () => {
    try {
      const result = await axios.patch(
        "http://localhost:5999/users/verify-email",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.status === 200) {
        setIsVerify(true);
      }
    } catch (error) {
      setIsVerify(false);
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);
  return (
    <div className="h-[100vh] flex justify-center">
      <div className="w-[350px] p-[40px] mt-[10px] flex flex-col items-center h-fit gap-5 min-[430px]:border min-[430px]:border-[#dbdbdb]">
        <img
          className="w-[175px] object-cover py-[20px]"
          src={instagramLogo}
          alt="instagram-logo"
        />
        {isVerify === false ? (
          <div className="flex items-center gap-2 border-4 border-red-500 p-2">
            <CancelIcon className="text-red-500" />
            <p className="font-bold">Your link is expired</p>
          </div>
        ) : isVerify === true ? (
          <div className="flex items-center gap-2 border-4 border-green-500 p-2">
            <CheckCircleIcon className="text-green-500" />
            <p className="font-bold">Your email now is verified</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
