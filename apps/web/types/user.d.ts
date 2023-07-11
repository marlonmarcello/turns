interface User {
  id: string
  name: string
  role: Role
  email: string
  projects?: Project[]
}
