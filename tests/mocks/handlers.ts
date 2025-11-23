import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/posts', () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'Mocked Post 1',
        body: 'This is a mocked post body.',
        userId: 1,
      },
      {
        id: 2,
        title: 'Mocked Post 2',
        body: 'This is another mocked post body.',
        userId: 2,
      },
    ])
  }),
]
