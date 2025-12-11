import { useState } from 'react';


export default function GuessGame() {
const [guess, setGuess] = useState('');
const number = 5;


return (
<div className="page">
<h2>Guess the Number</h2>
<input onChange={(e) => setGuess(e.target.value)} />
<button>{Number(guess) === number ? 'Correct' : 'Try Again'}</button>

</div>
);
}