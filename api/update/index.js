const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  const todoItem = await ctx.request.body.todoItem
  const todoStatus = await ctx.request.body.todoStatus
  const updatedTodoP = await updateTodo(todoItem, todoStatus)
  ctx.body = updatedTodoP
})

async function updateTodo(todoItem, todoStatus) {
  try {
    const updatedTodo = await pool.query(`update todo set todoItem = '${todoItem}', todoStatus = ${todoStatus} where todoItem like "New Todo Item";`)
    return updatedTodo
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
