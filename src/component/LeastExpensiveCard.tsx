import { useEffect, useState } from "react";
import { Item } from "../types/types";

interface LeastExpensiveCardProps {
  expenseData: Item[];
}

const LeastExpensiveCard: React.FC<LeastExpensiveCardProps> = ({
  expenseData,
}) => {
  const [lowestAmountItem, setLowestAmountItem] = useState<Item>();

  useEffect(() => {
    if (expenseData.length !== 0) {
      // Sort the array based on the amount in ascending order
      const sortedItems = [...expenseData].sort((a, b) => a.amount - b.amount);

      // Return the first item from the sorted array (which has the least amount)
      setLowestAmountItem(sortedItems[0]);
    }
  }, [expenseData]);

  return (
    <div>
      <div className="card m-0 p-3">
        <i
          className="pi pi-arrow-down pr-2"
          style={{ color: "green", fontSize: "calc(8px + 1vmin)" }}
        ></i>
        {lowestAmountItem?.item} : ₹{lowestAmountItem?.amount}
      </div>
    </div>
  );
};

export default LeastExpensiveCard;
