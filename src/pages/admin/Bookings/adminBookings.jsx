const bookings = [
    {
        bookingId: 101,
        email: "john.doe@example.com",
        status: "pending",
        reason: "Vacation",
        start: new Date("2024-11-01T10:00:00"),
        end: new Date("2024-11-05T18:00:00"),
        notes: "First trip to Hawaii.",
        timeStamp: new Date("2024-10-20T12:30:00"),
    },
    {
        bookingId: 102,
        email: "jane.smith@example.com",
        status: "confirmed",
        reason: "Conference",
        start: new Date("2024-12-10T09:00:00"),
        end: new Date("2024-12-15T17:00:00"),
        notes: "Attending tech summit.",
        timeStamp: new Date("2024-11-01T08:45:00"),
    },
    {
        bookingId: 103,
        email: "bob.brown@example.com",
        status: "cancelled",
        reason: "Personal",
        start: new Date("2025-01-05T11:00:00"),
        end: new Date("2025-01-10T15:00:00"),
        notes: "Family emergency.",
        timeStamp: new Date("2024-12-15T09:15:00"),
    },
    {
        bookingId: 104,
        email: "alice.wong@example.com",
        status: "pending",
        reason: "Business",
        start: new Date("2025-02-01T08:00:00"),
        end: new Date("2025-02-05T18:00:00"),
        notes: "Meeting with overseas clients.",
        timeStamp: new Date("2024-12-20T14:30:00"),
    },
    {
        bookingId: 105,
        email: "michael.green@example.com",
        status: "confirmed",
        reason: "Workshop",
        start: new Date("2025-03-15T10:00:00"),
        end: new Date("2025-03-20T16:00:00"),
        notes: "Conducting a training session.",
        timeStamp: new Date("2025-01-10T11:00:00"),
    },
];






export default function AdminBooking(){
    return (
        <div className="w-full">
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Booking ID</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Start Date</th>
                        <th className="border border-gray-300 px-4 py-2">End Date</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Reason</th>
                        <th className="border border-gray-300 px-4 py-2">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">101</td>
                        <td className="border border-gray-300 px-4 py-2">john.doe@example.com</td>
                        <td className="border border-gray-300 px-4 py-2">2024-11-01</td>
                        <td className="border border-gray-300 px-4 py-2">2024-11-05</td>
                        <td className="border border-gray-300 px-4 py-2">pending</td>
                        <td className="border border-gray-300 px-4 py-2">Vacation</td>
                        <td className="border border-gray-300 px-4 py-2">First trip to Hawaii.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">102</td>
                        <td className="border border-gray-300 px-4 py-2">jane.smith@example.com</td>
                        <td className="border border-gray-300 px-4 py-2">2024-12-10</td>
                        <td className="border border-gray-300 px-4 py-2">2024-12-15</td>
                        <td className="border border-gray-300 px-4 py-2">confirmed</td>
                        <td className="border border-gray-300 px-4 py-2">Conference</td>
                        <td className="border border-gray-300 px-4 py-2">Attending tech summit.</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">103</td>
                        <td className="border border-gray-300 px-4 py-2">bob.brown@example.com</td>
                        <td className="border border-gray-300 px-4 py-2">2025-01-05</td>
                        <td className="border border-gray-300 px-4 py-2">2025-01-10</td>
                        <td className="border border-gray-300 px-4 py-2">cancelled</td>
                        <td className="border border-gray-300 px-4 py-2">Personal</td>
                        <td className="border border-gray-300 px-4 py-2">Family emergency.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}