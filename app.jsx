'use client';

import { useState } from 'react';

export default function Home() {
  const [residents, setResidents] = useState([]);
  const [newResident, setNewResident] = useState({
    nombre: '',
    unidad: '',
    correo: '',
    telefono: '',
    estado: 'Activo',
  });

  const addResident = () => {
    if (!newResident.nombre || !newResident.unidad) return;
    setResidents([...residents, newResident]);
    setNewResident({ nombre: '', unidad: '', correo: '', telefono: '', estado: 'Activo' });
  };

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Mi Comunidad App - Residentes</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Agregar residente</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="p-2 border rounded"
            placeholder="Nombre"
            value={newResident.nombre}
            onChange={(e) => setNewResident({ ...newResident, nombre: e.target.value })}
          />
          <input
            className="p-2 border rounded"
            placeholder="Unidad"
            value={newResident.unidad}
            onChange={(e) => setNewResident({ ...newResident, unidad: e.target.value })}
          />
          <input
            className="p-2 border rounded"
            placeholder="Correo electrónico"
            value={newResident.correo}
            onChange={(e) => setNewResident({ ...newResident, correo: e.target.value })}
          />
          <input
            className="p-2 border rounded"
            placeholder="Teléfono"
            value={newResident.telefono}
            onChange={(e) => setNewResident({ ...newResident, telefono: e.target.value })}
          />
          <select
            className="p-2 border rounded"
            value={newResident.estado}
            onChange={(e) => setNewResident({ ...newResident, estado: e.target.value })}
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
          <button
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={addResident}
          >
            Agregar
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Listado de residentes</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Unidad</th>
              <th className="p-2 border">Correo</th>
              <th className="p-2 border">Teléfono</th>
              <th className="p-2 border">Estado</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((res, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border">{res.nombre}</td>
                <td className="p-2 border">{res.unidad}</td>
                <td className="p-2 border">{res.correo}</td>
                <td className="p-2 border">{res.telefono}</td>
                <td className="p-2 border">{res.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
