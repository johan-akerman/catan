import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import UserCard from "./UserCard";

export default function Header() {
  return (
    <div className="w-full mx-auto ">
      {/* <a className="text-2xl">
        <FontAwesomeIcon icon={faChevronLeft} />
      </a> */}

      <div className="w-6/12 mx-auto grid grid-cols-3 pb-2 px-2 gap-2">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
