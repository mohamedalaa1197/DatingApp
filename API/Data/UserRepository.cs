using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly dataContext _context;
        private readonly IMapper _mapper;

        public UserRepository(dataContext context ,IMapper mapper )
        {
            _context = context;
            _mapper = mapper;
        }

        public async  Task<MemberDTO> GetUserAsyncById(int id)
        {
           return await _context.Users
                .Where(u=> u.Id == id)
                .ProjectTo<MemberDTO>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
               
        }

        public async Task<appUser> GetUserAsyncByName(string userName)
        {
                    return  await _context.Users
                    .Where(u => u.userName == userName)
                    .ProjectTo<appUser>(_mapper.ConfigurationProvider)
                    .SingleOrDefaultAsync();

        }

        public async Task<List<MemberDTO>> GetUsersAsync()
        {
            return await _context.Users
            .ProjectTo<MemberDTO>(_mapper.ConfigurationProvider)
            .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(appUser User)
        {
            _context.Entry(User).State = EntityState.Modified;
        }
    }
}