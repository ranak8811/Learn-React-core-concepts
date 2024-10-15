// function Todo({ task }) {
//   return (
//     <div>
//       <h3>hey todo: {task}</h3>
//     </div>
//   );
// }

// // conditional rendering option 1
// function Todo({ task, isDone }) {
//   if (isDone) {
//     return <h3>Finished: {task}</h3>;
//   } else {
//     return <h3>Not finished: {task}</h3>;
//   }
// }

// conditional rendering option 2
// function Todo({ task, isDone }) {
//   if (isDone) {
//     return <h3>Finish: {task}</h3>;
//   }
//   return <h3>Not finish: {task}</h3>;
// }

// // conditional rendering option 3 using ternary operator
// function Todo({ task, isDone }) {
//   return (
//     <h3>
//       {isDone ? "Finished" : "Work on"}: {task}
//     </h3>
//   );
// }

// // conditional rendering option 4 using &&
// function Todo({ task, isDone }) {
//   return (
//     <h3>
//       {task} {isDone && "Done"}
//     </h3>
//   );
// }

// conditional rendering option 5 using ||
// function Todo({ task, isDone }) {
//   return (
//     <h3>
//       {task} {isDone || "--> Do it"}
//     </h3>
//   );
// }

//conditional rendering option 6
function Todo({ task, isDone }) {
  let item;
  if (isDone) {
    item = <h3>Finish: {task}</h3>;
  } else {
    item = <h3>Not finish: {task}</h3>;
  }

  return item;
}

export default Todo;
