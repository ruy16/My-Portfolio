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
    [Route("api/education")]
    [ApiController]
    public class EducationController : ControllerBase
    {
        public Education GetEduacation()
        {
            var schools = JsonConvert.DeserializeObject<IEnumerable<School>>(System.IO.File.ReadAllText("./Data/schools.json"));
            var skills = JsonConvert.DeserializeObject<IEnumerable<Skill>>(System.IO.File.ReadAllText("./Data/skills.json"));
            return new Education
            {
                SchoolList = schools,
                SkillList = skills
            };
        }
    }
}
