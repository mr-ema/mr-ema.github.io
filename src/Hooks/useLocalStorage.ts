import React from 'react';

export function useLocalStorage<Type>(key: string, fallbackState: Type) {
  const [value, setValue] = React.useState<Type>(() => initialState() )

  function initialState(): Type {
    // check if window exits (client-side)
    if (typeof window !== 'undefined') {
      try {
        const value: Type = JSON.parse( localStorage.getItem(key) as string ) ?? fallbackState;
        return value;

      }catch(err) {
        alert('nice try');
        return fallbackState;
      }
    }else return fallbackState;
  }

  React.useEffect(() => {
    // check if window exits (client-side)
    if (typeof window !== 'undefined') {
      localStorage.setItem( key, JSON.stringify(value) );
    }
  }, [value])

  return [value, setValue] as const;
}