export const campaignTableData = [
  {
    // Cosmetics 712 USD 4,272 8 USD 16,568
    campaign: "Cosmetics",
    clicks: "712",
    cost: "USD 4,272",
    conversions: "8",
    revenue: "USD 16,568",
  },
  {
    // Serums 3,961 USD 27,331 115 USD 362,526
    campaign: "Serums",
    clicks: "3,961",
    cost: "USD 27,331",
    conversions: "115",
    revenue: "USD 362,526",
  },
  {
    // Facewash 9,462 USD 76,831 123 USD 266,800
    campaign: "Facewash",
    clicks: "9,462",
    cost: "USD 76,831",
    conversions: "123",
    revenue: "USD 266,800",
  },
  {
    // Shampoos 439 USD 2,151 5 USD 11,029
    campaign: "Shampoos",
    clicks: "439",
    cost: "USD 2,151",
    conversions: "5",
    revenue: "USD 11,029",
  },
  {
    // Conditioners 1,680 USD 3,864 49 USD 175,245
    campaign: "Conditioners",
    clicks: "1,680",
    cost: "USD 3,864",
    conversions: "49",
    revenue: "USD 175,245",
  },
  {
    campaign: "Facewash 2",
    clicks: "4,978",
    cost: "USD 29,370",
    conversions: "189",
    revenue: "USD 623,106",
  },
];

export const campaignTableHeaders = [
  "campaign",
  "clicks",
  "cost",
  "conversions",
  "revenue",
];

export const groupTableHeaders = [
  "group",
  "clicks",
  "cost",
  "conversions",
  "revenue",
];

export const groupTableData = [
  {
    group: `Male`,
    clicks: "348",
    cost: "USD 12,528",
    conversions: "42",
    revenue: "USD 62,118",
    color: "#ff803e",
  },
  {
    group: "Female",
    clicks: "692",
    cost: "USD 24,912",
    conversions: "35",
    revenue: "USD 5,175",
    color: "#0096ff",
  },
  {
    group: "Unkown",
    clicks: "105",
    cost: "USD 3,943",
    conversions: "3",
    revenue: "USD 4,489",
    color: "#323c46",
  },
];

export const clicksData = groupTableData.map((clicksChart) => ({
  label: clicksChart.group,
  value: parseFloat(clicksChart.clicks.replace(/[^\d]/g, "")),
  color: clicksChart.color,
}));

export const costData = groupTableData.map((costData) => ({
  label: costData.group,
  value: parseFloat(costData.cost.replace(/[^\d.]/g, "")),
  color: costData.color,
}));

export const conversionsData = groupTableData.map((conversionData) => ({
  label: conversionData.group,
  value: parseFloat(conversionData.conversions.replace(/[^\d.]/g, "")),
  color: conversionData.color,
}));

export const revenueData = groupTableData.map((revenueData) => ({
  label: revenueData.group,
  value: parseFloat(revenueData.revenue.replace(/[^\d.]/g, "")),
  color: revenueData.color,
}));
