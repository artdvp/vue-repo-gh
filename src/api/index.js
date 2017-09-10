import axios from 'axios'

const API = axios.create({
  headers: {
    Authorization: `token 90456cfeeab66ef3f13ccac1bc919ddc98341333`
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
