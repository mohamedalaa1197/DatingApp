using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : APIController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository
                                ,IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers()
        {
            return await _userRepository.GetUsersAsync();
        }


        // api/users/3
        [HttpGet("{id:int}")]
        public async Task<ActionResult<MemberDTO>> GetUserById(int id)
        {
            return await _userRepository.GetUserAsyncById(id);
        }

        [HttpGet("{userName}")]
        public async Task<ActionResult<MemberDTO>> GetUserByName(string userName)
        {
            var appuser =  await _userRepository.GetUserAsyncByName(userName);
            return _mapper.Map<MemberDTO>(appuser);
        }

        [HttpPut]
        public async Task<ActionResult<updateMemberDTO>> updateMember (updateMemberDTO updateMemberDTO)
        {
            var userName = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userRepository.GetUserAsyncByName(userName);

            _mapper.Map(updateMemberDTO,user);
            _userRepository.Update(user);
            if(await _userRepository.SaveAllAsync()) return Ok("User Updated Sucessfully ! ");
            return BadRequest("Failed To Update The User !");
        }

    }
}