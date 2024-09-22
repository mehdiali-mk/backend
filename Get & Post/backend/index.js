const express = require("express");
const app = express();
const port = 8088;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/loginform", (request, response) => {
  let { userText, userPassword } = request.query;
  response.send(
    `<h1>Welcome ${userText}, your password is saved.<br>by GET Method</h1>`
  );
});

app.post("/loginform", (request, response) => {
  let { userText, userPassword } = request.body;
  response.send(
    `<h1>Welcome ${userText}, your password is saved.<br>by POST Method</h1>`
  );
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
