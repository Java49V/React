import React, { useEffect } from "react";
import { JsxAttribute } from "typescript";
import { Alert } from "./Alert";
type InputProps = {
  type: string;
  inputProcess: (value: string) => string;
  placeholder?: string;
  styleProps?: any;
};
export const Input: React.FC<InputProps> = ({
  inputProcess,
  placeholder,
  styleProps,
}) => {
  let inputElement: HTMLInputElement | null;
  const [inputId] = React.useState(Math.round(Math.random() * 100000000) + "");
  useEffect(() => {
    inputElement = document.getElementById(inputId) as HTMLInputElement;
  });
  const [message, setMessage] = React.useState("");
  function processGo(): void {
    const messageRet: string = inputProcess(inputElement!.value);
    if (messageRet == "") {
      inputElement!.value = "";
    } else {
      setMessage(messageRet);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      inputElement!.value = "";
    }
  }
  return (
    <div style={{ display: "flow", textAlign: "center", fontSize: "5em" }}>
      <input id={inputId} placeholder={placeholder} style={styleProps} />
      <button onClick={processGo}>Enter</button>
      {message && <Alert type="error" message={message} />}
    </div>
  );
};
