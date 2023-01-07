import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function TradableResourceCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className=" gap-4">
      <div className="h-24 w-20 rounded-md bg-gray-200 relative inline-flex items-center p-3 font-medium text-center text-3xl"></div>
      <div className="flex gap-1 ">
        <button
          className="inline-flex items-center justify-center h-6 w-6 bg-gray-400 rounded-md border-b-gray-600 border-b-2 text-white font-bold"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <div class="inline-flex items-center justify-center w-6 h-6 text-sm font-bold text-gray-400  border border-gray-400 rounded-sm">
          {count}
        </div>
        <button
          className="inline-flex items-center justify-center h-6 w-6 bg-gray-400 rounded-md border-b-gray-600 border-b-2 text-white font-bold"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
