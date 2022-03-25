import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import AddItemForm from './components/AddItemForm/AddItemForm';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
import TagsDisplay from './components/TagsDisplay/TagsDisplay';

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
  let [tags, setTags] = useState<Array<TagType>>([{id: v1(), tagName: "#shop", selected: true}, {id: v1(), tagName: "#study", selected: false}, {id: v1(), tagName: "#all", selected: false}]) 
  let [notes, setNotes] = useState<Array<NoteType>>(
    [
      {id: v1(),name: "First Note", tag: "#shop", noteText: "What to buy: 1) Milk, 2) Butter, 3) Meat, 4) Cookies #shop"},
      {id: v1(),name: "Second Note", tag: "#study", noteText: "What to learn: 1) JS, 2) CSS, 3) React, 4) Redux #study"},
    ])
  let [selectedTag, setSelectedTag] = useState<string>("#all")

    let selectTag = (tagName: string) => {
      setSelectedTag(tagName);
      let newTags = tags.map(tag => tag.tagName === tagName ? {...tag, selected: !tag.selected} : {...tag, selected: false});
      setTags(newTags);
    }

    let addNote = (title: string,) => {
      let newNotes = [...notes, {id: v1(),name: title, tag: "#all", noteText: "Enter some text"}];
      setNotes(newNotes);
    }

    let deleteNote = (noteId: string) => {
      let newNotes = notes.filter(note => note.id !== noteId);
      setNotes(newNotes);
    }

    let addTag = (tagName: string, noteId: string) => { //!note id
      let double = tags.find(t => t.tagName === tagName);
      if(double === undefined) {
        setTags([...tags, {id: v1(), tagName: tagName, selected: false}])
      }
    }

    let deleteTag = (id: string) => {
      let newTags = tags.filter(t => t.id !== id);
      setTags(newTags);
    }

    let ChangeText = (newValue: string, id: string, newTag: string) => {
      let newNotes = notes.map(n => n.id === id ? {...n, noteText: newValue, tag: newTag} : n);
      setNotes(newNotes);
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

