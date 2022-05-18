
export const getToken = async (body) => {
  if (body) {
    const { token } = qs.parse(body)
    if (!token) return Promise.reject('没有token')
  }
  
}

export const success=(data)=>{
  return {
    code: 200,
    msg: 'success',
    data
  }
}

export const error=(msg)=>{
  return {
    code: 504,
    msg,
    data:null,
  }
}