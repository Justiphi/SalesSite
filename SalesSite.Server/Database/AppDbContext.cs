using Microsoft.EntityFrameworkCore;
using SalesSite.Server.Database.Models;

namespace SalesSite.Server.Database
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
