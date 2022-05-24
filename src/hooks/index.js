import router from '@/router'

export const goBack = () => {
  router.go(-1)
}

export const getStorage = (key) => {
  const value = sessionStorage.getItem(key)
  return value ? JSON.stringify(value) : ''
}

export const setStorage = (key, value) => {
  value = JSON.stringify(value) || ''
  return sessionStorage.setItem(key, value)
}

export const removeStorage = (...rest) => {
  rest.forEach((key) => sessionStorage.removeItem(key))
}
