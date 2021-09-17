import { useState, useEffect } from "react"
import axios from "axios"


export const useResource = ( url ) => {
  const [resources, setResources] = useState([])
  const baseUrl = url

  useEffect( () => {
    console.log('Here')
      axios
      .get(baseUrl)
      .then(response => setResources(response.data))
  }, [])
  
  const create = ( resource ) => {
    axios
      .post(baseUrl, resource)
      .then(response => {
        setResources([...resources, response.data])
      })

    
  }

  const service = {
    create
  }

  return [
    resources, service
  ]
}
