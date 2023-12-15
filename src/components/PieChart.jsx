import { PieChart } from "@mui/x-charts/PieChart";
import {
  clicksData,
  costData,
  conversionsData,
  revenueData,
} from "../constants";
import { useSelector } from "react-redux";

export default function PieChartWithPaddingAngle() {
  const selectedOption = useSelector((state) => state.dropdown.selectedOption);

  const getDataForOption = () => {
    switch (selectedOption) {
      case "clicks":
        return clicksData;
      case "cost":
        return costData;
      case "conversions":
        return conversionsData;
      case "revenue":
        return revenueData;
      default:
        return clicksData;
    }
  };

  const chartData = getDataForOption();

  return (
    <PieChart
      series={[
        {
          data: chartData,
          startAngle: 0,
          endAngle: 360,
          paddingAngle: 1,
          innerRadius: 100,
          outerRadius: 60,
        },
      ]}
      skipAnimation
      width={420}
      height={300}
      margin={{ left: 0 }}
      slotProps={{
        legend: {
          direction: "column",
        },
      }}
    />
  );
}
