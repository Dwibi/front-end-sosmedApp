import Sidebar from "../Sidebar/Sidebar";

export default function Layout(props) {
  return (
    <div className="flex">
      <Sidebar />
      {props.children}
    </div>
  );
}
