import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { config } from './Toolbar';

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

  return (
    <div>
      <h1>Rich Text Editor Example</h1>
      <div className='container'>
        <Paper elevation={3} className={classes.root}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName='wrapper-class'
            editorClassName='editor-class'
            toolbarClassName='toolbar-class'
            toolbar={config}
            placeholder='place text here....'
          />
        </Paper>
      </div>
    </div>
  );
};
export default MyEditor;
