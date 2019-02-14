const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('./db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  const movieName = await ctx.request.body.title
  var item = ""
  if(movieName){
    item = await show(movieName)
  }else{
    item = await showAll()
  }
  ctx.body = item
})

async function show(title) {
  try {
    const itemData = await pool.query(`SELECT * FROM movieList WHERE movieTitle  LIKE '%${title}%'`)
    return itemData[0]
  } catch (error) {
    console.log(error)
  }
}

async function showAll() {
  try {
    const itemData = await pool.query(`SELECT * FROM movieList`)
    return itemData
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
