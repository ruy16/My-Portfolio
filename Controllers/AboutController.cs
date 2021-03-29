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
    [Route("api/about")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        [HttpGet]
        public About GetAboutInfo()
        {
            //Reads text from about.json
            string jsonText = System.IO.File.ReadAllText("./Data/about.json");
            //Deserializes into About object
            return JsonConvert.DeserializeObject<About>(jsonText);
        }
    }
}
