import React, { useState } from 'react';
import Form from './components/form'

const steps = [1, 2, 3, 4,5 ,6, 7]
// const steps = [
//   {
//     section: [
//       {
//         title: "Some title",
//         form: [
//           "I am ",
//           {
//             type: "text",
//           },
//           " I'm a ",
//           {
//             type: "select",
//             options:[
//               'male',
//               'female',
//             ],
//           },
//           " and I have ",
//           {
//             type: "number",
//             multiple: true,
//           },
//           " years old.",
//         ],
//       },
//     ],
//   },
//   {
//     section: [
//       {
//         title: "Some title",
//         form: [
//           "I am ",
//           {
//             type: "text",
//           },
//           " and I have ",
//           {
//             type: "number",
//             multiple: true,
//           },
//           " years old.",
//         ],
//       },
//     ],
//   },
//   {
//     section: [
//       {
//         title: "Some title",
//         form: [
//           "I am ",
//           {
//             type: "text",
//           },
//           " and I have ",
//           {
//             type: "number",
//             multiple: true,
//           },
//           " years old.",
//         ],
//       },
//     ],
//   },
  
// ]


export default() => {

  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState(0);

  const handleNext = () => {
    setCount(count + 1)
    // e.preventDefault();

    console.log('next')

  };
  
  const handlePrev = () => {
    // e.preventDefault();

    setCount(count - 1)
  };
  
  // const handleChange = () => {
  //   setCount(count - 1)
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('submit')
  };

  const isFirstSection = count === 0;
  const isLastSection = count + 1 === steps.length;
  console.log(steps.length)
  console.log(count)

  return (
    <form onSubmit={handleSubmit}>
      <Form 
        number={steps[count]}
      />
      {!isFirstSection && (
        <button type="button" onClick={handlePrev}>prev</button>
      )}
      {isLastSection ? (
        <input type="submit" value="submit" />
        ) : (
          <button type="button" onClick={handleNext}>next</button>
        )
      }
    </form>
  )
}
