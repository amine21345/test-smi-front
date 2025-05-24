import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useDate() {
  const defaultDate = new Date("2024-01-01");

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedView, setSelectedView] = useState(
    searchParams.get("view") || "yearly"
  );
  const [startDate, setStartDate] = useState(
    searchParams.get("startDate")
      ? new Date(searchParams.get("startDate"))
      : defaultDate
  );
  const [endDate, setEndDate] = useState(
    searchParams.get("endDate")
      ? new Date(searchParams.get("endDate"))
      : defaultDate
  );

  const handleSelectChange = (e) => {
    setSelectedView(e.target.value);
  };

  const options = [
    { value: "daily", label: "Daily" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  // Update search params in URL when state changes
  useEffect(() => {
    const params = {};

    params.view = selectedView;

    if (selectedView === "daily") {
      params.startDate = startDate.toISOString().split("T")[0];
      params.endDate = endDate.toISOString().split("T")[0];
    } else if (selectedView === "monthly") {
      params.startDate = `${startDate.getFullYear()}-${String(
        startDate.getMonth() + 1
      ).padStart(2, "0")}`;
      // you might want to only save one date for monthly, or handle differently
    } else if (selectedView === "yearly") {
      params.startDate = `${startDate.getFullYear()}`;
    }

    setSearchParams(params);
  }, [selectedView, startDate, endDate, setSearchParams]);

  const getFormattedDate = () => {
    if (selectedView === "daily") {
      return {
        startDate: startDate?.toISOString().split("T")[0],
        endDate: endDate?.toISOString().split("T")[0],
      };
    }

    if (selectedView === "monthly") {
      return {
        month: startDate?.getMonth() + 1,
        year: startDate?.getFullYear(),
      };
    }

    if (selectedView === "yearly") {
      return {
        year: startDate?.getFullYear(),
      };
    }

    return {};
  };

  return {
    options,
    selectedView,
    handleSelectChange,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    getFormattedDate,
  };
}
