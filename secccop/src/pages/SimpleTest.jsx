export default function SimpleTest() {
  return (
    <div className="p-8 bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Test de Tailwind CSS</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
        <p className="text-gray-700">Si ves este texto con estilos, Tailwind está funcionando.</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Botón de prueba
      </button>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-red-200 p-4 text-center rounded">Rojo</div>
        <div className="bg-green-200 p-4 text-center rounded">Verde</div>
        <div className="bg-yellow-200 p-4 text-center rounded">Amarillo</div>
      </div>
    </div>
  );
}
