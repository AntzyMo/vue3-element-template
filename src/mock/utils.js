export const success = (data) => {
  return {
    code: 200,
    msg: 'success',
    data,
  }
}

export const error = (msg) => {
  return {
    code: 504,
    msg,
    data: null,
  }
}
