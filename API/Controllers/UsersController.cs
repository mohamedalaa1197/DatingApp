using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class UsersController : APIController
    {
        private readonly dataContext _context;

        public UsersController(dataContext context)
        {
            _context = context;
        }
            
        [HttpGet] 
        [Authorize]        
        public async Task<ActionResult<IEnumerable<appUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();    
        }

        // api/users/3
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<appUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);  
        }
        
    }
}