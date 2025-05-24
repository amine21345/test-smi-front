import avatar from "../assets/avatars/Image-1.png";
const Navbar = () => {
  return (
    <div className="w-[90%] my-4 bg-white rounded-lg px-4 py-2 flex justify-end items-center shadow-md gap-3">
      <div className="text-right">
        <p className="text-sm font-bold text-[#002855]">John Doe</p>
        <p className="text-xs text-gray-500">Profile</p>
      </div>
      <img
        src={avatar}
        alt="John Doe"
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
  );
};

export default Navbar;
