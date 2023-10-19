using Employee.Shared.Common;
using Employee.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Model;

public class Product : BaseAuditableEntity, IEntity
{
    public int Id { get; set; }
    public string? ProductName { get; set; }
    public string? ProductDescription { get; set;}
    public double?  Rating { get; set; }
    public int  Price { get; set; }
    public string? barcode { get; set; }
     public int  SellPrice { get; set; }
    public int CountryId { get; set; }
    public Country? Country { get; set; }
}
