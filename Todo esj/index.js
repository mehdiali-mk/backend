const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8088;
const date = require(__dirname + "/date.js");
const day = date.getDay();
const currentDate = date.getDate();

let studyItemsArr = ["Read 10 Pages"];
let workItemsArr = ["Work on Project"];
let personalItemsArr = ["Do Exercise"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.redirect("/study");
});

app.get("/study", (request, response) => {
  response.render("todo", {
    heading: "Study",
    todoItems: studyItemsArr,
    todayDay: day,
    todayDate: currentDate,
  });
});

app.get("/work", (request, response) => {
  response.render("todo", {
    heading: "Work",
    todoItems: workItemsArr,
    todayDay: day,
    todayDate: currentDate,
  });
});
app.get("/personal", (request, response) => {
  response.render("todo", {
    heading: "Personal",
    todoItems: personalItemsArr,
    todayDay: day,
    todayDate: currentDate,
  });
});

app.post("/add", (request, response) => {
  let { txtTodoItem } = request.body;
  console.log(request.body);

  if (request.body.todoList === "Work") {
    workItemsArr.push(txtTodoItem);
    response.redirect("/work");
  } else if (request.body.todoList === "Personal") {
    personalItemsArr.push(txtTodoItem);
    response.redirect("/personal");
  } else {
    studyItemsArr.push(txtTodoItem);
    response.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT = ${PORT}`);
});
