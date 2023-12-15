import { useState } from "react";

const useSortableTable = (initialData) => {
  const [data, setData] = useState(initialData);
  const [order, setOrder] = useState("asc");

  const sortTable = (col) => {
    const isAsc = order === "asc";

    const sorted = [...data].sort((a, b) => {
      if (
        col === "clicks" ||
        col === "cost" ||
        col === "conversions" ||
        col === "revenue"
      ) {
        const valueA = parseFloat(a[col].replace(/[^\d.]/g, ""), 10);
        const valueB = parseFloat(b[col].replace(/[^\d.]/g, ""), 10);
        return isAsc ? valueA - valueB : valueB - valueA;
      } else {
        const valueA = a[col].toLowerCase();
        const valueB = b[col].toLowerCase();
        return isAsc
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
    });

    setData(sorted);
    setOrder(isAsc ? "desc" : "asc");
  };

  return { data, sortTable };
};

export default useSortableTable;
