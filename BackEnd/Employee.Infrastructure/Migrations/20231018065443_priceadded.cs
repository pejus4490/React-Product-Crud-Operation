using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Employee.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class priceadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Product",
                type: "int",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Country",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(1879), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(1916), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(6917), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(6928), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified", "Price" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(9725), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(9734), new TimeSpan(0, 6, 0, 0, 0)), 2300 });

            migrationBuilder.UpdateData(
                table: "State",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 631, DateTimeKind.Unspecified).AddTicks(2514), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 631, DateTimeKind.Unspecified).AddTicks(2523), new TimeSpan(0, 6, 0, 0, 0)) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Product");

            migrationBuilder.UpdateData(
                table: "Country",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 563, DateTimeKind.Unspecified).AddTicks(5109), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 563, DateTimeKind.Unspecified).AddTicks(5140), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 564, DateTimeKind.Unspecified).AddTicks(816), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 564, DateTimeKind.Unspecified).AddTicks(830), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 564, DateTimeKind.Unspecified).AddTicks(4083), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 564, DateTimeKind.Unspecified).AddTicks(4095), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "State",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 564, DateTimeKind.Unspecified).AddTicks(7233), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 50, 34, 564, DateTimeKind.Unspecified).AddTicks(7242), new TimeSpan(0, 6, 0, 0, 0)) });
        }
    }
}
