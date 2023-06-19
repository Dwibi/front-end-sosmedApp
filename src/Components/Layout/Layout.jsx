import BottomNavbar from "../BottomNavbar/BottomNavbar";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout(props) {
  return (
    <div className="flex max-[767px]:flex-col h-[100vh] max-[767px]:justify-between">
      <Navbar />
      <Sidebar />
      {props.children}
      <BottomNavbar />
    </div>
  );
}
