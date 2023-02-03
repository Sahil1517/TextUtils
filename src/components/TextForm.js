import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Your text is copied", "success");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Your extra-spaces has been removed", "success");

    }

    const [text, setText] = useState("");
  return (
    <>
<div className = "container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}
   style={{backgroundColor: props.mode === 'light'?'white':'#13466e', color: props.mode=== 'dark'?'white':'#042743'}}
    id="myBox" rows="8"></textarea>
</div>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to clipboard</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces </button>
</div>
<div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:" Nothing to preview!"}</p>
</div>
</>
  )
}
