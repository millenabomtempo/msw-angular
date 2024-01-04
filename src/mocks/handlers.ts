import { http,  HttpResponse } from 'msw'

const Users = [
  http.get('http://localhost:4200/api/users', () => {
    return HttpResponse.json(Array.from({length: 10}, (_, index) => (
      {
        id: index + 1,
        nome: `Usuário ${index + 1}`,
      }
    )))
  }),
]


export const handlers = [
  ...Users
]
