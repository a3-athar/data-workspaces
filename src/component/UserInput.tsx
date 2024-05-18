import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

interface UserInputProps {
  getUserInput: (income: string, expense: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ getUserInput }) => {
  const [income, setIncome] = useState<string>("");
  const [expense, setExpense] = useState<string>("");
  return (
    <div className="card p-4 flex justify-content-around">
      <div className="flex justify-content-center">
        <FloatLabel>
          <InputTextarea
            id="description"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            rows={5}
            cols={30}
          />
          <label htmlFor="description">Enter your Income</label>
        </FloatLabel>
      </div>
      <div className="flex justify-content-center">
        <FloatLabel>
          <InputTextarea
            id="description"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            rows={5}
            cols={30}
          />
          <label htmlFor="description">Enter your Expense</label>
        </FloatLabel>
      </div>
      <div className="align-content-end">
        <Button
          label="Submit"
          onClick={() => getUserInput(income, expense)}
          raised
          severity="secondary"
        />
      </div>
    </div>
  );
};

export default UserInput;
