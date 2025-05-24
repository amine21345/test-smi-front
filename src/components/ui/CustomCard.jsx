import CustomSpinner from "./CustomSpinner";

const CustomCard = ({ children, className = "", loading }) => {
  return (
    <div
      className={`bg-white rounded-lg  w-full h-full shadow-md flex flex-col
       items-center justify-center gap-2 ${className}`}
    >
      {loading ? <CustomSpinner /> : children}
    </div>
  );
};

export default CustomCard;
