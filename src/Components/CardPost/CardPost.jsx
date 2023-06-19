import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CardPost(props) {
  const { userData } = useSelector((state) => state.user);
  return (
    <div>
      <div className="p-[14px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-[32px] object-cover rounded-full border border-black"
            src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg"
            alt="profile"
          />
          <p className="ml-[14px] font-bold text-sm">
            {props?.data?.User?.username}
          </p>
        </div>
        {userData?.id === props?.data?.user_id ? (
          <div className="flex gap-2">
            <EditIcon />
            <div
              onClick={() => props.deleteFunc(props?.data?.id, props?.index)}
            >
              <DeleteIcon />
            </div>
          </div>
        ) : null}
      </div>
      <img
        src={`http://localhost:5999/image_post/${props?.data?.image_post}`}
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
          <p className="text-sm">
            <b> {props?.data?.User?.username}</b> {props?.data?.caption}
          </p>
        </div>
        <p className="text-[10px] text-[#737373]">DESEMBER 15, 2022</p>
      </div>
    </div>
  );
}
