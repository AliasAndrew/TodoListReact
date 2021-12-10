using System;

namespace TodoListReact.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public DateTime Deadline { get; set; }

        public string Status { get; set; }

        public int? PrevId { get; set; }
        public int? NextId { get; set; }
    }

}