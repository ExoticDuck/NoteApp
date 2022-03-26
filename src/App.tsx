import React, { useState } from 'react';
import './App.scss';
import AddItemForm from './components/AddItemForm/AddItemForm';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
import TagsDisplay from './components/TagsDisplay/TagsDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store/store';
import { addTagAC, deleteTagAC, selectTagAC } from './store/tags-reducer';
import { addNoteAC, changeNoteAC, deleteNoteAC } from './store/notes-reducer';

export type NoteType = {
  id: string
  name: string
  tag: string
  noteText: string
}

export type TagType = {
  id: string
  tagName: string
  selected: boolean
}

function App() {
  let tags = useSelector<AppRootStateType, Array<TagType>>(state => state.tags);
  let notes = useSelector<AppRootStateType, Array<NoteType>>(state => state.notes);
  const dispatch = useDispatch();
  let [selectedTag, setSelectedTag] = useState<string>("#all")

    let selectTag = (tagName: string) => {
      setSelectedTag(tagName);
      dispatch(selectTagAC(tagName))
    }

    let addNote = (title: string,) => {
      dispatch(addNoteAC(title))
    }

    let deleteNote = (noteId: string) => {
      dispatch(deleteNoteAC(noteId))
    }

    let addTag = (tagName: string, noteId: string) => { 
      dispatch(addTagAC(tagName));
    }

    let deleteTag = (id: string) => {
      dispatch(deleteTagAC(id));
    }

    let ChangeText = (newValue: string, id: string, newTag: string) => {
      dispatch(changeNoteAC(newValue, id, newTag));
    }

    let notesForDisplay = notes;
    if(selectedTag !== "#all") {
      notesForDisplay = notes.filter(note => note.tag === selectedTag);
    }

  return (
    <div className="App">
      <AddItemForm addNote={addNote}/>
      <TagsDisplay tags={tags} deleteTag={deleteTag} selectTag={selectTag}/>
      <NoteDisplay notes={notesForDisplay} changeText={ChangeText} addTag={addTag} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;

