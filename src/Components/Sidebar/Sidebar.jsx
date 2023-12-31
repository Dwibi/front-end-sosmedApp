import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalCreatePost from "../ModalCreatePost/ModalCreatePost";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { userData } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () =>
    userData?.verify
      ? setOpen(true)
      : toast.error("Your account is not verfied");
  const handleClose = () => setOpen(false);
  return (
    <div className="min-w-[70px] fixed flex flex-col items-center h-[100vh] border-r-2 border-[#dfdfdf] max-[767px]:hidden">
      <ModalCreatePost open={open} handleClose={handleClose} />
      <div className="pb-8 pt-4">
        <Link to="/" className="p-3 rounded-lg cursor-pointer">
          <InstagramIcon />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <Link
          to="/"
          className="p-3 rounded-lg hover:bg-[#dfdfdf] cursor-pointer"
        >
          {window.location.pathname === "/" ? (
            <HomeIcon />
          ) : (
            <HomeOutlinedIcon />
          )}
        </Link>
        <div
          onClick={handleOpen}
          className="p-3 rounded-lg hover:bg-[#dfdfdf] cursor-pointer"
        >
          <AddCircleIcon />
        </div>
        <Link
          to="/profile"
          className="p-3 rounded-lg hover:bg-[#dfdfdf] cursor-pointer"
        >
          {window.location.pathname === "/profile" ? (
            <PersonIcon />
          ) : (
            <PersonOutlineOutlinedIcon />
          )}
        </Link>
      </div>
    </div>
  );
}
