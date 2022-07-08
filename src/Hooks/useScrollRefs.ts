import React from 'react';

export function useScrollRefs() {
  const scrollRef = React.useRef<HTMLElement[]>([]);
  
  function scroll(index: number): void {
    scrollRef.current[index].scrollIntoView();
  }

  function addToRefs(element: React.ElementRef<any>): void  {
    if (element && !scrollRef.current.includes(element as HTMLElement))  {
      scrollRef.current.push(element as HTMLElement);
    }
  }


  return { scroll, addToRefs}

}