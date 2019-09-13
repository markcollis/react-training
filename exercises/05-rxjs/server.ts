import Koa = require('koa')
import bodyParser = require('koa-bodyparser')
import Router = require('koa-router')

const PORT = 3001

let nextId = 1
let users: any[] = []

const app = new Koa()
app.use(bodyParser())

const router = new Router()

router.get('/users', (ctx) => {
  ctx.body = users
})

router.post('/users', (ctx) => {
  const { firstName, lastName } = ctx.request.body
  const user = {
    id: nextId++,
    firstName,
    lastName
  }

  users.push(user)
  ctx.body = user
})

router.get('/users/:id', (ctx) => {
  const { id } = ctx.params
  const user = users.find((u) => u.id === id)
  if (user) {
    ctx.body = user
  }
})

router.delete('/users/:id', (ctx) => {
  const { id } = ctx.params
  const user = users.find((u) => u.id === id)
  if (user) {
    users = users.filter((u) => u.id !== id)
    ctx.body = user
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`))
