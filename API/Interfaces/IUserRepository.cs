using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(MemberDTO User);
        Task<List<MemberDTO>> GetUsersAsync();
        Task<MemberDTO> GetUserAsyncById(int id);
        Task<MemberDTO> GetUserAsyncByName(string userName);
        Task<bool> SaveAllAsync();
    }
}