﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWeb.Models
{
    public class Project
    { 
        public int Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Stack { get; set; }
        public bool HasWebLink { get; set; }
        public String WebUrl { get; set; }
        public bool HasGithubLink { get; set; }
        public String GithubUrl { get; set; }
        public bool HasDownloadLink { get; set; }
        public String DownloadUrl
        {
            get; set;
        }
    }
}
