using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserDTO
    {
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string userName { get; set; }
        public string token { get; set; }
    }
}