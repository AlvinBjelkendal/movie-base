import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [responseData, setResponseData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      async function getData() {
        try {
          const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` }
          })
          if (response.status !== 200) {
            throw Error('Could not fetch the data from that resource')
          }
          setResponseData(response.data)
          setError(null)
          setIsLoading(false)
        } catch (error) {
          setError(error)
          console.log(error);
          setIsLoading(false)
        }
      }
      getData()
    }, 500)
  }, [url])

  return { responseData, error, isLoading, setResponseData }
}

export default useFetch