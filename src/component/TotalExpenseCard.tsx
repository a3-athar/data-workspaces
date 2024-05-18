import { useEffect, useState } from "react";
import { Item } from "../types/types";

interface TotalExpenseCardProps {
  expenseData: Item[];
}

const TotalExpenseCard: React.FC<TotalExpenseCardProps> = ({ expenseData }) => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    setTotalAmount(expenseData.reduce((total, item) => total + item.amount, 0));
  }, [expenseData]);

  return (
    <div>
      <div className="card m-0 p-3">Total : ₹{totalAmount}</div>
    </div>
  );
};

export default TotalExpenseCard;
