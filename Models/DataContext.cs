
using Microsoft.EntityFrameworkCore;

namespace ERP.Models {
    /*
        Class to handle connection betweeen DB and model classes

        ** If you modify, change on the models: 
        - create a migration: dotnet ef migrations add someName
        - update database: dotnet ef database update 
    */
    public class DataContext: DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){

        }

        // specify the list of models (classes) that you want to become a table on the DB
        public DbSet<Car> Cars {get; set;}

    }

}