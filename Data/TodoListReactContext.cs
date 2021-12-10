using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoListReact.Models;

namespace TodoListReact.Data
{
    public class TodoListReactContext : DbContext
    {
        public TodoListReactContext (DbContextOptions<TodoListReactContext> options)
            : base(options)
        {
        }

        public DbSet<TodoListReact.Models.TodoItem> TodoItem { get; set; }
    }
}
