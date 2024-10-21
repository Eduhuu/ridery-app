import app from "./app/app.js"

const PORT = app.get("port")

app.listen(PORT, () => {
    console.log(`---- Server running at port ${PORT} ----`)
})