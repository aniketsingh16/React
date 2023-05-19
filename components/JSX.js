import React from 'react';


// Using JSX
// const JSX = () => {
//     return(
//         <div>
//             <h2>
//                 With JSX
//             </h2>
//         </div>
//     )
// }

//Without using JSX
const JSX = () => {
    return React.createElement(
        'div', {id: 6, className: 'main-div'}, React.createElement('h2',{id: 7,className: 'without-jsx'},'Without JSX')
    )
}

export default JSX;