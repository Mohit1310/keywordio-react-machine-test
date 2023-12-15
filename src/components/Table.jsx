import { useState } from "react";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  campaignTableData,
  campaignTableHeaders,
  groupTableData,
  groupTableHeaders,
} from "../constants";
import useSortableTable from "../utils/useSortableData";

export function Table() {
  const { data, sortTable } = useSortableTable(campaignTableData);
  const [sortingOrders, setSortingOrders] = useState({});

  const handleSort = (col) => {
    setSortingOrders((prevOrders) => ({
      ...prevOrders,
      [col]: prevOrders[col] === "asc" ? "desc" : "asc",
    }));
    sortTable(col);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className=" text-zinc-700 font-medium border">
          <tr>
            <th className="font-semibold p-2 text-left">Ad Insights</th>
            <th></th>
            <th></th>
            <th></th>
            <th className="text-end pr-4">
              <HelpOutlineRoundedIcon className="text-gray-300" />
            </th>
          </tr>
        </thead>
        <thead>
          <tr className="border cursor-default">
            {campaignTableHeaders.map((row, i) => (
              <th
                scope="col"
                className="capitalize p-2 text-left text-zinc-700 font-medium"
                key={i}
              >
                <div className="flex items-center">
                  {row}
                  <div className="text-gray-300">
                    {sortingOrders[row] === "asc" ? (
                      <div onClick={() => handleSort(row)} className="flex">
                        <KeyboardArrowUpIcon fontSize="small" />
                      </div>
                    ) : (
                      <div onClick={() => handleSort(row)} className="flex">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    )}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-400 font-normal">
          {data.map((row, index) => (
            <tr key={index} className="border">
              <td className="p-2">{row.campaign}</td>
              <td className="p-2">{row.clicks}</td>
              <td className="p-2">{row.cost}</td>
              <td className="p-2">{row.conversions}</td>
              <td className="p-2">{row.revenue}</td>
            </tr>
          ))}
          <tr className="bg-slate-100 border">
            <td className="p-2">Total</td>
            <td className="p-2">26,510</td>
            <td className="p-2">USD 1,43,819</td>
            <td className="p-2">489</td>
            <td className="p-2">USD 15,73,563</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function GroupTable() {
  const { data, sortTable } = useSortableTable(groupTableData);
  const [sortingOrders, setSortingOrders] = useState({});

  const handleSort = (col) => {
    setSortingOrders((prevOrders) => ({
      ...prevOrders,
      [col]: prevOrders[col] === "asc" ? "desc" : "asc",
    }));
    sortTable(col);
  };

  return (
    <>
      <thead>
        <tr className="border-b">
          {groupTableHeaders.map((row, i) => (
            <th
              scope="col"
              className="capitalize p-2 text-left cursor-default text-zinc-700 font-medium"
              key={i}
            >
              <div className="flex items-center">
                {row}
                <div className="text-gray-300">
                  {sortingOrders[row] === "asc" ? (
                    <div onClick={() => handleSort(row)} className="flex">
                      <KeyboardArrowUpIcon fontSize="small" />
                    </div>
                  ) : (
                    <div onClick={() => handleSort(row)} className="flex">
                      <KeyboardArrowDownIcon fontSize="small" />
                    </div>
                  )}
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-400 font-normal">
        {data.map((row, index) => (
          <tr key={index} className="border-b">
            <td className="p-2">{row.group}</td>
            <td className="p-2">{row.clicks}</td>
            <td className="p-2">{row.cost}</td>
            <td className="p-2">{row.conversions}</td>
            <td className="p-2">{row.revenue}</td>
          </tr>
        ))}
        <tr className="bg-slate-100 border-y">
          <td className="p-2">Total</td>
          <td className="p-2">1,145</td>
          <td className="p-2">USD 41,383</td>
          <td className="p-2">80</td>
          <td className="p-2">USD 71,782</td>
        </tr>
      </tbody>
    </>
  );
}
