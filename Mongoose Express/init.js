const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

const chats = [
  {
    from: "Mehdiali",
    to: "Ayaan",
    message: "Have you done with your DBMS Mini Project...?",
    createdAt: new Date(),
  },
  {
    from: "Aman",
    to: "Meet",
    message: "Did you attend the lecture on Data Structures today?",
    createdAt: new Date(),
  },
  {
    from: "Het",
    to: "Rushikesh",
    message: "Don't forget to submit the assignment before midnight.",
    createdAt: new Date(),
  },
  {
    from: "Owais",
    to: "Shlok",
    message: "Are you joining the study group for the DBMS exam?",
    createdAt: new Date(),
  },
  {
    from: "Shlok",
    to: "Aman",
    message: "Let's prepare together for the Operating Systems test.",
    createdAt: new Date(),
  },
  {
    from: "Meet",
    to: "Het",
    message: "Do you have notes for yesterday's Algorithms lecture?",
    createdAt: new Date(),
  },
  {
    from: "Rushikesh",
    to: "Ayaan",
    message: "I'm struggling with the Networks assignment. Can you help?",
    createdAt: new Date(),
  },
  {
    from: "Ayaan",
    to: "Owais",
    message: "Have you registered for the placement drive?",
    createdAt: new Date(),
  },
  {
    from: "Mehdiali",
    to: "Aman",
    message: "Can we meet tomorrow to finalize our project?",
    createdAt: new Date(),
  },
  {
    from: "Aman",
    to: "Het",
    message: "Don't forget the team meeting at 4 PM for project discussion.",
    createdAt: new Date(),
  },
  {
    from: "Shlok",
    to: "Rushikesh",
    message: "Have you completed the SQL practice problems?",
    createdAt: new Date(),
  },
  {
    from: "Owais",
    to: "Meet",
    message: "Let's finalize our presentation slides before next class.",
    createdAt: new Date(),
  },
  {
    from: "Het",
    to: "Ayaan",
    message: "Any update on the project report submission deadline?",
    createdAt: new Date(),
  },
  {
    from: "Rushikesh",
    to: "Shlok",
    message: "The lab manual is due tomorrow. Have you finished yours?",
    createdAt: new Date(),
  },
  {
    from: "Meet",
    to: "Aman",
    message: "Can we discuss the DBMS ER diagram during lunch?",
    createdAt: new Date(),
  },
  {
    from: "Ayaan",
    to: "Het",
    message: "Let's work on the group project after today's class.",
    createdAt: new Date(),
  },
  {
    from: "Owais",
    to: "Mehdiali",
    message: "Are you joining the coding competition this weekend?",
    createdAt: new Date(),
  },
  {
    from: "Shlok",
    to: "Meet",
    message: "What topic are you choosing for the Machine Learning project?",
    createdAt: new Date(),
  },
  {
    from: "Rushikesh",
    to: "Ayaan",
    message: "Can you send me the link to the DBMS tutorial you mentioned?",
    createdAt: new Date(),
  },
  {
    from: "Aman",
    to: "Shlok",
    message: "Have you started working on the Networks simulation yet?",
    createdAt: new Date(),
  },
];

Chat.insertMany(chats);
