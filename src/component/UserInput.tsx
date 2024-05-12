import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";

interface UserInputProps {
  getUserInput: (openingAmount:number, data: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ getUserInput }) => {
  const [openingAmount, setOpeningAmount] = useState<number>(0);
  const [value, setValue] = useState("");
  return (
    <div className="card p-4 flex justify-content-around">
      <div className="">
        <label htmlFor="integeronly" className="font-bold block mb-2">
          Enter Opening Amount
        </label>
        <div className="p-inputgroup flex-1">
          <span className="p-inputgroup-addon">₹</span>
          <InputNumber
            placeholder="Price"
            value={openingAmount}
            onValueChange={(e: InputNumberValueChangeEvent) =>
              setOpeningAmount(e.value || 0)
            }
          />
        </div>
      </div>
      <div className="flex justify-content-center">
        <FloatLabel>
          <InputTextarea
            id="description"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={5}
            cols={30}
          />
          <label htmlFor="description">Enter your data to format</label>
        </FloatLabel>
      </div>
      <div className="align-content-end">
        <Button label="Submit" onClick={() => getUserInput(openingAmount, value)} raised />
      </div>
    </div>
  );
};

export default UserInput;
