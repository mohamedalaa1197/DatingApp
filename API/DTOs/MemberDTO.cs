using System;
using System.Collections.Generic;

namespace API.DTOs
{
    public class MemberDTO
    {
        public int Id { get; set; }
        public string userName { get; set; }
        public string PhotoURL { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Creadted { get; set; } 
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; } 
        public string LookingFor { get; set; }              
        public string Interestes { get; set; }
        public string City { get; set; }
        public string Coutry { get; set; }
        public ICollection<PhotoDTO> Photos { get; set; }
        
    }
}