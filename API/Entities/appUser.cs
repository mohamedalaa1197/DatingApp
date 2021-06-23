using System;

namespace API.Entities
{
    public class appUser
    {
        public int Id { get; set; }
        public string userName { get; set; }

        public Byte[] passwordHash { get; set; }

        public Byte[] passwordSalt { get; set; }     
    }
}