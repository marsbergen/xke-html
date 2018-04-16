document.getElementById("code-editor")
  .setAttribute('style', 'height:' + (document.getElementById("code-editor").scrollHeight) + 'px;overflow-y:hidden;');

document.getElementById("code-editor").addEventListener("keyup", function (event) {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
  document.getElementsByClassName("preview")[0].innerHTML = event.target.value;

  checkTasks(event.target.value);
});
document.getElementsByClassName("preview")[0].innerHTML = document.getElementById("code-editor").value;

function debug() {
  document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.indexOf('debug') > -1 ? '' : 'debug';
}

var tasks = [
  '<p>Now I understand HTML.</p>',
  '<p>Now I understand HTML. And I love it!</p>',
  ['<p>Now I understand HTML.<br />And I love it!</p>', '<p>Now I understand HTML.<br>And I love it!</p>'],
];

var currentTask = 0;

window.setCurrentTask = function(i) {
  currentTask = i;
};

function checkTasks(code) {
  console.log('Current task: ', currentTask);

  if (!tasks[currentTask]) {
    return;
  }

  if (!Array.isArray(tasks[currentTask])) {
    if (code.replace(/\s/gi, '').toLowerCase() === tasks[currentTask].replace(/\s/gi, '').toLowerCase()) {
      taskGood();
    }
    return;
  }

  for (var i = 0; i < tasks[currentTask].length; i++) {
    console.log(code.replace(/\s/gi, '').toLowerCase(), tasks[currentTask][i].replace(/\s/gi, '').toLowerCase());
    if (code.replace(/\s/gi, '').toLowerCase() === tasks[currentTask][i].replace(/\s/gi, '').toLowerCase()) {
      taskGood();
      return;
    }
  }
}

function taskGood() {
  currentTask++;

  var taskSuccess = document.createElement('div');
  taskSuccess.className = 'taskSuccess';
  taskSuccess.id = 'taskSuccess';
  document.body.appendChild(taskSuccess);

  window.setTimeout(function () {
    document.getElementById("taskSuccess").remove();
  }, 4000);
}
