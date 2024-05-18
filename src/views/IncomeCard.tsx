import LeastExpensiveCard from "../component/LeastExpensiveCard";
import MostExpensiveCard from "../component/MostExpensiveCard";
import TotalExpenseCard from "../component/TotalExpenseCard";
import { Item } from "../types/types";

interface IncomeCardProps {
  incomeItemList: Item[];
}

const IncomeCard: React.FC<IncomeCardProps> = ({ incomeItemList }) => {
  return (
    <div className="card p-2"> 
      <div className="p-2">Income Card</div>
      <div className="grid">
        <div className="col">
          <TotalExpenseCard expenseData={incomeItemList} />
        </div>
        <div className="col">
          <LeastExpensiveCard expenseData={incomeItemList} />
        </div>
        <div className="col">
          <MostExpensiveCard expenseData={incomeItemList} />
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
