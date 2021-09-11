using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensionservices;
using AutoMapper;

namespace API.helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<appUser , MemberDTO>()
                .ForMember(u=>u.PhotoURL , u=> u.MapFrom(o=> o.Photos.FirstOrDefault(x => x.IsMain).URL))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(o=> o.DateOfBirth.CalculateAge()));

             CreateMap<appUser,appUser>();
            CreateMap<updateMemberDTO,appUser>();
            CreateMap<Photo , PhotoDTO>();

        }   
    }
}