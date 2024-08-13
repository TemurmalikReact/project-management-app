export const MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Priorities = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  TOP: 'High'
};

export const Statuses = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  TODO: 'To Do'
};

export function formatNumber(num, len = 2) {
  return `${num}`.padStart(len, '0')
}

export function formatDate(date) {
  const month = MonthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`
}

export function formatDateForBackend(date) {
  const year = formatNumber(date.getFullYear(), 4);
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());

  console.log(`${year}-${month}-${day} ${hours}:${minutes}`);

  return `${year}-${month}-${day} ${hours}:${minutes}`
}

export function getPriority(priority) {
  const priorityLabel = Priorities[priority];
  const priorityEl = document.createElement('div');

  priorityEl.classList.add('priority', `priority__${priorityLabel.toLowerCase()}`);
  priorityEl.innerText = priorityLabel;

  return priorityEl;
}

export function getStatus(status) {
  const statusLabel = Statuses[status];
  const statusEl = document.createElement('div');

  statusEl.classList.add('status', `status__${status.toLowerCase()}`);
  statusEl.innerText = statusLabel;

  return statusEl;
}

export function getSelectedOption(select) {
  return select.options[select.selectedIndex].value;
}
