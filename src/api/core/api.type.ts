export type mutation = {
  url: string
  params?: any
  body?: any
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

export type query = Omit<mutation, 'body' | 'method'>
