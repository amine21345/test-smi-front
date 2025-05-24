const CustomIcon = ({ icon, className = "" }) => {
  return (
    <div className={`w-16 h-16 flex items-center justify-center  ${className}`}>
      <img src={icon} alt="icon" className="w-6 h-6 object-contain" />
    </div>
  );
};

export default CustomIcon;
