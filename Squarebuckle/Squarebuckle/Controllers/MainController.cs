using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Squarebuckle.Models;

namespace Squarebuckle.Controllers
{
    public class MainController : Controller
    {
        //
        // GET: /Main/

        public ActionResult Index()
        {
            var model = new SquarebuckleModel();
            return View(model);
        }

        public string Hello()
        {
            return "Hello";
        }

        public string SquareMeUp(string name)
        {
            return "Hello " + name;
        }
    }
}
