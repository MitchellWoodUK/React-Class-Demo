﻿using System.ComponentModel.DataAnnotations;

namespace ToyAPI.Models
{
    public class AuthenticateRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
