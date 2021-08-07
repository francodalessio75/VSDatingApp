using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Controllers
{
    public class BaseAPIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
