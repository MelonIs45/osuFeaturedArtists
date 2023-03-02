import * as express from "express";
import * as main from "../index";
import fs from "fs";

export const register = (app: express.Application): void => {
    app.get("/", (req, res) => {
        const plays: any = {};
        const MAX = 420;
        fs.readFile("C:\\Users\\ryanp\\Documents\\CS\\Personal\\GetOsuPlays\\js\\final.json", "utf-8", async (err, playData) => {
            const parsedPlayData = JSON.parse(playData);
            res.render("index", {plays: JSON.stringify(parsedPlayData), max: MAX}); // Render the home page
        });
    });

    function convertModsToString(mods: any) {
        let finalMods = mods;
        let finalString = "";

        if (finalMods - 1024 >= 0) {
            finalString += "FL";
            finalMods -= 1024;
        }
        if (finalMods - 512 >= 0) {
            finalString += "NC";
            finalMods -= 512;
        }
        if (finalMods - 256 >= 0) {
            finalString += "HT";
            finalMods -= 256;
        }
        if (finalMods - 128 >= 0) {
            finalString += "RL";
            finalMods -= 128;
        }
        if (finalMods - 64 >= 0) {
            finalString += "DT";
            finalMods -= 64;
        }
        if (finalMods - 32 >= 0) {
            finalString += "SD";
            finalMods -= 32;
        }
        if (finalMods - 16 >= 0) {
            finalString += "HR";
            finalMods -= 16;
        }
        if (finalMods - 8 >= 0) {
            finalString += "HD";
            finalMods -= 8;
        }
        if (finalMods - 2 >= 0) {
            finalString += "EZ";
            finalMods -= 2;
        }
        if (finalMods - 1 >= 0) {
            finalString += "NF";
            finalMods -= 1;
        }

        if (finalString.includes("HRHD")) {
            finalString = finalString.replace("HRHD", "HDHR");
        }
        if (finalString.includes("DTHD")) {
            finalString = finalString.replace("DTHD", "HDDT");
        }

        return finalString;
    }

    async function loadToken(secret: any) {
        const response = await getToken(secret)
        .then(response => {
            return response.json();
        });
        return response;
    }

    async function getToken(secret: any) {
        const response = await fetch("https://osu.ppy.sh/oauth/token", {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "client_id": 5414,
            "client_secret": secret,
            "scope": "public"
        })
        })
        return response;
    }

    async function getUser(secret: any, id: any) {
        const data = fetch(`https://osu.ppy.sh/api/v2/users/${id}/osu`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${secret}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
        return data;
    }


    async function getMap(token: any, id: any) {
        const data = fetch(`https://osu.ppy.sh/api/v2/beatmaps/${id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });

        return data;
    }
}

// const parsedPlayData = JSON.parse(playData);

// let secret = await loadToken("YOURE CLIENT TOKEN IF YOU WANT TO ACTUALLY TRY CLEANING THIS UP (tyty if you do :>)");
// secret = secret.access_token;

// for (let i = 0; i < MAX; i++) {
//     const currentPlayUserId = parsedPlayData[`${i}`].user;
//     const currentPlayBeatmapId = parsedPlayData[`${i}`].beatmap_id;
//     const currentPlayScore = parsedPlayData[`${i}`].score;
//     const currentPlayPp = parsedPlayData[`${i}`].pp;
//     const currentPlayMods = parsedPlayData[`${i}`].mods;
//     const currentPlayRank = parsedPlayData[`${i}`].rank;
//     const currentPlayTimestamp = parsedPlayData[`${i}`].score_time;

//     const userData = await getUser(secret, currentPlayUserId)
//     .then(userData => {
//         return userData.json();
//     });

//     const mapData = await getMap(secret, currentPlayBeatmapId)
//     .then(mapData => {
//         return mapData.json();
//     });

//     plays[`${i}`] = {
//         "username": userData.username, // Melons (only thing to make api req for)
//         "userid": currentPlayUserId, // 5339515
//         "score": currentPlayScore, // 61701677
//         "pp": currentPlayPp, // 827.796
//         "mods": convertModsToString(currentPlayMods), // HDDT
//         "rank": currentPlayRank, // SH
//         "timestamp": currentPlayTimestamp,
           // "accuracy": getPlayData.accuracy FORGOT THIS BRUHHHH
//         // beatmap data (also this)
//         "beatmapid": currentPlayBeatmapId, // 2967480
//         "beatmapsetid": mapData.beatmapset_id,
//         "artist": mapData.beatmapset.artist,
//         "title": mapData.beatmapset.title,
//         "diffname": mapData.version,
//         "stars": mapData.difficulty_rating,
//         "coverurl": mapData.beatmapset.covers["list@2x"]
//     }

//     setTimeout(() => {
//         console.log(`${i+1}/420 processed`);
//       }, 2500); // pls peppy dont murder
// }

// fs.writeFile("finalData.json", JSON.stringify(plays), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });