const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  item = await showAll()
  ctx.body = item
})

async function showAll() {
  try {
    const itemData = await pool.query(`SELECT * FROM todo`)
    return itemData
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
