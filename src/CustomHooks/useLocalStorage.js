import { useEffect, useState } from "react";

export function useLocalSorageState(initialState, key) {
  //dont call functions in useState -> instead pass a pass a callback function
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
