import logo from "../assets/logo.png";
import archive from "../assets/slide menu icons/archive.png";
import calendar from "../assets/slide menu icons/calendar-1.png";
import gift from "../assets/slide menu icons/Group 195.png";
import dashboard from "../assets/slide menu icons/Group-1.png";
import users from "../assets/slide menu icons/Group-2.png";
import mobile from "../assets/slide menu icons/Group-3.png";
import home from "../assets/slide menu icons/home.png";
import map from "../assets/slide menu icons/map.png";

const menuItems = [
  { id: 1, icon: home, alt: "Home", active: true },
  { id: 2, icon: calendar, alt: "Calendar" },
  { id: 3, icon: dashboard, alt: "Dashboard" },
  { id: 4, icon: mobile, alt: "Mobile" },
  { id: 5, icon: map, alt: "Map" },
  { id: 6, icon: gift, alt: "Gift" },
  { id: 7, icon: users, alt: "Users" },
  { id: 8, icon: archive, alt: "Archive" },
];

const SideMenu = () => {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-4">
      <img src={logo} alt="logo" className="mb-5" />
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
            item.active ? "bg-[#002855]" : "hover:bg-gray-100"
          }`}
        >
          <img src={item.icon} alt={item.alt} />
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
