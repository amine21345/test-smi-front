import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomSelect from "./CustomSelect";

const CustomDatePicker = ({
  options,
  selectedView,
  handleSelectChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center w-fit font-sans">
      <CustomSelect
        value={selectedView}
        onChange={handleSelectChange}
        options={options}
      />
      {/* Daily: Range Picker */}
      {selectedView === "daily" && (
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          isClearable
          placeholderText="Select a date range"
          className="px-3 py-2 border w-[15vw] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* Monthly */}
      {selectedView === "monthly" && (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* Yearly */}
      {selectedView === "yearly" && (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy"
          showYearPicker
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* View Select Dropdown */}
    </div>
  );
};

export default CustomDatePicker;
