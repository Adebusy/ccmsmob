import { Switch, useState } from "react";

function Switch(props) {
  const [isNew, setIsNew] = useState(false);
  return (
    <Switch
      value={isNew}
      onValueChange={(newValue) => setIsNew(newValue)}
    ></Switch>
  );
}

export default Switch;
