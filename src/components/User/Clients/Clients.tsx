import React from 'react';

const Cliens = () => {
	return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Customer List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-left text-gray-700 border-b">
                <th className="p-4 font-semibold">Company Name</th>
                <th className="p-4 font-semibold">Address</th>
              </tr>
            </thead>
            <tbody>
              
                <tr className="border-b hover:bg-gray-100 transition duration-300">
                  <td className="p-4">name</td>
                  <td className="p-4">123</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Cliens;

