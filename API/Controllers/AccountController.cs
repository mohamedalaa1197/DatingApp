using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : APIController
    {
        private readonly dataContext _context;
        private readonly ItokenService tokenService;

        public AccountController(dataContext context,ItokenService tokenService)
        {
            _context = context;
            this.tokenService = tokenService;
        }

        [HttpPost("register")]

        // To receive data from the body it should be an object
         
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO){

            if(await UserExist(registerDTO.userName)) return BadRequest("Name is Taken");

            using var hmac=new HMACSHA512();

            var user =new appUser(){
                userName=registerDTO.userName.ToLower(),
                passwordHash=hmac.ComputeHash(Encoding.UTF32.GetBytes(registerDTO.password)),
                passwordSalt=hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new UserDTO{
                userName=user.userName,
                token=tokenService.creatToken(user)                
            };
            
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO){

            var user=await _context.Users
                     .SingleOrDefaultAsync(u=>u.userName ==loginDTO.userName);

            if(user ==null) return Unauthorized("Invalid user Name");

            using var hmc =new HMACSHA512(user.passwordSalt);

            var ComputedHash=hmc.ComputeHash(Encoding.UTF32.GetBytes(loginDTO.password));

            for (int i = 0; i <ComputedHash.Length; i++)
            {
                if(ComputedHash[i]!=user.passwordHash[i]) return Unauthorized("Invalid password!");
            }         
            
            return new UserDTO{
                userName=user.userName,
                token=tokenService.creatToken(user)
            };

        }


        private async Task<bool> UserExist(string userName){

            return await _context.Users.AnyAsync(u=>u.userName==userName.ToLower());

        }
        
    }
}
