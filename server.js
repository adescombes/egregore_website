require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get("https://app.snipcart.com/api/orders", {
      headers: {
        Authorization: `Bearer ${process.env.SNIPCART_SECRET}`,
        Accept: "application/json",
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération des commandes");
  }
});

app.listen(port, () => {
  console.log(`🚀 API en ligne sur http://localhost:${port}`);
});
