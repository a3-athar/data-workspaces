import LeastExpensiveCard from "../component/LeastExpensiveCard";
import MostExpensiveCard from "../component/MostExpensiveCard";
import TotalExpenseCard from "../component/TotalExpenseCard";
import { Item } from "../types/types";

interface ExpenseCardProps {
  expenseItemList: Item[];
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expenseItemList }) => {
  return (
    <div className="card p-2">
      <div className="p-2">Expense Card</div>
      <div className="grid">
        <div className="col">
          <TotalExpenseCard expenseData={expenseItemList} />
        </div>
        <div className="col">
          <LeastExpensiveCard expenseData={expenseItemList} />
        </div>
        <div className="col">
          <MostExpensiveCard expenseData={expenseItemList} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
