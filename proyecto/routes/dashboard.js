import express from "express";

const database = [
  {
    id: 1,
    name: "Javier",
    lastname: "Carrión",
    list: [
      {
        name: "Hacer clases",
        priority: "Alta",
      },
      {
        name: "Programar",
        priority: "Baja",
      },
    ],
  },
  {
    id: 2,
    name: "Jonathan",
    lastname: "Frez",
    list: [
      {
        name: "Coordinar",
        priority: "Alta",
      },
      {
        name: "Hacer clases",
        priority: "Alta",
      },
    ],
  },
];

const router = express.Router();

router.get("/", (req, res) => {
  let blocked = false;
  const id = parseInt(req.query.id);
  const user = database.find((current) => current.id === id);

  if (id === 2) {
    blocked = true;
  }

  res.render("src/main", {
    user: user,
    blocked: blocked
  });
});

router.get("/with_navbar", (req, res) => {
  res.render("src/main", { layout: "index_navbar" });
});

export default router;
