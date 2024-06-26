const taskIDDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const taskCompletedDOM = document.querySelector(".task-edit-completed");
const editFormDOM = document.querySelector(".single-task-form");
const editBtnDOM = document.querySelector(".task-edit-btn");
const formAlertDOM = document.querySelector(".form-alert");

// Current URL: https://example.com/page?id=123&name=John
const params = window.location.search; // '?id=123&name=John'
const id = new URLSearchParams(params).get("id"); // '123'
let tempName;

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    console.log(task);

    const { _id: taskID, completed, name } = task;

    taskIDDOM.textContent = taskID;
    taskNameDOM.value = name;
    tempName = name;
    if (completed) taskCompletedDOM.checked = true;
  } catch (error) {
    console.log(error);
  }
};

showTask();

$(document).ready(function () {
  $(editFormDOM).submit(async function (e) {
    editBtnDOM.textContent = "Loading...";
    e.preventDefault();
    try {
      const taskName = taskNameDOM.value;
      const taskCompleted = taskCompletedDOM.checked;

      const { data: task } = await axios.patch(`/api/v1/tasks/${id}`, {
        name: taskName,
        completed: taskCompleted,
      });
      console.log(task);

      formAlertDOM.style.display = "block";
      formAlertDOM.textContent = `Success, edited task`;
      formAlertDOM.classList.add("text-success");
    } catch (error) {
      console.log(error);
      taskNameDOM.value = tempName;
      formAlertDOM.style.display = "block";
      formAlertDOM.innerHTML = `error, please try again`;
    }
    editBtnDOM.textContent = "Edit";
    setTimeout(() => {
      formAlertDOM.style.display = "none";
      formAlertDOM.classList.remove("text-success");
    }, 3000);
  });
});
