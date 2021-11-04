import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const ToastNotification: React.FunctionComponent = () => {
  const toastContent = () => (
    <p>
      🍰 Buy me a cake?
    </p>
  );

  useEffect(() => {
    toast(
      toastContent(), {
        onClick: () => window.open("https://www.buymeacoffee.com/hwoodhandshakes"),
      }
    );
  });

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        limit={1}
        draggablePercent={70}
      />
    </div>
  );
}
