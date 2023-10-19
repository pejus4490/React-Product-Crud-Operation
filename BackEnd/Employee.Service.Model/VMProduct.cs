using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service.Model;

public class VMProduct: IVM
{
    public int Id { get; set; }
    public string? ProductName { get; set; }
    public string? ProductDescription { get; set; }
    public float? Rating { get; set; }
    public double? Price { get; set; }
    public string? barcode { get; set; }
    public double? SellPrice { get; set; }
    public int CountryId { get; set; }
  
}
