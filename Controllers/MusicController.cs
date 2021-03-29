using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyWeb.Models;
using Newtonsoft.Json;

namespace MyWeb.Controllers
{
    [Route("api/music")]
    [ApiController]
    public class MusicController : ControllerBase
    {
        public IEnumerable<Music> GetMusic()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/music.json");
            return JsonConvert.DeserializeObject<IEnumerable<Music>>(jsonText);
        }
    }
}
