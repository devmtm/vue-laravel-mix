import axios from 'axios'

const instance = axios.create()

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
instance.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector(
  'meta[name="csrf-token"]'
).content

instance.interceptors.response.use(
  response => {
    const { status, data } = response

    if (status === 200) {
      console.log('success')
      console.log(data)
    }
    return response
  },
  error => {
    const { status } = error.response

    if (status === 200) {
      console.log('success')
    }

    // Show the user a 500 error
    if (status >= 500) {
      console.log(error.response.data.message)
    }

    // Handle Forbidden
    if (status === 403) {

    }

    // Handle Token Timeouts
    if (status === 419) {

    }

    return Promise.reject(error)
  }
)

export default instance
