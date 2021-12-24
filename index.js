import marked from 'marked';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        markText: markdownDefault
      }
      this.handleChange = this.handleChange.bind(this);
    }
    
    
    handleChange = (event) => {
      this.setState({
        markText: event.target.value
      })
    }
    
    render() {
      const markText = this.state.markText;
      const markdown = marked(markText, {breaks: true});//takes markdown text and converts it to markdown, added breaks property and set it to true so allow <br>.
      
      return(
        <div>
          <h1 className="text-center mt-3">Markdown Previewer</h1>
          <div className="col">
            <div id="editorDiv">
              <h5 className="mt-4 text-center">Eiditor</h5>
              <textarea className="form-control p-2" id="editor" value={this.state.markText} onChange={this.handleChange}/>
            </div>
            <div id="previewDiv">
              <h5 className="mt-4 text-center">Previewer</h5>
              <div className="preview rounded p-4 mb-4" id="preview" dangerouslySetInnerHTML={{__html: markdown}}/>{/*sets markdown as inner html*/} 
            </div>
          </div>   
        </div>
      );
    }
  }
  var marked = require('marked');
  const markdownDefault = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
  
  ReactDOM.render(<App />, document.getElementById('app'));