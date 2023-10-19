using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Employee.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RatingSellPriceadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Price",
                table: "Product",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Rating",
                table: "Product",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SellPrice",
                table: "Product",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Country",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 687, DateTimeKind.Unspecified).AddTicks(7395), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 687, DateTimeKind.Unspecified).AddTicks(7426), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 688, DateTimeKind.Unspecified).AddTicks(3128), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 688, DateTimeKind.Unspecified).AddTicks(3141), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified", "Rating", "SellPrice" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 688, DateTimeKind.Unspecified).AddTicks(6332), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 688, DateTimeKind.Unspecified).AddTicks(6342), new TimeSpan(0, 6, 0, 0, 0)), 4.5, 2500 });

            migrationBuilder.UpdateData(
                table: "State",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 688, DateTimeKind.Unspecified).AddTicks(9468), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 14, 17, 23, 688, DateTimeKind.Unspecified).AddTicks(9477), new TimeSpan(0, 6, 0, 0, 0)) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "SellPrice",
                table: "Product");

            migrationBuilder.AlterColumn<int>(
                name: "Price",
                table: "Product",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

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
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(9725), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 630, DateTimeKind.Unspecified).AddTicks(9734), new TimeSpan(0, 6, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "State",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "LastModified" },
                values: new object[] { new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 631, DateTimeKind.Unspecified).AddTicks(2514), new TimeSpan(0, 6, 0, 0, 0)), new DateTimeOffset(new DateTime(2023, 10, 18, 12, 54, 43, 631, DateTimeKind.Unspecified).AddTicks(2523), new TimeSpan(0, 6, 0, 0, 0)) });
        }
    }
}
