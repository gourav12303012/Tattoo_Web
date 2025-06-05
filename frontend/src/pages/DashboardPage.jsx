import React, { useState, useRef, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";

// Dummy data
const dummyAppointments = [
  {
    id: 1,
    clientName: "John Doe",
    date: "2025-06-05",
    time: "3:00 PM",
    tattooType: "Blackwork",
    status: "pending",
    details: "Forearm tattoo, about 5 inches",
    clientEmail: "john@example.com",
    clientPhone: "1234567890",
  },
  {
    id: 2,
    clientName: "Anna Smith",
    date: "2025-06-05",
    time: "5:00 PM",
    tattooType: "Realism",
    status: "accepted",
    details: "Upper back tattoo, wolf portrait",
    clientEmail: "anna@example.com",
    clientPhone: "0987654321",
  },
];

const priceList = [
  { service: "Blackwork Tattoo", price: "₹3000" },
  { service: "Realism Tattoo", price: "₹5000" },
  { service: "Minimalist Tattoo", price: "₹1500" },
];

// Simulate current logged-in user
const currentUser = {
  role: "admin", // change to "client" to test client view
  name: "John Doe",
  email: "john@example.com",
};

const DashboardPage = () => {
  const [appointments, setAppointments] = useState(dummyAppointments);
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooType: "",
    preferredDate: "",
    preferredTime: "",
    bodyPart: "",
    notes: "",
  });
  const printRef = useRef(null);

  // Admin only: update appointment status
  const handleStatusChange = useCallback((id, status) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  }, []);

  // Filter accepted appointments for selected date
  const totalWorkDone = useMemo(
    () =>
      appointments.filter(
        (a) => a.date === selectedDate && a.status === "accepted"
      ),
    [appointments, selectedDate]
  );

  // Total clients (unique by email)
  const totalClients = useMemo(() => {
    const emails = new Set(appointments.map((a) => a.clientEmail));
    return emails.size;
  }, [appointments]);

  // Client upcoming appointments only (for logged-in client)
  const clientUpcomingAppointments = useMemo(() => {
    if (currentUser.role !== "client") return [];
    const today = new Date().toISOString().slice(0, 10);
    return appointments.filter(
      (a) =>
        a.clientEmail === currentUser.email &&
        a.date >= today &&
        a.status !== "rejected"
    );
  }, [appointments]);

  // Print work summary
  const handlePrint = useCallback(() => {
    const printContents = printRef.current?.innerHTML;
    if (printContents) {
      const printWindow = window.open("", "", "height=600,width=800");
      if (printWindow) {
        printWindow.document.write("<html><head><title>Work Summary</title>");
        printWindow.document.write(
          '<style>body{font-family:sans-serif;padding:20px;} h2{margin-bottom:12px;} table{width:100%;border-collapse:collapse;} th,td{padding:8px;border:1px solid #ccc;text-align:left;}</style>'
        );
        printWindow.document.write("</head><body>");
        printWindow.document.write(printContents);
        printWindow.document.write("</body></html>");
        printWindow.document.close();
        printWindow.print();
      }
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`New client form submitted for: ${formData.name}`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      tattooType: "",
      preferredDate: "",
      preferredTime: "",
      bodyPart: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-10">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-10 drop-shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        InkByJenny Dashboard
      </motion.h1>

      {currentUser.role === "admin" ? (
        <>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Input
              type="date"
              className="w-full sm:w-64 rounded-lg text-black bg-white shadow-md"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <Button
              onClick={handlePrint}
              disabled={!selectedDate || totalWorkDone.length === 0}
              className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:from-pink-600 hover:to-purple-600"
            >
              🖸️ Print Work Summary
            </Button>
          </div>

          {selectedDate && (
            <p className="text-center mb-8 text-white/80">
              Total work done on <strong>{selectedDate}</strong>:{" "}
              {totalWorkDone.length} tattoo(s)
            </p>
          )}

          <p className="text-center text-white/80 mb-6">
            Total Registered Clients: <strong>{totalClients}</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            {appointments.map((appt) => (
              <Card
                key={appt.id}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl hover:scale-[1.02] transition-transform"
              >
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-1">{appt.clientName}</h2>
                  <p className="text-sm text-gray-400 mb-1">
                    {appt.date} • {appt.time} • {appt.tattooType}
                  </p>
                  <p className="text-sm text-gray-300 mb-3">{appt.details}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {appt.status === "pending" ? (
                      <>
                        <Button
                          variant="default"
                          onClick={() => handleStatusChange(appt.id, "accepted")}
                          className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4"
                        >
                          Accept
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleStatusChange(appt.id, "rejected")}
                          className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4"
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <span className="text-sm capitalize text-white/70">
                        Status: {appt.status}
                      </span>
                    )}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-sm bg-white text-black rounded-md px-4"
                      >
                        View Client Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white text-black rounded-xl shadow-md">
                      <h3 className="font-bold text-lg mb-2">{appt.clientName}</h3>
                      <p>Email: {appt.clientEmail}</p>
                      <p>Phone: {appt.clientPhone}</p>
                      <p>Date: {appt.date}</p>
                      <p>Time: {appt.time}</p>
                      <p>Type: {appt.tattooType}</p>
                      <p>Notes: {appt.details}</p>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mb-10">
            <form
              onSubmit={handleFormSubmit}
              className="bg-white text-black rounded-lg shadow-md p-6 w-full lg:w-1/2"
            >
              <h2 className="text-2xl font-semibold mb-4">Add New Client</h2>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Client Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Client Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <Input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
                <Input
                  type="text"
                  placeholder="Tattoo Type (e.g. Realism, Blackwork)"
                  value={formData.tattooType}
                  onChange={(e) =>
                    setFormData({ ...formData, tattooType: e.target.value })
                  }
                />
                <Input
                  type="date"
                  placeholder="Preferred Date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                />
                <Input
                  type="time"
                  placeholder="Preferred Time"
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTime: e.target.value })
                  }
                />
                <Input
                  type="text"
                  placeholder="Body Part (e.g. Arm, Back)"
                  value={formData.bodyPart}
                  onChange={(e) =>
                    setFormData({ ...formData, bodyPart: e.target.value })
                  }
                />
                <textarea
                  placeholder="Additional Notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                >
                  Submit
                </Button>
              </div>
            </form>

            <div className="bg-white text-black rounded-lg shadow-md p-6 w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Price List</h2>
              <ul className="divide-y divide-gray-300">
                {priceList.map((item, idx) => (
                  <li key={idx} className="flex justify-between py-3">
                    <span>{item.service}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden print:block p-4 text-black bg-white" ref={printRef}>
            <h2 className="text-2xl font-bold mb-4">Work Summary for {selectedDate}</h2>
            <table className="w-full border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Client</th>
                  <th className="border p-2">Time</th>
                  <th className="border p-2">Tattoo Type</th>
                  <th className="border p-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {totalWorkDone.map((appt) => (
                  <tr key={appt.id}>
                    <td className="border p-2">{appt.clientName}</td>
                    <td className="border p-2">{appt.time}</td>
                    <td className="border p-2">{appt.tattooType}</td>
                    <td className="border p-2">{appt.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        // Client view
        <>
          <motion.h2
            className="text-3xl font-semibold mb-6 text-center drop-shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome, {currentUser.name}
          </motion.h2>

          <h3 className="text-xl font-semibold mb-4">Your Upcoming Appointments</h3>

          {clientUpcomingAppointments.length === 0 ? (
            <p className="text-white/70 mb-6">You have no upcoming appointments.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {clientUpcomingAppointments.map((appt) => (
                <Card
                  key={appt.id}
                  className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg"
                >
                  <CardContent>
                    <h4 className="text-xl font-semibold">{appt.tattooType}</h4>
                    <p className="text-gray-300">{appt.date} at {appt.time}</p>
                    <p className="text-gray-400 mt-2">{appt.details}</p>
                    <p className="mt-2 capitalize">
                      Status:{" "}
                      <span
                        className={
                          appt.status === "accepted"
                            ? "text-green-400"
                            : appt.status === "pending"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }
                      >
                        {appt.status}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Tattoo Artist Contact</h3>
            <p>
              For any questions or updates about your appointment, contact Jenny at{" "}
              <a href="mailto:jenny@example.com" className="text-purple-600 underline">
                jenny@example.com
              </a>{" "}
              or call <a href="tel:+1234567890" className="text-purple-600 underline">+1 234 567 890</a>.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
