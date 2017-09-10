import axios from 'axios'

export function fetchGithubRepo (path) {
  let result = axios.get(`https://api.github.com/repos/${path}`, {
    headers: {
      Authorization: `token ad4dee275850d6e1be684860192da4fbf9b2ee82`
    }
  })
  return result
}
