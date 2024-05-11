import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from 'primereact/button';

const UserInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="card">
      <div>
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
      <div>
      <Button label="Submit" onClick={() => console.log(value)} raised />
      </div>
      
    </div>
  );
};

export default UserInput;
