
  document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskModal = document.getElementById("task-modal");
  const closeModalBtn = taskModal.querySelector(".delete");
  const cancelTaskBtn = document.getElementById("cancel-task-btn");
  const saveTaskBtn = document.getElementById("save-task-btn");
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
    e.target.classList.add("drag-over");
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function dragDrop(e) {
    e.preventDefault();
    e.target.classList.remove("drag-over");

    const draggingTask = document.querySelector(".dragging");
    if (draggingTask && e.target.classList.contains("column")) {
      e.target.appendChild(draggingTask);
    }
  }
  function showModal() {
    taskModal.classList.add("is-active");
  }

  function closeModal() {
    taskModal.classList.remove("is-active");
  }

  addTaskBtn.addEventListener("click", showModal);

  closeModalBtn.addEventListener("click", closeModal);
  cancelTaskBtn.addEventListener("click", closeModal);

  saveTaskBtn.addEventListener("click", () => {
    console.log("Guardar tarea");

    closeModal();
  });

  document.querySelectorAll(".add-card-btn").forEach((button) => {
    button.addEventListener("click", showModal);
  });
});
