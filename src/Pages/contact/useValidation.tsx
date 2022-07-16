import React from 'react';
import { playAnimation } from '@/Styles/Animations';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@/Hooks/useDebounce';

export default function useValidation() {
  const [data, setData] = React.useState<IContactMe>({ name: '', email: '', });
  const [error, setError] = React.useState<IContactMeErr>({});
  const debounceError = useDebounce<IContactMeErr>(error);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sended, setSended] = React.useState<boolean>(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void {

    setData({
      ...data,
      [event.target.name]: event.target.value
    });
    
    setError(validateContact(data));
  }

  function handleSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();

    const action = async () => {
      const res: Response = await fetch('https://formsubmit.co/ajax/02b4fc6f6a8fd5c34d6ae644babfa5eb', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const status = res.status;
      const resData: {success: string} = await res.json();

      if (status === 200 && resData.success === 'true') {
        setSearchParams({send: '1'});
        setSended(true);
      }
  }
    // Check if no errors are return
    if (Object.keys(validateContact(data)).length === 0) {
      playAnimation(event); 
      setTimeout(() => setLoading(true), 600);
      action();
      
    }else setError(validateContact(data));
  }

  return {
    data, debounceError, sended, 
    loading, searchParams, 
    handleChange, handleSubmit
  }
}

function validateContact(obj: IContactMe): IContactMeErr {
  const errors: IContactMeErr = {};

  if (!obj.name || obj.name === '') {
    errors.name = 'Name Is Required';
  }
  
  if (!obj.email) {
    errors.email = 'E-mail Is Required';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(obj.email)) {
    errors.email = 'Email Is Invalid';
  }
  
  if (obj.message) {
    if (obj.message.length > 400) {
      errors.message = 'Message Is Too Long';
    }
  }

  return errors
}