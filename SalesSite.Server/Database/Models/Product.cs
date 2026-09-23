namespace SalesSite.Server.Database.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductTitle { get; set; }
        public string? ImageUrl { get; set; }
        public string BodyText { get; set; }
        public decimal Price { get; set; }
        public decimal? SalePrice { get; set; }

    }
}
