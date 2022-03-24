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
}

function App() {
  let [tags, setTags] = useState<Array<TagType>>([{id: v1(), tagName: "#shop"}, {id: v1(), tagName: "#study"},]) 
  let [notes, setNotes] = useState<Array<NoteType>>(
    [
      {id: v1(),name: "First Note", tag: "#shop", noteText: "What to buy: 1) Milk, 2) Butter, 3) Meat, 4) Cookies #shop"},
      {id: v1(),name: "Second Note", tag: "#study", noteText: "What to learn: 1) JS, 2) CSS, 3) React, 4) Redux #study"},
    ])

    let addNote = (title: string,) => {
      let newNotes = [...notes, {id: v1(),name: title, tag: "#all", noteText: ""}];
      setNotes(newNotes);
    }

    let addTag = (tagName: string) => {
      setTags([...tags, {id: v1(), tagName: tagName}])
    }

    let deleteTag = (id: string) => {
      let newTags = tags.filter(t => t.id !== id);
      setTags(newTags);
    }

    let ChangeText = (newValue: string, id: string) => {
      let newNotes = notes.map(n => n.id === id ? {...n, noteText: newValue} : n);
      setNotes(newNotes);
    }


  return (
    <div className="App">
      <AddItemForm addNote={addNote}/>
      <TagsDisplay tags={tags} deleteTag={deleteTag}/>
      <NoteDisplay notes={notes} changeText={ChangeText}/>
    </div>
  );
}

export default App;

