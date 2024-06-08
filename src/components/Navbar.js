// just type rfc(react based component function ) to get code from line 3 to 9


import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (

    //    we have pasted navbar from bootstrap and replaced class with className (using ctrl+F) and jo tags khule the unko band kiya 
    // Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
   <>
<nav className="navbar navbar-expand-lg bg-body-dark navbar-dark bg-dark">          
 <div className="container-fluid">
    {/* { } ke andar javascript h isliye */}

   <a className="navbar-brand" href="/">{props.title}</a>                   {/* to access props ka title yani Navbar ka title */}
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/">Home</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/">{props.aboutText}</a>                    {/* to access props ka About yani Navbar ka About */}
       </li>
      

     </ul>
    
   </div>
 </div>
</nav>
</>
  );
}


 
Navbar.propTypes={title:PropTypes.string,      //matlab title and aboutText mein string he honi chahiye    (agar code bhul bhi jaye toh react ki site pe se dekh lena)
                  aboutText:PropTypes.string
                }

Navbar.defaultProps={                   //default prop matlab agar title and abouttext khali h toh woh ye dekhiyega
    title:'set title here',
    aboutText:'about text here'
}