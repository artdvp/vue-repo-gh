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

function fetchGithubSubscribers (path, page) {
  let url = ''
  if (page === 1) {
    url = `https://api.github.com/repos/${path}/subscribers`
  } else {
    url = `https://api.github.com/repos/${path}/subscribers?page=${page}`
  }

  let result = API.get(url)
  return result
}

export {
  fetchGithubRepo,
  fetchGithubSubscribers
}
