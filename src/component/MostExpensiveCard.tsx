import { useEffect, useState } from "react";
import { Item } from "../types/types";

interface MostExpensiveCardProps {
  expenseData: Item[];
}

const MostExpensiveCard: React.FC<MostExpensiveCardProps> = ({
  expenseData,
}) => {
  const [highestAmountItem, setHighestAmountItem] = useState<Item>();

  useEffect(() => {
    if (expenseData.length !== 0) {
      // Sort the array based on the amount in ascending order
      const sortedItems = [...expenseData].sort((a, b) => a.amount - b.amount);

      // Return the first item from the sorted array (which has the highest amount)
      setHighestAmountItem(sortedItems[expenseData.length - 1]);
    }
  }, [expenseData]);

  return (
    <div>
      <div className="card">
        <i
          className="pi pi-arrow-up pr-2"
          style={{ color: "red", fontSize: "calc(10px + 2vmin)" }}
        ></i>
        {highestAmountItem?.item} : ₹{highestAmountItem?.amount}
      </div>
    </div>
  );
};

export default MostExpensiveCard;
