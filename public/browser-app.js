const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = "visible";
  try {
    const { data: tasks } = await axios.get("/api/v1/tasks");
    // const tasks = await axios.get("/api/v1/tasks");
    console.log(tasks);

    if (tasks.length < 1) {
      tasksDOM.innerHTML = `<h5 class='empty-list'>No tasks in your list</h5>`;
      loadingDOM.style.visibility = "hidden";
      return;
    }

    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name } = task;
        return `<div class='single-task ${completed && "task-completed"}'>
      <h5>
        <span><i class='far fa-check-circle'></i></span>
        ${name}
      </h5>

      <div class='task-links'>
        <a href='task.html?id=${taskID}' class='edit-link'>
          <i class='fas fa-edit'></i>
        </a>

        <button type='button' class='delete-btn' data-id='${taskID}'>
          <i class='fas fa-trash'></i>
        </button>
      </div>
      </div>`;
      })
      .join("");

    tasksDOM.innerHTML = allTasks;
  } catch (error) {
    tasksDOM.innerHTML = `<h5>There was an error, please try later...</h5>`;
  }
  loadingDOM.style.visibility = "hidden";
};

showTasks();

$(document).ready(function () {
  $(tasksDOM).on("click", ".delete-btn", async (e) => {
    console.log(e);
    loadingDOM.style.visibility = "visible";
    const id = e.currentTarget.dataset.id;
    console.log(id);
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (error) {
      console.log(error);
    }
    loadingDOM.style.visibility = "hidden";
  });

  //
});
