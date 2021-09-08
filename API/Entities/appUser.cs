using System;
using System.Collections.Generic;
using API.Extensionservices;

namespace API.Entities
{
    public class appUser
    {
        public int Id { get; set; }
        public string userName { get; set; }
        public Byte[] passwordHash { get; set; }
        public Byte[] passwordSalt { get; set; }  
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Creadted { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Gender { get; set; }
        public string Introduction { get; set; } 
        public string LookingFor { get; set; }              
        public string Interestes { get; set; }
        public string City { get; set; }
        public string Coutry { get; set; }
        public ICollection<Photo> Photos { get; set; }

        // public int GetAge(){
        //     return DateOfBirth.CalculateAge();
        // }
    }
}