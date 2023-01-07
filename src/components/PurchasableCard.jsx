import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PurchasableCard() {
  return (
    // <div className="bg-gray-200 rounded-md  border-gray-400 border-2">
    //   <FontAwesomeIcon icon={faHouse} />
    // </div>

    <div className="rounded-md bg-gray-200 relative inline-flex items-center p-3 font-medium text-center text-3xl">
      <FontAwesomeIcon icon={faHouseChimney} className="w-full" />
      <div class="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-gray-500 border-4 border-white rounded-full -top-2 -right-2">
        7
      </div>
    </div>
  );
}
