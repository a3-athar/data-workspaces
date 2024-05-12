import UserInput from "../component/UserInput";
import { useState } from "react";
import LeastExpensiveCard from "../component/LeastExpensiveCard";
import TotalExpenseCard from "../component/TotalExpenseCard";
import MostExpensiveCard from "../component/MostExpensiveCard";
import RemainingAmountCard from "../component/RemainingAmountCard";
import ExpenseTable from "../component/ExpenseTable";
import { Item } from "../types/types";
import ExpenseBasicChart from "../component/ExpenseBasicChart";

const Dashboard = () => {
  const [formattedData, setformattedData] = useState<Item[]>([]);
  const [openingAmount, setOpeningAmount] = useState<number>(0);
  const userInput = (openingAmount: number, data: string) => {
    parseString(data);
    setOpeningAmount(openingAmount);
  };

  const parseString = (inputString: string): void => {
    const items: Item[] = [];

    // Split the input string by new line
    const tokens: string[] = inputString.split("\n");

    // Initialize id counter
    let id = 1;

    // Iterate through each token
    for (const token of tokens) {
      // Split the token by '-' to separate item and amount
      const parts: string[] = token.split("-");

      let item: string;
      let amount: number;

      // Check if there's a '-' character in the token
      if (parts.length === 2) {
        // If yes, extract item and amount
        item = parts[1];
        amount = parseInt(parts[0]);
      } else {
        // If not, treat it as a miscellaneous item with the token as amount
        item = "miscellaneous";
        amount = parseInt(token);
      }

      // Check if amount is a valid number
      if (!isNaN(amount)) {
        // Create new item object and push it to the array
        items.push({ id: id++, item, amount });
      }
    }
    setformattedData(items);
  };

  return (
    <div className="p-4">
      <div className="grid">
        <div className="col">
          <UserInput getUserInput={userInput} />
        </div>
      </div>

      <div className="grid">
        <div className="col">
          <TotalExpenseCard expenseData={formattedData} />
        </div>
        <div className="col">
          <LeastExpensiveCard expenseData={formattedData} />
        </div>
        <div className="col">
          <MostExpensiveCard expenseData={formattedData} />
        </div>
        <div className="col">
          <RemainingAmountCard
            expenseData={formattedData}
            openingAmount={openingAmount}
          />
        </div>
      </div>

      <div className="grid">
        <div className="col-6">
          <ExpenseBasicChart expenseData={formattedData}/>
        </div>
      </div>

      <div className="grid">
        <div className="col-4">
          <ExpenseTable tableData={formattedData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
