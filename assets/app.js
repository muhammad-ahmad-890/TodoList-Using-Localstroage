
        let taskInput = document.getElementById("taskInput")
        let btn = document.getElementById("submit")
        let output = document.getElementById("taskOutput")
        // const taskOutput = document.getElementById("taskOutput");

        let todos = [];

        btn.addEventListener("click", (event) => {
            event.preventDefault();
            let task = taskInput.value;

            if (!task) {
                alert("enter data first!")
                return
            }

            var obj = {
                task: task,
                id: todos.length + 1
            }
            todos.push(obj)
            console.log(todos)
            localStorage.setItem("todos", JSON.stringify(todos))
            console.log(todos.length);
            showtask()
            taskInput.value = ""

        })

        let showtask = () => {
            console.log("output", output);
            // console.log(output.innerHTML);

            output.innerHTML = ""
            console.log(output.innerHTML, "after settin unull");
            let getItem = localStorage.getItem("todos")
            console.log(getItem)
            getItem = JSON.parse(getItem)
            getItem.forEach((obj) => {



                // const emptyMessage = document.getElementById("emptyMessage");


                // Create row
                const row = document.createElement("tr");


                // Create task cell
                const taskCell = document.createElement("td");
                taskCell.innerText = obj.task;


                // Create action cell
                const actionCell = document.createElement("td");


                // Create Edit button
                const editButton = document.createElement("button");
                editButton.innerText = "Edit" + obj.id;

                editButton.type = "button";
                editButton.addEventListener('click', () => {
                    console.log(obj.task);
                    let newTask = prompt("Edit your task:", obj.task);
                    if (newTask) {
                        obj.task = newTask;
                        taskCell.innerText = newTask;
                        console.log(newTask);
                    }
                    showtask()

                })

                // Create Delete button
                const deleteButton = document.createElement("button");
                deleteButton.innerText = "Delete";
                deleteButton.type = "button";
                deleteButton.addEventListener('click', () => {
                    console.log(obj.id);
                    // let dltbtn = todos.pop();
                    const filterTodo = getItem.filter((item) => item.id !== obj.id);

                    console.log(filterTodo);
                    todos = filterTodo;
                    localStorage.setItem("todos", JSON.stringify(filterTodo));
                    showtask()

                })


                // Put buttons inside action cell
                actionCell.appendChild(editButton);
                actionCell.appendChild(deleteButton);


                // Put cells inside row
                row.appendChild(taskCell);
                row.appendChild(actionCell);


                // Put row inside tbody
                output.appendChild(row);



                // Hide empty message because task exists
                emptyMessage.style.display = "none";
            })
        }

        showtask()

