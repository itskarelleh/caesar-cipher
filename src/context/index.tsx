import React, { useState, useEffect, createContext } from 'react';
import { caesarCipher } from '../caesar-cipher/caesar-cipher';

const FormDataContext = createContext<any>({});

function FormDataProvider({ children }:any) {

    const [ input, setInput ] = useState<string>("");
    const [ encryption, setEncryption ] = useState<string>("");
    const [ shift, setShift ] = useState<number>(5);
    const [ isViewingResults, setIsViewingResults ] = useState<boolean>(false);
    const [ error, setError ] = useState<boolean>(false);

   //  useEffect(() => {
   //      setEncryption(caesarCipher(input, shift));
   //    }, [input, encryption, shift]);
    
      function handleInputChange(e: any): void {
        setInput(e.target.value);
        setError(false);
      } 
    
      function increment() {
        if(shift < 25) {
          setShift(prev => prev + 1);
        }
      }
    
      function decrement() {
        if(shift > 1) {
          setShift(prev => prev - 1);
        }
      }

      function submit() {
        if(input.length === 0) {
          setError(true);
        } else {
          setEncryption(caesarCipher(input, shift));
          setIsViewingResults(true);
        }
      }

      function resetContext() {
        setInput("");
        setEncryption("");
        setShift(7);
        setIsViewingResults(false);
        setError(false);
      }

      function toggleResultsView() {
        setIsViewingResults(prev => !prev);
      }


    return (
        <FormDataContext.Provider value={{ input: input, encryption: encryption, shift: shift, error: error, isViewingResults,
        handleInputChange, increment, decrement, toggleResultsView, submit, resetContext }}>
            {children}
        </FormDataContext.Provider>
    )
}

export { FormDataContext, FormDataProvider }