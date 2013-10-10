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
            return "{ name: 'arne' }";
        }

        public ActionResult SquareMeUp(string name)
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }
    }
}
