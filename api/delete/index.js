const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  const todoItem = await ctx.request.body.todoItem
  const todosDeleted = await deleteTodo(todoItem)
  ctx.body = todosDeleted + `All the Todo's with the name "${todoItem}" were deleted`
})

async function deleteTodo(todoItem) {
  try {
    const todos = await pool.query(`DELETE FROM todo where todoItem like '${todoItem}';`)
    return todos
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
