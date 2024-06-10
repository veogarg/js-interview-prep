import {useState, useEffect} from 'react';

const useFetch = (url, options={}) => {
    const [urlState, setUrlState] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoader] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            setUrlState(url)
            try {
                const response = await fetch(url, options);
                const result = await response.json()
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setLoader(false)
            }
        }

        urlState!==url && fetchData();
    }, [urlState, url])

    return {data, error, loading}
}

export default useFetch;