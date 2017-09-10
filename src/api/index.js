import axios from 'axios'

const API = axios.create({
  headers: {
    Authorization: `token ad4dee275850d6e1be684860192da4fbf9b2ee82`
  }
})

function fetchGithubRepo (path) {
  let result = API.get(`https://api.github.com/repos/${path}`)
  return result
}

function fetchGithubSubscribers (path) {
  let result = API.get(`https://api.github.com/repos/${path}/subscribers`)
  return result
}

export {
  fetchGithubRepo,
  fetchGithubSubscribers
}
