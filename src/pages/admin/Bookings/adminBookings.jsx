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