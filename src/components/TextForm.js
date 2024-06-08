
import React ,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();  
        setText(newText);
    }

    const handleDownClick=()=>{
        // console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("On change was clicked");
        setText(event.target.value);
    }

    const handleClearClick=()=>{
        // console.log("Clear text was clicked");
        let newText='';
        setText(newText);
    }

    const handleCopy=()=>{
        // var text=document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
    }
    
    // const[count,SetCount]=useState(0);
    const[text,setText]=useState('Enter Text here');
    // text="sdssdsd";     (not allowed)
    // setText="asasasas";         (allowed)


  return (
    // return mein hum ek he tag return kara sakte h isliye we use jsx fragment
    <>

    <div className="Container">
        <h1>{props.title}</h1>
        {/* mb- margin bottom se */}
        <div className="mb-3">     
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button disabled={text.length==0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length==0} className="btn btn-danger mx-4 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
<button disabled={text.length==0} className="btn btn-dark mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length==0} className="btn btn-info mx-4 my-1" onClick={handleCopy}>Copy text</button>
    </div>



    <div className="container my-3">
    <h1>Summary </h1>

    <p>{text.split(/\s+/).length} words and {text.length} Characters</p>
    <p>{0.008*text.split(/\s+ /).length} Minutes read</p>    
    {/* split(/\s+/) will split two words on basis of white space or a line whereas split(" ") will split words on basis of white space only  */}
    {/* <p>{text}</p> */}
    </div>


    <br />
    <br />
    <hr/>
    <p>copyright @ reserved to Kaushal Sharma</p>
    </>
  )
}
