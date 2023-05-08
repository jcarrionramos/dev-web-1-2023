import express from "express";

const router = express.Router();

router.get("/1", (req, res) => {
  const title = "Hola Usuario " + req.query.name;
  res.send(title);
});

router.get("/2", (req, res) => {
  console.log(req.query);
  res.send(`<h1>Hola Usuario 2 ${req.query.name}</h1>`);
});

router.get("/3", (req, res) => {
  const html = `<ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>`;

  res.send(html);
});

router.get("/4", (req, res) => {
  const list = ["Coffeeeeee", "Tea", "Milk"];
  const html = `<ul>
                  <li>${list[0]}</li>
                  <li>${list[1]}</li>
                  <li>${list[2]}</li>
                </ul>`;

  res.send(html);
});

router.get("/5", (req, res) => {
  const list = ["Coffeeeeee", "Tea", "Milk", "Banana", "Apple"];
  let html = "<ul>";

  list.forEach((current) => {
    html = html + `<li>${current}</li>`;
  });

  html = html + "</ul>";

  res.send(html);
});

export default router;
