const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  const todoItem = await ctx.request.body.todoItem
  const todoDateAdded = await ctx.request.body.todoDateAdded
  const todoStatus = await ctx.request.body.todoStatus
  const todoDateBy = await ctx.request.body.todoDateBy
  const newTodoP = await insertTodo(todoItem, todoDateAdded, todoStatus, todoDateBy)
  ctx.body = newTodoP
})

async function insertTodo(todoItem, todoDateAdded, todoStatus, todoDateBy) {
  try {
    // const newTodo = await pool.query(`insert into todo values(null ,'teste', '2000-12-31', true, '2020-12-31')`)
    const newTodo = await pool.query(`insert into todo values(null, '${todoItem}', '${todoDateAdded}', ${todoStatus}, '${todoDateBy}');`)
    return newTodo
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
