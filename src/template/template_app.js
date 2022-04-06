import React, { useRef } from 'react';
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';
//import './App.css';
//import Form from './Form';
import Form from './Form';

export function templateApp() {
  return (
    <>
      {/* <Form /> */}
      <div>template_app</div>
    </>
  );
}

// class templateApp extends React.Component {
//   render() {
//     return (
//       <>
//         {/* <Print /> */}
//         <Form />
//       </>
//     );
//   }
// }

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div style={{ padding: '150px' }}>
      <div ref={componentRef}>
        <Form />
      </div>
      {/* <templateApp ref={componentRef} /> */}
      <button className="btn btn-primary float-right" onClick={handlePrint}>
        Export To PDF
      </button>
    </div>
  );
};

//render(<Print />, document.querySelector('#footer'));

export default Print;
