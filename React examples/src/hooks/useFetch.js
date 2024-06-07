import {useState, useEffect} from 'react';

const useFetch = (url, options={}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoader] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
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

        fetchData();
    }, [])

    return {data, error, loading}
}

export default useFetch;