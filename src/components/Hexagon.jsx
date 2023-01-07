export default function Hexagon() {
  return (
    <div className="grid grid-cols-3 gap-0 w-fit relative">
      <div className="w-0 h-0 border-b-[56px] border-b-gray-400 border-l-[56px] border-l-transparent"></div>
      <div className="bg-gray-400"></div>
      <div className="w-0 h-0 border-b-[56px] border-gray-400 border-r-[56px] border-r-transparent"></div>

      <div className="bg-gray-400 h-14"></div>
      <div className="bg-gray-400 h-14"></div>
      <div className="bg-gray-400 h-14"></div>

      <div className="w-0 h-0 border-t-[56px] border-t-gray-400 border-l-[56px] border-l-transparent"></div>
      <div className="bg-gray-400"></div>
      <div className="w-0 h-0 border-t-[56px] border-t-gray-400 border-r-[56px] border-r-transparent"></div>
    </div>
  );
}
