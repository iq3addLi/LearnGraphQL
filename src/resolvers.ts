/* resolvers.ts */

import { users } from "./data"

export default class Resolvers {
  users = async () => {
    return users
  }
  user = async (param: { id: number }, context: string) => {
    const user = users.find( (user) => user.id == param.id )
    return user
  }
}