const app = require("./app");
const mailCtrl = require("./controllers");

app.get("/", (req, res) => {
  res.json({
    message: "Mailer service is ready.",
  });
});

app.post("/send", mailCtrl.sendMail);

app.listen(3001, () => {
  console.log("servidor corriendo en puerto 3001");
});
