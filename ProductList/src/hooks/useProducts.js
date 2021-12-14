import axios from 'axios'
import { useQuery } from 'react-query'

const API_URL = "http://localhost:8080"

const fetcher = () => axios.get(`${API_URL}/products`).then(res => res.data)

export function useProducts(){
  const { data, isLoading } = useQuery('products', fetcher, { cacheTime: 5000 })

  return { data, isLoading }
}