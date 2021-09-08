using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedAppUser (dataContext context)
        {
            if(await context.Users.AnyAsync()) return;

            var usersData = await System.IO.File.ReadAllTextAsync("Data/seedData.json");
            var users = JsonSerializer.Deserialize<List<appUser>>(usersData);

            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();
                
                user.userName = user.userName.ToLower();
                user.passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Ali@mohady2"));
                user.passwordSalt = hmac.Key;

                context.Users.Add(user);
            }
            await context.SaveChangesAsync();
        }
    }
}