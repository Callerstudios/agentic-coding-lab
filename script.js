"use strict";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const taskError = document.getElementById("task-error");
const taskStatus = document.getElementById("task-status");

taskInput.addEventListener("input", () => {
  if (taskInput.value.trim()) {
    taskError.textContent = "";
    taskInput.removeAttribute("aria-invalid");
  }
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = taskInput.value.trim();
  if (!description) {
    taskStatus.textContent = "";
    taskError.textContent = "Enter a task description.";
    taskInput.setAttribute("aria-invalid", "true");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = description;
  taskList.appendChild(taskItem);
  emptyState.hidden = true;
  taskInput.value = "";
  taskError.textContent = "";
  taskInput.removeAttribute("aria-invalid");
  taskStatus.textContent = `Task added. Total tasks: ${taskList.children.length}.`;
});
