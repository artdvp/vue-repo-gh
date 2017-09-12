import axios from 'axios'

const API = axios.create({
  headers: {
    Authorization: `token 81a8c89c50901b7813f76bf20fb466d79757c205`
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
