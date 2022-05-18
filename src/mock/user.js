import { Random } from 'mockjs'
import qs from 'qs'
import {success,error,getToken} from './utils'

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({body}) => {
      const { username,password } = qs.parse(body)
      console.log(username,password ,'username,password ')
      if(username==='admin' && password==='123456'){
        return success({
          token: Random.guid(),
        })
      }
      return error('账号密码错误')
    }
  },

  {
    url: '/mock/user/userInfo',
    method: 'post',
    response: async ({ body }) => {
      try{
        await getToken(body)
        return success({
          name: 'Zbano',
        })
      }catch(err){
        return  error(err)
      }
     
    },
  },
]
