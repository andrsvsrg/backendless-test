import { useState, useEffect } from 'react'

const useDataLoader = (path) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch(path)
      const resData = await response.json()
      setData(resData)
    } catch (error) {
      console.error(`There was an error retrieving tabs - ${error.message}`)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, isLoading }
}

export default useDataLoader
