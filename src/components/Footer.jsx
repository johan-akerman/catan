export default function Footer() {
  return (
    <div className="w-8/12 bg-white absolute z-10 bottom-0 m-auto left-0 right-0 text-center text-md rounded-t-lg">
      <div className="grid grid-cols-4">
        <div className="grid grid-cols-3 p-2 gap-2">
          <div className="h-4 flex gap-2">
            <div className="bg-gray-600 rounded-sm h-6 w-5"></div>
            <h3>3</h3>
          </div>

          <div className="h-4 flex gap-2">
            <div className="bg-gray-600 rounded-sm h-6 w-5"></div>
            <h3>3</h3>
          </div>

          <div className="h-4 flex gap-2">
            <div className="bg-gray-600 rounded-sm h-6 w-5"></div>
            <h3>3</h3>
          </div>

          <div className="h-4 flex gap-2">
            <div className="bg-gray-600 rounded-sm h-6 w-5"></div>
            <h3>3</h3>
          </div>

          <div className="h-4 flex gap-2">
            <div className="bg-gray-600 rounded-sm h-6 w-5"></div>
            <h3>3</h3>
          </div>

          <div className="h-4 flex gap-2">
            <div className="bg-gray-600 rounded-sm h-6 w-5"></div>
            <h3>3</h3>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-4 p-2 gap-2">
          <div className="bg-gray-200 rounded-md">road</div>
          <div className="bg-gray-200 rounded-md">village</div>
          <div className="bg-gray-200 rounded-md">city</div>
          <div className="bg-gray-200 rounded-md">dev card</div>
        </div>
        <div className="p-2 gap-2 grid-cols-1 grid">
          <div className="bg-gray-200 rounded-md">Shop</div>
          <div className="bg-gray-200 rounded-md">Dice</div>
        </div>
      </div>
    </div>
  );
}
