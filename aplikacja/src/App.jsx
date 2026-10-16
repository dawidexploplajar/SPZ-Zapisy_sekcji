
App.jsx

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const sekcje = [
    'Piłka nożna',
    'Szachy',
    'Robotyka',
    'Pływanie'
  ];

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerSekcji, setNumerSekcji] = useState('');

  function obsluzZapis(event) {
    event.preventDefault();

    console.log(imieNazwisko);

    const indeksSekcji = Number(numerSekcji) - 1;

    if (
      numerSekcji !== '' &&
      Number.isInteger(Number(numerSekcji)) &&
      indeksSekcji >= 0 &&
      indeksSekcji < sekcje.length
    ) {
      console.log(sekcje[indeksSekcji]);
    } else {
      console.log('Nieprawidłowy numer sekcji');
    }
  }

  return (
    <main className="container mt-4">
      <h2>Liczba sekcji: {sekcje.length}</h2>

      <ol>
        {sekcje.map((sekcja, indeks) => (
          <li key={indeks}>{sekcja}</li>
        ))}
      </ol>

      <form onSubmit={obsluzZapis}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
            value={imieNazwisko}
            onChange={(event) => setImieNazwisko(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">
            Numer sekcji:
          </label>
          <input
            type="number"
            className="form-control"
            id="numerSekcji"
            value={numerSekcji}
            onChange={(event) => setNumerSekcji(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </main>
  );
}

export default App;


