import React, { useState, useRef } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { config } from './Toolbar';
import { getLabel, removeLabel } from './HelperFuncs';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const useStyles = makeStyles({
    root: {
      borderRadius: '25px',
      width: 'inherit',
    },
  });

  const classes = useStyles();
  const label = useRef();

  return (
    <div>
      <h1>Rich Text Editor Example</h1>
      <div className='container'>
        <Paper elevation={3} className={classes.root}>
          <Editor
            ref={label}
            onFocus={() => getLabel(label)}
            onBlur={() => removeLabel(label)}
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName='wrapper-class'
            editorClassName='editor-class'
            toolbarClassName='toolbar-class'
            toolbar={config}
            placeholder='Notes'
          />
        </Paper>
      </div>
    </div>
  );
};
export default MyEditor;
