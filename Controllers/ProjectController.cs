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
    [Route("api/projects")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        public IEnumerable<Project> GetProjects()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/projects.json");
            return JsonConvert.DeserializeObject<IEnumerable<Project>>(jsonText);
        }
    }
}
