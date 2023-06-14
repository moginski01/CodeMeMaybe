import React, { useState } from 'react';


const NewTask = () => {
  const [content, setContent] = useState('');
  const [koszt, setKoszt] = useState('');
  const [languages, setLanguages] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pobierz adres IP z pamięci lokalnej
    const user = JSON.parse(localStorage.getItem('user'));
    const email = user.email;
    // Utwórz obiekt z danymi do wysłania na backend
    var languages_list = languages.split(',').map((language) => language.trim());

    const newTaskData = {
      content,
      cost: parseInt(koszt),
      languages: languages_list,
      authorEmail: email,
    };

    try {
      console.log(newTaskData); // Sprawdzenie zawartości obiektu przed parsowaniem JSON-a
      console.log(JSON.stringify(newTaskData)); // Wyświetlanie JSON-a przed wysłaniem
      // Wyślij dane do backendu
      //brzydkie naprawienie ścieżki do posta
      const response = await fetch('../api/tasks/new_task', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskData),
      });

      // Obsłuż odpowiedź z backendu
      if (response.ok) {
        console.log('Nowe zadanie zostało dodane.');
        setContent('');
        setKoszt('');
        setLanguages('');
      } else {
        const errorData = await response.json();
        console.error('Wystąpił błąd podczas dodawania nowego zadania:', errorData.error);
        // Możesz wyświetlić komunikat błędu lub podjąć inne działania w przypadku nieudanego żądania
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white p-6 rounded shadow-md w-5/12" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Treść:
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Koszt:
            <input
              type="number"
              value={koszt}
              onChange={(e) => setKoszt(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Języki (oddzielone przecinkami):
            <input
              type="text"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Dodaj nowe zadanie
        </button>
      </form>
    </div>
  );
};


export default NewTask;