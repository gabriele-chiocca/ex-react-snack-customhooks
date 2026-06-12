import { useState } from 'react';

function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = (e) => {
    if (isOn === true) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  };

  return [isOn, toggle];
}

export default useSwitch;
