namespace API.DTOs
{

    //We use DTOs to flaten our objects with the properties we only need. 
    public class LoginDTO
    {
        public string userName { get; set; }
        public string password { get; set; }
    }
}