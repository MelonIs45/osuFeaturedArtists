using System.Net;
using RestSharp;
using Newtonsoft.Json;

namespace GetOsuPlays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var client = new RestClient("https://osutrack-api.ameo.dev/");
            var request = new RestRequest("bestplays?mode=0&limit=10000");

            //var response = client.Execute(request).Content;
            //dynamic json = JsonConvert.DeserializeObject(response);

            //int i = 0;
            //foreach (var user in json)
            //{
            //    File.AppendAllText("output10000.json", $"\"{i}\": " + user.ToString() + ",\n");
            //    i++;
            //}

            var jsonplays = File.OpenText("output10000.json").ReadToEnd();
            dynamic users = JsonConvert.DeserializeObject(jsonplays);
            string featuredArtists = File.ReadAllText("featuredartists.txt");

            var jsonupdated = File.OpenText("updated.json").ReadToEnd();
            dynamic updated = JsonConvert.DeserializeObject(jsonupdated);

            // write code that updates the updated json file with an ordered index instead of random numbers
            //int index = 0;
            //for (int i = 0; i < 10000; i++)
            //{
            //    if (updated[$"{i}"] != null)
            //    {
            //        File.AppendAllText("updated2.json", $"\"{index}\": " + updated[$"{i}"].ToString() + ",\n");
            //        index++;
            //    }
            //}

            //using (var webClient = new WebClient())
            //{
            //    for (int i = 0; i < 10000; i++)
            //    {
            //        // https://osu.ppy.sh/osu/{users[$"{i}"]["beatmap_id"]}

            //        webClient.DownloadFile($"https://osu.ppy.sh/osu/{users[$"{i}"]["beatmap_id"]}", $"beatmap.osu");
            //        string beatmap = File.ReadAllText("beatmap.osu");
            //        string artist = beatmap.Split("Artist:")[1].Split("\n")[0].Trim();

            //        if (featuredArtists.Contains(artist) || beatmap.Contains("featured artist"))
            //        {
            //            File.AppendAllText("updated.json", $"\"{i}\": " + users[$"{i}"].ToString() + ",\n");
            //        }

            //        File.Delete("beatmap.osu");

            //        if (i % 100 == 0)
            //        {
            //            Console.WriteLine($"{i/100}%");
            //        }
            //    }
            //}
        }
    }
}