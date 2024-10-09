import { useQuery } from "@tanstack/react-query"
import API from "./API"

const ARTICLE_URL = "cnn/terbaru"
// const ARTICLE_URL = "posts" //url api with pagination

const getArticles = (param) => {
  return useQuery({
    queryKey: ["get-articles", param],
    queryFn: async () => {
      let response = await API.get(ARTICLE_URL, {
        params: param,
      })

      if (response) {
        response = {
          // data: response?.data, //for url article posts
          data: response?.data?.data ? response?.data?.data?.posts : response?.data,
          total: response?.totalCount ?? 100
        }
      }

      return response
    },
  })
}

const useQueryFetch = {
  getArticles,
}

export default useQueryFetch