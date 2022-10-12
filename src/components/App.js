import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";







function App() {
  return (
    <div>
      <Header />
      {notes.map( noteTerm => (
<Note 
  key = {noteTerm.id}
  title = {noteTerm.title}
  content = {noteTerm.content}
/>
  

))}
      <Footer />
    </div>
  );
}

export default App;
