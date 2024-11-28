import react from 'react'

export default function RoomsPage(){


  const rooms = [
    {
      roomId: 101,
      category: "Deluxe",
      maxGuests: 3,
      available: true,
      photos: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      specialDescription: "Ocean view with a private balcony.",
      notes: "Includes breakfast.",
    },
    {
      roomId: 102,
      category: "Standard",
      maxGuests: 2,
      available: false,
      photos: ["https://via.placeholder.com/50"],
      specialDescription: "Cozy room with basic amenities.",
      notes: "",
    },
    {
      roomId: 103,
      category: "Suite",
      maxGuests: 4,
      available: true,
      photos: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      specialDescription: "Spacious suite with a living area and kitchenette.",
      notes: "Ideal for families.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Room Table</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Room ID</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Max Guests</th>
            <th className="border border-gray-300 px-4 py-2">Available</th>
            <th className="border border-gray-300 px-4 py-2">Photos</th>
            <th className="border border-gray-300 px-4 py-2">Special Description</th>
            <th className="border border-gray-300 px-4 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{room.roomId}</td>
              <td className="border border-gray-300 px-4 py-2">{room.category}</td>
              <td className="border border-gray-300 px-4 py-2">{room.maxGuests}</td>
              <td className="border border-gray-300 px-4 py-2">
                {room.available ? "Yes" : "No"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex space-x-2">
                  {room.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`Room ${room.roomId}`}
                      className="w-12 h-12 object-cover"
                    />
                  ))}
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {room.specialDescription || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">{room.notes || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
