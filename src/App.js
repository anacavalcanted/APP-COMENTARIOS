import React from 'react';
import './App.css';
import Image from './img/people.svg'

function App() {
  const [comment, setComment] = React.useState();
  const [allComents, setAllComents] = React.useState([]);

  function typeText(eventtype) {
    setComment(eventtype.target.value);
  }

  function clickButton() {
    const allPreviousComments = [...allComents, comment];

    setAllComents(allPreviousComments)
  }

  return (
    <div class='navbar' >
      <img src={Image} alt=" imagem-pessoas" />
      <textarea placeholder='Seu cometário aqui' onChange={typeText}></textarea>
      <button onClick={clickButton}>Comentar</button>
      <ul >
        {allComents.map((coment) => (
          <li key={coment}>{coment}</li>
        ))}


      </ul>

    </div>
  );
}

export default App;
