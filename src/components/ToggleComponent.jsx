import React, { useState } from "react";
import { GroupTable } from "./Table"; // Import the Table component
import PieChart from "./PieChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../utils/dropDownSlice";

const ToggleComponent = ({}) => {
  const [showTable, setShowTable] = useState(false);
  const [showSelect, setShowSelect] = useState(true);
  const selectedValue = useSelector((state) => state.dropdown.selectedOption);
  const dispatch = useDispatch();

  const handleDropdownChange = (event) => {
    const value = event.target.value;

    dispatch(setSelectedOption(value));
  };

  const handleToggle = () => {
    setShowTable(!showTable);
    setShowSelect(!showSelect);
  };

  return (
    <div className="flex flex-col relative border h-[370px]">
      <div
        color="primary"
        className="w-fit self-end absolute cursor-pointer bottom-2 right-2"
        onClick={handleToggle}
      >
        {showTable ? (
          <div className="bg-gray-200 rounded-full p-1 flex gap-1 relative z-10 text-3xl">
            <div className="w-9 h-9 right-0 top-0 rounded-full z-0 absolute bg-[#049bff]"></div>
            <DonutLargeIcon fontSize="inherit" />
            <TableChartOutlinedIcon
              className="text-white z-20"
              fontSize="inherit"
            />
          </div>
        ) : (
          <div className="bg-gray-200 rounded-full p-1 flex gap-1 relative z-10 text-3xl">
            <div className="w-9 h-9 left-0 top-0 rounded-full z-0 absolute bg-[#049bff]"></div>
            <DonutLargeIcon className="z-20 text-white" fontSize="inherit" />
            <TableChartOutlinedIcon fontSize="inherit" />
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <td className="font-medium p-2 text-zinc-700">Ad Insights</td>
            <td></td>
            <td></td>
            <td>
              {showSelect ? (
                <select
                  className="border-gray-300 rounded-sm text-sm p-0 pl-2 w-28 capitalize focus:border-none"
                  value={selectedValue}
                  onChange={handleDropdownChange}
                >
                  <option value={"clicks"}>clicks</option>
                  <option value={"cost"}>cost</option>
                  <option value={"conversions"}>conversions</option>
                  <option value={"revenue"}>revenue</option>
                </select>
              ) : (
                <></>
              )}
            </td>
            <td className="text-end pr-4">
              <HelpOutlineRoundedIcon className="text-gray-300" />
            </td>
          </thead>
          {showTable ? <GroupTable /> : <PieChart />}
        </table>
      </div>
    </div>
  );
};

export default ToggleComponent;
