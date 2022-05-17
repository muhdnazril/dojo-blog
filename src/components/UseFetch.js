import {useState, useEffect } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
      const abortCont = new AbortController();

        setTimeout(()=>{
           fetch(url, { signal : abortCont.signal})
           .then(res =>{
              return res.json();
           })
           .then(data =>{
              setData(data); 
              setIsPending(false)
              setError(null)
           })
           .catch(err=>{
              setError('failed to reach');
              setIsPending(false)
           })
        }, 1000 )//1000 loading time as splash
        return() => abortCont.abort();
     },[url]);

    return {data, isPending, error};
}
 
export default UseFetch;