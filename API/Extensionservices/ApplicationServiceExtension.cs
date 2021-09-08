using API.Data;
using API.helpers;
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

            services.AddScoped<IUserRepository , UserRepository>();
            services.AddScoped<ItokenService,tokenService>();
            services.AddAutoMapper(typeof(AutoMapperProfile));
            services.AddCors();

            return services;

        }
    }
}