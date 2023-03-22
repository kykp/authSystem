import express from "express"; 

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", async (req, res) => {
  try {
    console.log('Hello there')
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("Server runing in PORT", PORT));
