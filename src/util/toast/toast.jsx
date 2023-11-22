import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import './toast.css';

const ToastDemo = ({title, despription,}) => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    handleOpen();
    return () => clearTimeout(timerRef.current);
  }, []);

  const  handleOpen = () => {
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
        setOpen(true);
        }, 100);
  }

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">{title}</Toast.Title>
        <Toast.Description asChild>
          <p>{despription}</p>
        </Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button className="Button small green">Okay</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

export default ToastDemo;

