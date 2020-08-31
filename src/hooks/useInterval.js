import { useEffect, useState, useRef } from "react"

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  const [live, setLive] = useState(true);
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null && live) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
      if(!live){
        setLive(true);
      }
    }, [delay,live]);
    return {setLive};
  };
  export default useInterval