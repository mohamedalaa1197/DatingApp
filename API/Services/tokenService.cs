using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class tokenService : ItokenService
    {

        // Will Create only one key for coding and decoding.
        private readonly SymmetricSecurityKey _key;


        public tokenService(IConfiguration config)
        {
            _key=new SymmetricSecurityKey(Encoding.UTF32.GetBytes(config["TokenKey"]));
        } 
        public string creatToken(appUser user)
        {
            //Claims are just key value pairs and to be authorized ,we look for the value of the key 
            var claims=new List<Claim>{

                //This will create the claim with its key ==> nameId and value ==>user name
                new Claim(JwtRegisteredClaimNames.NameId,user.userName)
            };

            var credentials=new SigningCredentials(_key,SecurityAlgorithms.HmacSha512Signature);

            // describe token properties
            var tokenDescriptor=new SecurityTokenDescriptor{
                Subject=new ClaimsIdentity(claims),
                Expires=DateTime.Now.AddDays(7),
                SigningCredentials=credentials
            };
            
            //used to handle the creation of the token and serlizing the token to JSON
            var tokenHandler=new JwtSecurityTokenHandler();

            //creating the token itself
            var token=tokenHandler.CreateToken(tokenDescriptor);

            //WriteToken ==> serialize the jwt token
            return tokenHandler.WriteToken(token);
        }
    }
}