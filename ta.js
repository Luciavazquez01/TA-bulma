document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskModal = document.getElementById("task-modal");
  const closeModalBtn = taskModal.querySelector(".delete");
  const cancelTaskBtn = document.getElementById("cancel-task-btn");
  const saveTaskBtn = document.getElementById("save-task-btn");
  let currentStatus = '';

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add("dragging");
  }

  function dragEnd(e) {
    e.target.classList.remove("dragging");
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    if (e.target.classList.contains("task-list")) {
      e.target.classList.add("drag-over");
    }
  }

  function dragLeave(e) {
    if (e.target.classList.contains("task-list")) {
      e.target.classList.remove("drag-over");
    }
  }

  function dragDrop(e) {
    e.preventDefault();
    e.target.classList.remove("drag-over");

    const draggingTaskId = e.dataTransfer.getData("text/plain");
    const draggingTask = document.getElementById(draggingTaskId);

    if (draggingTask && e.target.classList.contains("task-list")) {
      e.target.appendChild(draggingTask);
    }
  }

  function showModal() {
    taskModal.classList.add("is-active");
    currentStatus = this.getAttribute('data-status');
  }

  function closeModal() {
    taskModal.classList.remove("is-active");
  }

  function addTask() {
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const assigned = document.getElementById("task-assigned").value;
    const priority = document.getElementById("task-priority").value;
    const dueDate = document.getElementById("task-due-date").value;

    if (title.trim() === '') {
      alert('El título de la tarea es obligatorio.');
      return;
    }

    const newCard = document.createElement("div");
    newCard.className = "box";
    newCard.textContent = `${title} - ${description} - ${assigned} - ${priority} - ${dueDate}`;
    newCard.draggable = true;
    newCard.addEventListener("dragstart", dragStart);
    newCard.addEventListener("dragend", dragEnd);

    const taskList = document.querySelector(`.column-box[data-status="${currentStatus}"] .task-list`);
    taskList.appendChild(newCard);

    closeModal();
  }

  addTaskBtn.addEventListener("click", showModal);
  closeModalBtn.addEventListener("click", closeModal);
  cancelTaskBtn.addEventListener("click", closeModal);
  saveTaskBtn.addEventListener("click", addTask);

  document.querySelectorAll(".add-card-btn").forEach((button) => {
    button.addEventListener("click", showModal);
  });

  document.querySelectorAll(".task-list").forEach((taskList) => {
    taskList.addEventListener("dragover", dragOver);
    taskList.addEventListener("dragenter", dragEnter);
    taskList.addEventListener("dragleave", dragLeave);
    taskList.addEventListener("drop", dragDrop);
  });
  document.getElementById('save-task-btn').addEventListener('click', function() {
  });
  
  document.getElementById('cancel-task-btn').addEventListener('click', function() {
  
  });
  
});
