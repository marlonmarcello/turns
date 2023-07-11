import { CLIENTS } from './clients'
import { ROLES } from './roles'

export const CLIENT_EMPLOYEES: ClientEmployee[] = [
  {
    id: '1',
    client: CLIENTS[1],
    name: 'Bulbasaur',
    role: ROLES[6],
    email: 'bulbasaur@pokemon.com',
  },
  {
    id: '2',
    client: CLIENTS[1],
    name: 'Squirtle',
    role: ROLES[6],
    email: 'squirtle@pokemon.com',
  },
  {
    id: '3',
    client: CLIENTS[1],
    name: 'Charmander',
    role: ROLES[6],
    email: 'charmander@pokemon.com',
  },
  {
    id: '4',
    client: CLIENTS[0],
    name: 'Mario',
    role: ROLES[6],
    email: 'mario@nintendo.com',
  },
  {
    id: '5',
    client: CLIENTS[0],
    name: 'Luigi',
    role: ROLES[6],
    email: 'luigi@nintendo.com',
  },
  {
    id: '6',
    client: CLIENTS[0],
    name: 'Peach',
    role: ROLES[6],
    email: 'peach@nintendo.com',
  },
]
