namespace API.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public string URL { get; set; }
        public bool IsMain { get; set; }
        public int PublicId { get; set; }
        public appUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}