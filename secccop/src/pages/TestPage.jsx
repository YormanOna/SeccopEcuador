export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Test de Estilos</h1>
      <div className="bg-blue-100 p-4 rounded-lg mb-4">
        <p className="text-blue-800">Si puedes ver este texto en azul y este fondo azul claro, Tailwind está funcionando correctamente.</p>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Botón de Prueba
      </button>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-red-200 p-4 text-center">Grid 1</div>
        <div className="bg-yellow-200 p-4 text-center">Grid 2</div>
        <div className="bg-purple-200 p-4 text-center">Grid 3</div>
      </div>
    </div>
  );
}
