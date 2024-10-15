// function Singer({ singer }) {
//   console.log(singer);
//   return (
//     <div>
//       <h3>Singer: {singer.name}</h3>
//       <p>Age: {singer.age}</p>
//     </div>
//   );
// }

function Singer({ singer }) {
  //   console.log(singer);
  const { name, age } = singer;
  return (
    <div>
      <h3>Singer: {singer.name}</h3>
      <p>Age: {singer.age}</p>
    </div>
  );
}

export default Singer;
