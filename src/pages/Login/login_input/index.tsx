interface User {
  email?: string
  pwd?: string
}

type CheckUserAvailableType = (
  users: User[],
  email: string,
  pwd: string,
) => User | undefined

export const CheckUserAvailable: CheckUserAvailableType = (users, email, pwd) => {
  const result = users.find(
    user => user?.email?.toLowerCase() === email.toLowerCase() && user?.pwd === pwd,
  )
  return result
}
