import UserInput from "../component/UserInput";
import { useState } from "react";
import ExpenseTable from "../component/ExpenseTable";
import { Item } from "../types/types";
import BasicChart from "../component/BasicChart";
import IncomeCard from "./IncomeCard";
import ExpenseCard from "./ExpenseCard";
import RemainingAmountCard from "../component/RemainingAmountCard";

const Dashboard = () => {
  const [incomeData, setIncomeData] = useState<Item[]>([]);
  const [expenseData, setExpenseData] = useState<Item[]>([]);
  const userInput = (income: string, expense: string) => {
    setIncomeData(formatData(income));
    setExpenseData(formatData(expense));
  };

  const formatData = (inputString: string): Item[] => {
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
    return items;
  };

  return (
    <div className="p-4">
      <div className="grid">
        <div className="col">
          <UserInput getUserInput={userInput} />
        </div>
      </div>

      <div className="grid">
        <div className="col-5">
          <IncomeCard incomeItemList={incomeData} />
        </div>
        <div className="col-2">
          <RemainingAmountCard expenseData={expenseData} openingAmount={incomeData} />
        </div>
        <div className="col-5">
          <ExpenseCard expenseItemList={expenseData} />
        </div>
      </div>

      <div className="grid">
        <div className="col-6">
          <BasicChart title={'Income'} expenseData={incomeData} />
        </div>

        <div className="col-6">
          <BasicChart title={'Expense'} expenseData={expenseData} />
        </div>
      </div>

      <div className="grid">
      <div className="col-6">
          <ExpenseTable tableData={incomeData} />
        </div>
        <div className="col-6">
          <ExpenseTable tableData={expenseData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
