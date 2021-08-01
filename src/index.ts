import express, { response } from "express";
import { helloWorld } from "./routes";

const app = express();

app.get('/', helloWorld);

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
