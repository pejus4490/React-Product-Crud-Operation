using Employee.Shared.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Employee.Model;
using System.Diagnostics;

namespace Employee.Infrastructure.Persistence.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {

        builder.HasKey(x => x.Id);
        builder.HasOne(x => x.Country).WithMany(x => x.Product).HasForeignKey(x => x.CountryId);
        builder.HasData(new
        {
            Id = 1,
            ProductName = "Apple",
            ProductDescription = "Fruits",
            Rating= 4.5,
            Price = 2300,
            barcode ="xxx",
            SellPrice = 2500,
            CountryId = 1,
            Created = DateTimeOffset.Now,
            CreatedBy = "1",
            LastModified = DateTimeOffset.Now,
            Status = EntityStatus.Created
        });
    }
}