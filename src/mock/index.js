import {mock} from 'mockjs'
import user from './user'

const mocks=[...user]

mocks.forEach(({url,method,response})=>mock(url,method,response))

