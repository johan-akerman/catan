export default function UserCard() {
  return (
    <div className="bg-gray-200 rounded-md p-3 grid grid-cols-2 h-20">
      <div className="bg-green-200 rounded-full h-14 w-14"></div>
      <div>
        <h1 className="font-semibold">Username</h1>
        <div className="grid grid-cols-3 pt-2 text-sm">
          <div>
            <h3>X: 1</h3>
          </div>
          <div>
            <h3>Y: 2</h3>
          </div>
          <div>
            <h3>Z: 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
