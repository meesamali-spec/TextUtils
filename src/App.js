import React from 'react'
import Navbar from './Commponents/Navbar'
import Textform from './Commponents/Textform';

function App() {
//   // variable 3 tarah k hoty ha 
//   let a = 10
//   console.log(a);
//   //  ham let ko same name sy 2 bar ni likh skty 
//   //  let a = 10
//   //  console.log(a);

//   // let ki velue ham change kr skty ha 
//   // let d =10 ;
//   // d = 20
//   // console.log(d);




//   var b = 20;
//   console.log(b);
//   //  ham var ko same name sy 2 bar likh skty ha
//   //  var b = 30;
//   //  console.log(b);
//   // var ki velue ham change kr skty ha 
//   // var f = 500;
//   // f = 600
//   // console.log(f);
//    const c = 30;
//    console.log(c);
// // na ham const ki velue change kr skty ha na isko 2 dafa aik name sy likh skty ha
  return (

    <div>
      <Navbar title={"TextUtils"} title2={"home"} />
      <div className='container'>
         <Textform/>

      </div>
     

    </div>
  )
}

export default App
