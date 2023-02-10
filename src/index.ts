// import "reflect-metadata";
// import { createConnection, useContainer } from "typeorm";
// import * as express from "express";
// const express = require("express");
// import * as bodyParser from "body-parser";
// const bodyParser = require("body-parser");
// import { Request, Response } from "express";
// import { Routes } from "./Contrainte/Config/Routes/AppRoutes";
// import { Container } from "typedi";
// import { AppConfig } from "./Contrainte/Config/AppConfig/AppConfig";
// const mysql = require("mysql");
// const MySQLEvents = require("@rodrigogs/mysql-events");
// const EventEmitter = require("events");
// const Stream = new EventEmitter();
// useContainer(Container);
// createConnection({
//   type: "mysql",
//   host: "127.0.0.1",
//   port: 3306,
//   username: "root",
//   password: "atwasoad21",
//   database: "localisation",
//   synchronize: true,
//   logging: false,
//   migrationsRun: true,
//   entities: ["src/Donnees/DomainObject/*.ts"],
//   migrations: ["src/Contrainte/Config/Migration/**/*.{ts,js}"],
//   subscribers: ["src/Contrainte/Config/Subscriber/**/*.{ts,js}"],
//   cli: {
//     entitiesDir: "src/Donnees/DomainObject",
//     migrationsDir: "src/Contrainte/Config/Migration",
//     subscribersDir: "src/Contrainte/Config/Subscriber",
//   },
// })
//   .then(async () => {
//     const app = express();
//     app.use(AppConfig.allowCrossDomain);
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.get("/getData", function (request, response) {
//       response.writeHead(200, {
//         "Content-Type": "text/event-stream",
//         "Cache-Control": "no-cache",
//         Connexion: "keep-alive",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
//         header: "Access-Control-Allow-Headers",
//       });
//       Stream.on("push", function (event, data) {
//         response.write(
//           "event: " +
//             String(event) +
//             "\n" +
//             "data: " +
//             JSON.stringify(data) +
//             "\n\n"
//         );
//       });
//     });
//     const program = async () => {
//       const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "atwasoad21",
//       });

//       const instance = new MySQLEvents(connection, {
//         startAtEnd: true,
//         excludedSchemas: {
//           mysql: true,
//         },
//       });

//       await instance.start();

//       instance.addTrigger({
//         name: "*",
//         expression: "localisation",
//         statement: MySQLEvents.STATEMENTS.INSERT,
//         onEvent: (event) => {
//           Stream.emit("push", "message", { msg: event.affectedRows });

//           console.log(event);
//         },
//       });

//       instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
//       instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
//     };

//     program()
//       .then(() => console.log("Waiting for database events..."))
//       .catch(console.error);

//     Routes.forEach((route) => {
//       (app as any)[route["method"]](
//         route["route"],
//         (req: Request, res: Response, next: Function) => {
//           const result = new (route["controller"] as any)()
//             [route["action"]](req, res, next)
//             .then(() => next)
//             .catch((err) => next(err));
//         }
//       );
//     });

//     app.listen(3000);
//     console.log(
//       "Express server has started on port 3000. Open http://localhost:3000/users to see results"
//     );
//   })
//   .catch((error) => console.log(error));
