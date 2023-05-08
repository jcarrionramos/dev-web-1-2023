import { app } from "./app.js";
import user from "./routes/user.js";
import dashboard from "./routes/dashboard.js";

const port = 3000;

app.get("/", (req, res) => {
  res.send("Server runing");
});

app.use("/user", user);
app.use("/dashboard", dashboard);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
