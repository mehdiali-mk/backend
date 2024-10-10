const express = require("express");
const port = 8088;
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((response) => {
    console.log("Database Successfully Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Default Route
app.get("/", async (request, response) => {
  let chats = await Chat.find();
  response.render("index.ejs", { chats });
});

// Home Route
app.get("/chats", async (request, response) => {
  let chats = await Chat.find();
  response.render("index.ejs", { chats });
});

// New Route
app.get("/chats/new", (request, response) => {
  response.render("new.ejs");
});

// Add New Route
app.post("/chats", (request, response) => {
  let { from, to, message } = request.body;
  const chat = new Chat({
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });

  chat
    .save()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });

  response.redirect("/chats");
});

// Edit Route
app.get("/chat/:id/edit", async (request, response) => {
  const { id } = request.params;
  const chat = await Chat.findById(id);
  response.render("edit.ejs", { chat });
});

// Update Route
app.put("/chat/:id", async (request, response) => {
  const { id } = request.params;
  const { message: newMessage } = request.body;
  const updatedMessage = await Chat.findByIdAndUpdate(
    id,
    { message: newMessage },
    { runValidators: true, new: true }
  );

  console.log(updatedMessage);
  response.redirect("/chats");
});

// Delete Route
app.delete("/chat/:id", async (request, response) => {
  const { id } = request.params;
  const deletedMessage = await Chat.findByIdAndDelete(id);
  console.log(deletedMessage);
  response.redirect("/chats");
});

app.listen(port, () => {
  console.log("Listing on port " + port);
});
