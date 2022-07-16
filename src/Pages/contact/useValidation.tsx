import React from 'react';
import { playAnimation } from '@/Styles/Animations';
import { useSearchParams } from 'react-router-dom';

export default function useValidation() {
  const [data, setData] = React.useState<IContactMe>({ name: '', email: '', });
  const [error, setError] = React.useState<Partial<IContactMe>>({});
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

    setError({
      ...error,
      [event.target.name]: ''
    })
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

    if (Object.keys(validateContact(data)).length === 0) {
      playAnimation(event); 
      setTimeout(() => setLoading(true), 600);
      action();
      
    }else setError(validateContact(data));
  }

  return {
    data, error, sended, 
    loading, searchParams, 
    handleChange, handleSubmit
  }
}

function validateContact(obj: IContactMe): Partial<IContactMe> {
  const errors: Partial<IContactMe> = {};

  if (!obj.name) {
    errors.name = 'Required';
  }
  
  if (!obj.email) {
    errors.email = 'Required';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(obj.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (obj.message) {
    if (obj.message.length > 400) {
      errors.message = 'Too Long';
    }
  }

  return errors;
}