/* eslint-disable no-console */
const express = require(`express`)
const path = require(`path`)

const app = express()

// mount static file directory

app.use(
  `/modules`,
  express.static(path.join(__dirname, `/../modules`), {
    extensions: [`js`],
    setHeaders(res, pathname, stat) {
      res.set(`Content-Type`, `application/javascript`)
    },
  }),
)
app.use(`/`, express.static(path.join(__dirname, `/../public`)))

// serve index.html
app.get(`*`, (req, res) => {
  // express.static.mime.define({ 'application/javascript': [`js`] })
  res.sendFile(path.join(__dirname, `/../public/index.html`))
})

app.listen(8080, () => {
  console.log(`App running on port 8080`)
})
