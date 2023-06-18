import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[70px] flex flex-col items-center h-[100vh] border-r-2 border-[#dfdfdf]">
      <div className="pb-8 pt-4">
        <Link
          to="/"
          className="p-3 rounded-lg hover:bg-[#dfdfdf] cursor-pointer"
        >
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
