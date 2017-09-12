import axios from 'axios'

const API = axios.create({
  headers: {
    Authorization: `token ec9b782301c06012910a3b9bf2470f70ab29cc37`
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
