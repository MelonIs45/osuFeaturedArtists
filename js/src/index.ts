import express from "express";
import path from "path";
import * as routes from "./routes";


const app = express();
const port: number = 1337;

app.set("views", path.join(__dirname, "views")); // HTML views directory
app.set("view engine", "ejs"); // HTML render engine
app.use(express.urlencoded({ extended: true })); // Request body parser
app.use(express.json()); // Request JSON parser

routes.register(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server running on http://localhost:${port}`);
});


// 1. Mrekk | Yooh - MarrianE [Collab] + HDDT | 1371pp

const url = "https://meloons.xyz/osu/files/02032023.json";

// for (let i = 0; i < jsonPlays.length; i++) {
//     let userName = "userName";
//     let artist = "artist";
//     let title = "title";
//     let diffName = "diffName";
//     let mods = "mods";
//     console.log(`${i+1}. ${userName} | ${artist} - ${title} [${diffName}] + ${mods} | ${jsonPlays[`${i}`].pp}pp`)
// }

// .then(r => r.text())
// .then(t => {
//     jsonPlays = JSON.parse(t);
//     //console.log(jsonPlays);

// })