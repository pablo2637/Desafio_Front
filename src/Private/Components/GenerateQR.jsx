import React from 'react';
import QRCode from 'qrcode.react';
import { useGeneratorStore } from '../Hooks/useGeneratorStore';
import { useSelector } from 'react-redux';

export const GenerateQR = () => {
  const { updateFormData, updateQRValue } = useGeneratorStore();

  const{ formData, qrValue }= useSelector((state) => state.user);

  const handleInputChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateQR = () => {
    const qrData = JSON.stringify(formData);
    updateQRValue(qrData);
    console.log("hacer commit")
  };

  return (
    
    <div className="max-w-md mx-auto p-4">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700"
          />
        </div>
        <button
          type="button"
          onClick={handleGenerateQR}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Generar QR
        </button>
      </form>
      {qrValue && (
        <div className="mt-4">
          <QRCode value={qrValue} />
          </div>
      )}
    </div>
  );
};