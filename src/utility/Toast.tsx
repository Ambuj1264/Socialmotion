import React from 'react';
import { toast } from 'react-hot-toast';

// Function to display success toast
const successToast = (message:string) => {
  toast.success(message, {
    duration: 4000, // Duration of the toast
    position: 'top-center', // Position of the toast
    
  });
};

// Function to display error toast
const errorToast = (message:string) => {
  toast.error(message, {
    duration: 4000, // Duration of the toast
    position: 'top-center', // Position of the toast
   
  });
};

export { successToast, errorToast };
