import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";

export default function CardPost() {
  const [expand, setExpand] = useState(false);
  const expandCaption = () => {
    setExpand(true);
  };
  return (
    <div>
      <div className="p-[14px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-[32px] object-cover rounded-full border border-black"
            src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg"
            alt="profile"
          />
          <p className="ml-[14px] font-bold text-sm">User</p>
        </div>
        <MoreHorizIcon />
      </div>
      <img
        src="https://akcdn.detik.net.id/visual/2021/01/12/nostalgia-sama-minuman-minuman-populer-dari-masa-ke-masa-yang-mana-favoritmu_11.jpeg?w=480&q=90"
        alt="image-post"
      />
      <div className="p-[14px] flex flex-col gap-[8px]">
        <div className="flex gap-[8px]">
          <div className="">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="">
            <ModeCommentOutlinedIcon />
          </div>
        </div>
        <p className="font-bold text-[14px]">100 Suka</p>
        <div>
          <p className={!expand ? "text-sm line-clamp-2" : "text-sm"}>
            <b>User</b> Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Distinctio sapiente aliquam doloribus accusamus impedit
            minima, sequi perspiciatis et! Officia, tempora?
          </p>
          {!expand ? (
            <div
              onClick={expandCaption}
              className="text-sm text-[#737373] cursor-pointer"
            >
              More
            </div>
          ) : null}
        </div>
        <p className="text-[10px] text-[#737373]">DESEMBER 15, 2022</p>
      </div>
    </div>
  );
}
