import React from 'react';

type Window = {
  width: number,
  height: number 
}

function getDimensions(): Window  {
  const { innerWidth: width, innerHeight: height } = window;
  
  return  { width, height}
}

export function useWindowsSize(): Window {
  const [dimensions, setDimensions] = React.useState<Window>( getDimensions() );

  React.useEffect(() => {
    function handleResize() {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return dimensions;
}

