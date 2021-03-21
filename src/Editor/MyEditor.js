import React, { useState, useRef } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MyEditor = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const getItem = () => {
    const content = localStorage.getItem('content');
    if (content) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
      );
    } else {
      setEditorState(EditorState.createEmpty());
    }
  };

  const useStyles = makeStyles({
    root: {
      borderRadius: '25px',
      width: 'inherit',
    },
  });

  const classes = useStyles();
  const label = useRef();
  const text = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  const onFocus = () => {};

  const saveContents = () => {
    localStorage.setItem('content', text);
  };

  return (
    <div>
      <h1>Rich Text Editor Example</h1>
      <div className='container'>
        <Link to='/read-editor'>
          <button>SWITCH TO READ</button>
        </Link>
        <Link to='/'>
          <button>HOME</button>
        </Link>
        <Paper elevation={3} className={classes.root}>
          <Editor
            ref={label}
            onFocus={
              props.readOnly === true ? null : () => props.onFocus(label)
            }
            onBlur={props.readOnly === true ? null : () => props.onBlur(label)}
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName={props.wrapperClassName}
            editorClassName={props.editorClassName}
            toolbarClassName={props.toolbarClassName}
            toolbar={props.config}
            readOnly={props.readOnly}
            placeholder={props.placeholder}
            toolbarHidden={props.toolbarHidden}
          />
        </Paper>
        <button onClick={saveContents}>SAVE DATA</button>
        {props.readOnly === true && <button onClick={getItem}>GET DATA</button>}
      </div>
    </div>
  );
};
export default MyEditor;
