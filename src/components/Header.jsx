import UserCard from "./UserCard";

export default function Header() {
  return (
    <div className="w-full mx-auto bg-white border-b-8 border-b-green-500">
      <p className="py-3 text-2xl text-center">
        <strong>User</strong> is placing settlement...
      </p>
      <div className="w-5/12 mx-auto grid grid-cols-3 pb-2 px-2 gap-2">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
