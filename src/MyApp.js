import React, { useState } from "react";
import { Card, Text, Icon } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/icons/line-chart.js";
import "@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js";

export function MyApp() {
  const [chartType, setChartType] = useState("lineChart");

  const handleHeaderClick = () => {
    if (chartType === "lineChart") {
      setChartType("barChart");
    } else {
      setChartType("lineChart");
    }
  };

  const dataset = [
    {
      month: "January",
      data: 65,
    },
    {
      month: "February",
      data: 59,
    },
    {
      month: "March",
      data: 80,
    },
    {
      month: "April",
      data: 81,
    },
    {
      month: "May",
      data: 56,
    },
    {
      month: "June",
      data: 55,
    },
    {
      month: "July",
      data: 40,
    },
  ];
  return (
    <div>
      <Card
        avatar={
          <Icon
            name={
              chartType === "lineChart" ? "line-chart" : "horizontal-bar-chart"
            }
          />
        }
        heading="Card"
        style={{ width: "300px" }}
        headerInteractive
        onHeaderClick={handleHeaderClick}
      >
        <Text style={spacing.sapUiContentPadding}>
          This is the content area of the Card.
        </Text>
        {chartType === "lineChart" ? (
          <LineChart
            measures={[{ accessor: "data", label: "stock price" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
          />
        ) : (
          <BarChart
            dimensions={[{ accessor: "month" }]}
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dataset={dataset}
          />
        )}
      </Card>
    </div>
  );
}
