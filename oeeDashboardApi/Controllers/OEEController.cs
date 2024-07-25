using Microsoft.AspNetCore.Mvc;
using OeeDashboardApi.Models;

namespace OeeDashboardApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OEEController : ControllerBase
    {
        private readonly OEEContext _context;

        public OEEController(OEEContext context)
        {
            _context = context;
        }    

        [HttpGet]
        public ActionResult<IEnumerable<OEERecord>> Get()
        {
            return _context.OEERecords.ToList();
        }

        [HttpPost]
        public ActionResult<OEERecord> Post(OEERecord record)
        {
            _context.OEERecords.Add(record);
            _context.SaveChanges();
            return CreatedAtAction(nameof(Get), new { id = record.Id}, record);       
        }
    }
}