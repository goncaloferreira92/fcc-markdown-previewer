import React, { useState } from 'react';
import './App.css';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
import marked from 'marked';




function App() {
  const initialMarkdown = `
  # Header 1

  ## Header 2
  
  [Goncalo Ferreira Website] (http://goncalof.com)

  <dl>
    <dt>Goncalo</dt>
    <dd>Ferreira</dd>
  </dl>

  > Inline code
  
  ${`Code Block`}
  
  * Unordered List
  
  1. Ordered List
  
  ![ggostoso](https://miro.medium.com/fit/c/256/256/1*6hSUnunPqUBtmWl6SX_xlw.png)
  
  __Bolded Text!__
  
  _Italic Text_
  
  <pre><code> This is a code block.`;

  
  const [markdownCurr, setMarkdown] = useState(initialMarkdown);

  const handleChange = e => setMarkdown(e.target.value);
  
  return (
    <div className="title">
      <div className="header">Markdown Previewer.</div>
      <div className="container">
        <div className="left">
          <textarea id="editor" value={markdownCurr} onChange={handleChange}/>
        </div>
        <div className="right">
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdownCurr)}} />
        </div>
      </div>
    </div>
    
  );
}

export default App;
