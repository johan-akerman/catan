import {
  faCoins,
  faPeopleGroup,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserCard() {
  return (
    <div className="bg-white p-3 h-20 border-b-2 last:border-none">
      <h1 className="font-bold text-lg">Username</h1>
      <div className="grid grid-cols-5 pt-2 text-sm">
        <div className="flex">
          <FontAwesomeIcon icon={faCoins} className="mr-2 mt-1" />
          <span>1</span>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faPeopleGroup} className="mr-2 mt-1" />
          <span>1</span>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faRoad} className="mr-2 mt-1" />
          <span>1</span>
        </div>

        <div className="flex">
          <FontAwesomeIcon icon={faRoad} className="mr-2 mt-1" />
          <span>1</span>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faRoad} className="mr-2 mt-1" />
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
