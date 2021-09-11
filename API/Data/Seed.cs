using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;


namespace API.Data
{
    public class Seed
    {
     
        public static async Task SeedAppUser (dataContext context)
        {
            if(await context.Users.AnyAsync()) return;
            // File.OpenRead("Data/5.1 UserSeedData.json");
            var usersData = await System.IO.File.ReadAllTextAsync("Data/5.1 UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<appUser>>(usersData);

            foreach (var user in users)
            {
                
                using var hmac = new HMACSHA512();
                
                user.userName = user.userName.ToLower();
                user.passwordHash = hmac.ComputeHash(Encoding.UTF32.GetBytes("123"));
                user.passwordSalt = hmac.Key;

                context.Users.Add(user);
            }
            await context.SaveChangesAsync();
        }
    }
}