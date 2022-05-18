import { defineStore } from 'pinia'
import {getStorage} from '@/hooks'
import { login as loginApi ,getUserInfo } from '@/api/login'


export default defineStore({
  id: 'user',
  state: () => ({
    token: getStorage('token'),
    userInfo:getStorage('userInfo')||{}
  }),
  actions: {
    async login(form) {
      try{
        const {token} = await loginApi(form)
        console.log(token,'token')
        this.token=token
        const res=await getUserInfo({token})
        this.userInfo=res
      }catch(err){
        return Promise.reject(err)
      }
    },
  },
})
