import instagramLogo from "./../../Assets/Images/instagram-logo.png";

export default function Navbar() {
  return (
    <div className="min-h-[48px] flex min-[767px]:hidden border-b-2 border-[#dfdfdf] px-[16px] fixed top-0 w-full bg-white">
      <img
        className="w-[100px] object-contain"
        src={instagramLogo}
        alt="instagram-logo"
      />
      {/* <p>hi navbar</p> */}
    </div>
  );
}
