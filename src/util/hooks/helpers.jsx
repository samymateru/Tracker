import { useState, useEffect } from "react";
export const useDeleteCookie = (cookieName) => {
    const [cookieValue, setCookieValue] = useState(null);
  
    const deleteCookie = () => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      setCookieValue(null);
    };
  
    useEffect(() => {
      const name = cookieName + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
  
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
          setCookieValue(cookie.substring(name.length, cookie.length));
          return;
        }
      }
  
      
      setCookieValue(null);
    }, [cookieName]); 
  
    return { value: cookieValue, deleteCookie };
  }
  