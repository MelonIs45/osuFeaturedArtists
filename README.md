# osuFeaturedArtists

## Get all the top pp plays that have been set, but only the maps that have songs made by featured artists!

### Live build: https://meloons.xyz/osu/fa
Thanks to [osu!track api](https://github.com/Ameobea/osutrack-api) for initial top 10000 plays :D

Thanks to [osu! api](https://github.com/ppy/osu-api) for getting beatmap information <3

Big thanks to [Meiyou](https://github.com/M3IY0U) for the brill table design!

`./data files` folder has a bunch of json data for plays that i used while making this

`featuredartists.txt`: all the featured artists as of 02/03/2023

`output.json`: test for 15 plays
`output10000.json`: full run with 10000 plays

`updated.json`: full run with every play that had featured artist somewhere in the map
`updated2.json` same as `updated.json` but relabeled the indexes as they skipped maps before

`finalData.json`: huge dump from peppys servers (hehe), with some extra data
`output10000.json`: some cleaned up data as well as removed duplicates and nonamed users

## umm to build (idk why you would want to):
C# side of the project: 
 - run in visual studio, stuff should install for you
 - uncomment stuff, its in a bit of a random order though xp

node js side:
 - `npm i` to install dependancies
 - this also has a bunch of commented stuff, sorry
 - `npm run dev:start` to actually run it

