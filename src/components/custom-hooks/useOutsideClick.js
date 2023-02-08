
import { useState, useRef, useEffect } from 'react';
//kreiremo custom hook koja pokazuje/sakriva box

//Inicijalno, postavljamo da je vrednost false

const useOutsideClick = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleOutsideClick = () => {
    if (ref.current) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return [ref, isVisible, setIsVisible];
};

export default useOutsideClick;

