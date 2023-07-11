interface Project {
  id: string
  projectType: ProjectType
  dockerNumber: string
  projectName: string
  team: User[]
  client: Client
  clientTeam: ClientEmployee[]
  startDate: string
  endDate: string
}
