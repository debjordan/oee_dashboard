using Microsoft.EntityFrameworkCore;
namespace OeeDashboardApi.Models;
public class OEEContext : DbContext
{
    public OEEContext(DbContextOptions<OEEContext> options) : base(options) { }

    public DbSet<OEERecord> OEERecords { get; set; }
}
