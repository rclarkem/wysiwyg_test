import './App.css';
import React from 'react';
import MyEditor from './Editor/MyEditor';
import { Route, Switch } from 'react-router-dom';
import { getLabel, removeLabel } from './Editor/HelperFuncs';
import { editConfig } from './Editor/Toolbar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <MyEditor
                {...props}
                wrapperClassName='wrapper-class'
                editorClassName='editor-class'
                toolbarClassName='toolbar-class'
                placeholder='Notes...'
                onFocus={getLabel}
                onBlur={removeLabel}
                config={editConfig}
                toolbarHidden={false}
              />
            )}
          />
          <Route
            exact
            path='/read-editor'
            render={(props) => (
              <MyEditor
                {...props}
                readOnly={true}
                wrapperClassName='wrapper-class'
                editorClassName='editor-class'
                toolbarClassName='toolbar-class'
                toolbarHidden={true}
              />
            )}
          />
        </Switch>
      </header>
    </div>
  );
}

export default App;
