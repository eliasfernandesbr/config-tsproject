import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "eliasfernandescoutinho@gmail.com",
    password: "Dante4090",
    techs: [
        "Node.js",
         "React.js",
          "React Native",
          {title: 'Javascript', experience: 100}
        ],
  });

  console.log(user)

  return response.json({ message: "Hello World" });
}
