import { useEffect, useState } from "react";
import { Item } from "../types/types";

interface RemainingAmountCardProps {
  expenseData: Item[];
  openingAmount: number;
}

const RemainingAmountCard: React.FC<RemainingAmountCardProps> = ({
  expenseData,
  openingAmount,
}) => {
  const [remainingAmount, setRemainingAmount] = useState<number>(0);

  useEffect(() => {
    setRemainingAmount(
      openingAmount -
        expenseData.reduce((total, item) => total + item.amount, 0)
    );
  }, [expenseData, openingAmount]);

  return (
    <div>
      <div className="card">Balance Amount : ₹{remainingAmount}</div>
    </div>
  );
};

export default RemainingAmountCard;
