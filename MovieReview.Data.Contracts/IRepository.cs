using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieReview.Data.Contracts
{
    public interface IRepository<T> where T:class
    {
        //To query using LINQ
        IQueryable<T> GetAll();

        //Returning Movie or Movie Review by Id
        T GetById(int Id);

        //Adding Movie or Review
        void Add(T entity);

        //Updating Movie or Review
        void Update(T entity);
        
        //Deleting Movie or Review
        void Delete(T entity);

        //Deleting Movie or Review by Id
        void Delete(int Id);
    }
}
