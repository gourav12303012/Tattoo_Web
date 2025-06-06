import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const DashboardPage = () => {
  const location = useLocation();
  const allUserData = location.state?.allUser || [];

  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExport = () => {
    const exportData = filteredData.map((item, index) => {
      const createdAt = new Date(item.createdAt);
      return {
        ID: index + 1,
        "Client Name": item.clientName,
        Date: createdAt.toLocaleDateString("en-IN"),
        Time: createdAt.toLocaleTimeString("en-IN"),
        "Tattoo Type": item.tattooType,
        Phone: item.phone,
        Details: item.description,
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Appointments");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "Appointments.xlsx");
  };

  const filteredData = useMemo(() => {
    return allUserData.filter((item) => {
      const dateMatch = filterDate
        ? new Date(item.createdAt).toLocaleDateString("en-CA") === filterDate
        : true;
      const nameMatch = item.clientName
        ?.toLowerCase()
        .includes(search.toLowerCase());
      return dateMatch && nameMatch;
    });
  }, [search, filterDate, allUserData]);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - InkByJenny</title>
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-8"
        >
          Admin Dashboard
        </motion.h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-800 text-white px-4 py-2 rounded-md w-full sm:w-1/2"
          />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="bg-zinc-800 text-white px-4 py-2 rounded-md w-full sm:w-1/3"
          />
          <button
            onClick={handleExport}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md transition"
          >
            Export Excel
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <Card className="bg-zinc-900 border-zinc-800 shadow-lg">
            <CardContent className="p-0">
              <table className="w-full divide-y divide-zinc-800 text-sm">
                <thead className="bg-zinc-800 text-indigo-300 uppercase tracking-wide">
                  <tr>
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Client Name</th>
                    <th className="px-4 py-3 text-left">Date</th>
                    <th className="px-4 py-3 text-left">Time</th>
                    <th className="px-4 py-3 text-left">Tattoo Type</th>
                    <th className="px-4 py-3 text-left">Phone</th>
                    <th className="px-4 py-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 text-white">
                  {filteredData.map((appointment, index) => {
                    const createdAt = new Date(appointment.createdAt);
                    return (
                      <tr key={index} className="hover:bg-zinc-800/60 transition">
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{appointment.clientName || "-"}</td>
                        <td className="px-4 py-3">
                          {createdAt.toLocaleDateString("en-IN")}
                        </td>
                        <td className="px-4 py-3">
                          {createdAt.toLocaleTimeString("en-IN")}
                        </td>
                        <td className="px-4 py-3">{appointment.tattooType || "-"}</td>
                        <td className="px-4 py-3">{appointment.phone || "-"}</td>
                        <td className="px-4 py-3">{appointment.description || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Collapsible Cards */}
        <div className="space-y-4 md:hidden mt-6">
          {filteredData.map((appointment, index) => {
            const createdAt = new Date(appointment.createdAt);
            const formattedDate = createdAt.toLocaleDateString("en-IN");
            const formattedTime = createdAt.toLocaleTimeString("en-IN");

            return (
              <div
                key={index}
                className="border border-zinc-800 bg-zinc-900 p-4 rounded-xl shadow-md"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setExpandedCard(expandedCard === index ? null : index)
                  }
                >
                  <h2 className="font-semibold text-lg text-indigo-400">
                    {appointment.clientName || "No Name"}
                  </h2>
                  <span className="text-sm text-white/60">
                    {formattedDate}
                  </span>
                </div>
                {expandedCard === index && (
                  <div className="mt-3 space-y-1 text-sm text-white">
                    <p><span className="font-medium text-indigo-300">Time:</span> {formattedTime}</p>
                    <p><span className="font-medium text-indigo-300">Type:</span> {appointment.tattooType}</p>
                    <p><span className="font-medium text-indigo-300">Phone:</span> {appointment.phone}</p>
                    <p><span className="font-medium text-indigo-300">Details:</span> {appointment.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
