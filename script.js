var createTask = (description) => {
    var task = {
      description,
      isCompleted: false,
      markCompleted: () => {
        task.isCompleted = true;
      },
      markPending: () => {
        task.isCompleted = false;
      },
      getInfo: () => {
        if (task.isCompleted) {
          console.log(`[ V ]  ${description}`);
        } else {
          console.log(`[ ] ${description}`);
        }
      },
    };
  
    return task;
  };
  
  var createTodo = () => {
    var tasks = [];
  
    var Todolist = {
      addTask: (description) => {
        var newTask = createTask(description);
        tasks.push(newTask);
      },
      removeTask: (index) => {
        if (index >= 0 && index < tasks.length) {
          tasks.splice(index, 1);
        } else {
          console.log("No such task");
        }
      },
      getTasks: () => {
        console.log("____________________________");
        tasks.forEach((task) => {
          task.getInfo();
        });
        console.log("____________________________");
      },
      markTaskCompleted: (index) => {
        if (index >= 0 && index < tasks.length) {
          tasks[index].markCompleted();
        } else {
          console.log("No such task");
        }
      },
      markTaskPending: (index) => {
        if (index >= 0 && index < tasks.length) {
          tasks[index].markPending();
        } else {
          console.log("No such task");
        }
      },
    };
    return Todolist;
  };
  
  var myTodoList = createTodo();
  
  myTodoList.addTask("akademiashi wasvla");
  myTodoList.addTask("leqciis chatareba");
  myTodoList.addTask("saxlshi wasvla");
  
  myTodoList.getTasks();
  
  myTodoList.markTaskCompleted(0);
  
  // myTodoList.removeTask(0);
  
  myTodoList.markTaskPending(0);
  
  myTodoList.getTasks();