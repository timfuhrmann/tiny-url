const http = require("http");
const app = require("./server/index");

const port = parseInt(process.env.PORT || 8080, 10);

app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server started listening at port ${port}`);
});
