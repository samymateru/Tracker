import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './confirm.css';

const Confirm = (pros) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {pros.children}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="delete-icon-dialogOverlay" />
      <Dialog.Content className="delete-icon-dialogContent">
        <Dialog.Title className="delete-icon-dialogTitle">{pros.message}</Dialog.Title>
        <div className='contol-btn'>
          <Dialog.Close asChild>
            <button className="delete-icon-cancel">CANCEL</button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className="delete-icon-okay" onClick={() => pros.onClick()}>OKAY</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="delete-device-icon" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Confirm;
