document.getElementById("code-editor")
  .setAttribute('style', 'height:' + (document.getElementById("code-editor").scrollHeight) + 'px;overflow-y:hidden;');

document.getElementById("code-editor").addEventListener("keyup", function (event) {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
  document.getElementsByClassName("preview")[0].innerHTML = event.target.value;

  validateHTML(event.target.value);
});
document.getElementsByClassName("preview")[0].innerHTML = document.getElementById("code-editor").value;

function debug() {
  document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.indexOf('debug') > -1 ? '' : 'debug';
}

function validateHTML(html) {
  var doc = document.createElement('div');
  doc.innerHTML = html;
  document.getElementById("validation-status").innerHTML = (doc.innerHTML === html.replace(/<br\s*\/>/gi, '<br>')) ? 'HTML Validation: &check;' : 'HTML Validation: &cross;';
}

// var tasks = [
//   /<p>nowiunderstandhtml\.<\/p>/gi,
//   /<p>nowiunderstandhtml\.andiloveit!<\/p>/gi,
//   /<p>nowiunderstandhtml\.<br\/*>andiloveit!<\/p>/gi,
//   /<p>nowiunderstandhtml\.<br\/*>andi<b|strong>love<\/b|strong>it!<\/p>/gi,
//   /(<p>nowiunderstandhtml\.<br\/*><em|i>andi<b|strong>love<\/b|strong><\/em|i>it!<\/p>)/gi
// ];
//
// var currentTask = 3;
//
// window.setCurrentTask = function(i) {
//   currentTask = i;
// };
//
// function checkTasks(code) {
//   console.log('Current task: ', currentTask);
//
//   if (!tasks[currentTask]) {
//     return;
//   }
//
//   if (!Array.isArray(tasks[currentTask])) {
//     console.log(code.replace(/\s/gi, '').toLowerCase());
//     if (code.replace(/\s/gi, '').toLowerCase().match(tasks[currentTask])) {
//       taskGood();
//     }
//     return;
//   }
//
//   for (var i = 0; i < tasks[currentTask].length; i++) {
//     if (code.replace(/\s/gi, '').toLowerCase().match(tasks[currentTask][i])) {
//       taskGood();
//       return;
//     }
//   }
// }
//
// function taskGood() {
//   currentTask++;
//
//   var taskSuccess = document.createElement('div');
//   taskSuccess.className = 'taskSuccess';
//   taskSuccess.id = 'taskSuccess';
//   document.body.appendChild(taskSuccess);
//
//   window.setTimeout(function () {
//     document.getElementById("taskSuccess").remove();
//   }, 4000);
// }
