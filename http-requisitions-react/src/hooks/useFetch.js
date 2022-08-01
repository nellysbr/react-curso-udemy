import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setdata] = useState(null);

    //refatorando o post

    const [config, setconfig] = useState(null);
    const [method, setmethod] = useState(null);
    const [callFetch, setcallFetch] = useState(false);

    //loading

    const [loading, setloading] = useState(false);

    //tratando erros

    const [error, seterror] = useState(null);

    // desafio - criando um delete

    const [itemID, setitemID] = useState(null);
    
    const httpConfig = (data, method) => {
        if (method === "POST"){
            setconfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            setmethod(method);
        } else if (method === "DELETE"){
            setconfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setmethod(method);
            setitemID(data);

        }
    };

    useEffect(() => {
        
        const fetchData = async () => {

        

        setloading(true); //loading

        try {
            const response = await fetch(url);
            const json = await response.json();
            setdata(json);

        } catch (error) {
            console.log(error.message);
            seterror("Houve Algum erro ao carregar os dados!");
        }


        setloading(false); //loading

        };

        fetchData();

    },[url, callFetch]);

    //refatorando o post

    useEffect(() => {

   
        const httpRequest = async () => {
         if (method === "POST") {

            let fetchOptions = [url, config];

            const res = await fetch(...fetchOptions);

            const json = await res.json();
    
            setcallFetch(json);

        } else if (method === "DELETE") {
            const deleteUrl = `${url}/${itemID}`;

            const res = await fetch(deleteUrl, config);

            const json = await res.json();

            setcallFetch(json);
        }
      };

      httpRequest();
    
      
    }, [config, method, url])
    

    return { data, httpConfig, loading, error };
};