import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTliNGM4YjgwOWJlNWE4N2E0YTcyYjM3MzViNmI5NyIsIm5iZiI6MTc0NTY2MjIxOC45MjQsInN1YiI6IjY4MGNiMTBhZWUxOTk3YmVhZjZlMmI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKELjgGjDm7yIwKeEcJ7N62zaoFB8lQy85w7kNkcCVs'
      }
})

export default instance