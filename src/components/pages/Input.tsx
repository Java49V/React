import React, { useEffect, useRef } from 'react';

export type InputProps = {
  placeHolder: string;
  inputProcess: (value: string) => string;
};

export const Input: React.FC<InputProps> = ({ placeHolder, inputProcess }) => {
  let inputElement: HTMLInputElement | null;
  const inputId = useRef(Math.round(Math.random() * 10000000) + '');
  const [message, setMessage] = React.useState('');
  function processGo(): void {
    setMessage('');
    const messageRet = inputProcess(inputElement!.value);
    if (messageRet == '') {
      setMessage('');
    } else {
      setMessage(messageRet);
    }
  }
  useEffect(() => {
    inputElement = document.getElementById(inputId.current) as HTMLInputElement;
  });
  return (
    <div>
      <input id={inputId.current} placeholder={placeHolder} />
      <button onClick={processGo}>GO</button>
      {message && <Alert type={'error'} message={message} />}
    </div>
  );
};
type AlertProps = {
  type: 'warn' | 'info' | 'error';
  message: string;
};
export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  let backGround: 'red' | 'green' | 'yellow';
  switch (type) {
    case 'error':
      backGround = 'red';
      break;
    case 'info':
      backGround = 'green';
      break;
    case 'warn':
      backGround = 'yellow';
  }
  return (
    <p
      style={{
        backgroundColor: backGround,
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {message}
    </p>
  );
};
