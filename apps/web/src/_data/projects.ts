import { PROJECT_TYPES } from './projectTypes'
import { USERS } from './users'
import { CLIENTS } from './clients'
import { CLIENT_EMPLOYEES } from './clientEmployees'

export const PROJECTS: Project[] = [
  {
    id: '1',
    projectType: PROJECT_TYPES[0],
    dockerNumber: 'poke0001',
    projectName: 'Pikachu Campaign',
    team: [USERS[0], USERS[1], USERS[3], USERS[4]],
    client: CLIENTS[1],
    clientTeam: [CLIENT_EMPLOYEES[0]],
    startDate: '2023-06-22T05:48:49.490Z',
    endDate: '2023-07-22T05:48:49.490Z',
  },
]
