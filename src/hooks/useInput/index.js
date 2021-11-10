import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    resetValue: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
}

export default useInput;
