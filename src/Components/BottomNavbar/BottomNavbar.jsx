import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Link } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <div className="h-[48px] flex justify-evenly gap-3 min-[767px]:hidden border-t-2 border-[#dfdfdf] w-full fixed bottom-0 bg-white">
      <Link to="/" className="p-3 rounded-lg hover:bg-[#dfdfdf] cursor-pointer">
        {window.location.pathname === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
      </Link>
      <Link
        to="/create"
        className="p-3 rounded-lg hover:bg-[#dfdfdf] cursor-pointer"
      >
        {window.location.pathname === "/create" ? (
          <AddCircleIcon />
        ) : (
          <AddCircleOutlineIcon />
        )}
      </Link>
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
  );
}
