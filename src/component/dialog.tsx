import React, { useEffect, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog, openDialog, setTextFieldValue } from '@/store/dialogSlice';

import Styles from "../app/page.module.css"

const Dialog: React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { isDialogOpen, textFieldValue } = useSelector((state: RootState) => state.dialog);

  useEffect(() => {
    if (isDialogOpen) {
      document.addEventListener('keydown', handleGlobalKeyDown);
      return () => {
        document.removeEventListener('keydown', handleGlobalKeyDown);
      };
    }
  }, [isDialogOpen]);

  const handleGlobalKeyDown = (e: KeyboardEvent) => {
    
    if (e.key === 'Escape') {
      dispatch(closeDialog())
    }
  };


  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextFieldValue(e.target.value));
  };

  const handleCloseDialog = () => {
    dispatch(closeDialog())
  };
  useHotkeys(
    'ctrl+shift+f2',
    () => {
      dispatch(openDialog())
    }
  );

  useHotkeys(
    'ctrl+shift+f3',
    (e) => {
      e.preventDefault(); 
      inputRef.current?.focus();
    }
  );

  return (
    <>
      {isDialogOpen ? (
          <div className={Styles.dialog}>
            <label>
              Text Field:<br/>
              Please press ctrl+shift+f3 for focus.
              <div style={{margin: 10}}><input type="text"  onChange={handleTextFieldChange} ref={inputRef}/></div>
            </label>
            <button onClick={handleCloseDialog}>Close</button>
            <div>State value from redux : {textFieldValue}</div>
          </div>

      ) : <p>Please press ctrl+shift+f2</p> }

    </>
  );
};

export default Dialog;