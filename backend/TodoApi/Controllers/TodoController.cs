using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using TodoApi.Services;

namespace TodoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoService _service;

        public TodoController(TodoService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get() => Ok(_service.GetAll());

        [HttpPost]
        public IActionResult Post([FromBody] TodoItem item)
        {
            if (string.IsNullOrWhiteSpace(item.Task))
                return BadRequest("Task is required");

            var added = _service.Add(item.Task);
            return CreatedAtAction(nameof(Get), new { id = added.Id }, added);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return _service.Delete(id) ? NoContent() : NotFound();
        }
    }
}