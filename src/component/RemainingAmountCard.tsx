import { useEffect, useState } from "react";
import { Item } from "../types/types";

interface RemainingAmountCardProps {
  expenseData: Item[];
  openingAmount: Item[];
}

const RemainingAmountCard: React.FC<RemainingAmountCardProps> = ({
  expenseData,
  openingAmount,
}) => {
  const [remainingAmount, setRemainingAmount] = useState<number>(0);

  useEffect(() => {
    setRemainingAmount(
      openingAmount.reduce((total, item) => total + item.amount, 0) -
        expenseData.reduce((total, item) => total + item.amount, 0)
    );
  }, [expenseData, openingAmount]);

  return (
    <div>
      <div className="card p-2">
        <div className="p-2">Balance Amount</div>
        <div className="p-1">
          <div className="card m-0 p-3">₹{remainingAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default RemainingAmountCard;
