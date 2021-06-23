using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensionservices
{
    public static class ApplicationServiceExtension
    {
        public static IServiceCollection applicationServices(this IServiceCollection services,IConfiguration config )
        {
            services.AddDbContext<dataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddScoped<ItokenService,tokenService>();
            services.AddCors();

            return services;

        }
    }
}