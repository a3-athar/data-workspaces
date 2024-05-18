import React, { useEffect, useState } from "react";
import { Item } from "../types/types";
import { Chart } from "primereact/chart";

interface ExpenseBasicChartProps {
  title: string;
  expenseData: Item[];
}

const ExpenseBasicChart: React.FC<ExpenseBasicChartProps> = ({
  title,
  expenseData,
}) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (expenseData.length !== 0) {
      const data = {
        labels: expenseData.map((item) => item.item),
        datasets: [
          {
            label: title,
            data: expenseData.map((item) => item.amount),
            borderWidth: 1,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      setChartData(data);
      setChartOptions(options);
    }
  }, [expenseData, title]);
  return (
    <div>
      {Object.keys(chartData).length > 0 && (
        <div className="card">
          <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default ExpenseBasicChart;
