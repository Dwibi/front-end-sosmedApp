import CardPost from "../../Components/CardPost/CardPost";

export default function Home() {
  return (
    <div className="w-full flex justify-center h-full overflow-y-auto">
      <div className="max-w-[470px]">
        <CardPost />
        <CardPost />
      </div>
    </div>
  );
}
