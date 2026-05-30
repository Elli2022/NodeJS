// Exportera en funktion som skapar en "post"-funktion.
// Funktionen tar in ett objekt med en "logger" som argument (även om "logger" inte används i detta exempel).
export default function createPost({ logger }) {
  // Returnera ett objekt som har en "post"-funktion.
  return Object.freeze({ post });

  // Definition av "post"-funktionen. Den tar in ett objekt med "params" som argument.
  function post({ params }) {
    // Returnerar de "params" som skickades in till funktionen.
    return params;
  }
}
