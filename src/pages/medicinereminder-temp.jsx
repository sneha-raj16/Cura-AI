import { useState } from "react";
import PageLayout from "../layouts/PageLayout";

function MedicineReminder() {
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");

  const handleAddMedicine = () => {
    alert("Medicine Reminder Added");
  };

  return (
    <PageLayout>

      <div className="px-10">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-white">
            Medicine Reminder
          </h1>

          <p className="text-white/70 mt-3 text-lg">
            Manage your medicines and never miss a dose.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-8">

          {/* Add Medicine */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Add Medicine
            </h2>

            <input
              type="text"
              placeholder="Medicine Name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Dosage (500mg)"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="w-full mt-4 p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full mt-4 p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
            />

            <button
              onClick={handleAddMedicine}
              className="w-full mt-6 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white"
            >
              Add Reminder
            </button>

          </div>

          {/* Daily Progress */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Daily Progress
            </h2>

            <div className="bg-white/10 rounded-xl p-6">

              <h3 className="text-white text-lg">
                Medicines Taken Today
              </h3>

              <h1 className="text-5xl font-bold text-white mt-4">
                8 / 10
              </h1>

            </div>

          </div>

        </div>

        {/* Upcoming Medicines */}
        <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Upcoming Medicines
          </h2>

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white/10 rounded-xl p-5">

              <h3 className="text-white font-semibold">
                Paracetamol
              </h3>

              <p className="text-white/70 mt-2">
                08:00 AM
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-5">

              <h3 className="text-white font-semibold">
                Vitamin D
              </h3>

              <p className="text-white/70 mt-2">
                01:00 PM
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-5">

              <h3 className="text-white font-semibold">
                Calcium
              </h3>

              <p className="text-white/70 mt-2">
                08:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* Medicine Schedule */}
        <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Today's Schedule
          </h2>

          <table className="w-full text-white">

            <thead>

              <tr className="border-b border-white/20">

                <th className="py-3 text-left">
                  Medicine
                </th>

                <th className="py-3 text-left">
                  Dosage
                </th>

                <th className="py-3 text-left">
                  Time
                </th>

                <th className="py-3 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="py-4">
                  Paracetamol
                </td>

                <td>
                  500mg
                </td>

                <td>
                  08:00 AM
                </td>

                <td>
                  ✅ Taken
                </td>

              </tr>

              <tr>

                <td className="py-4">
                  Vitamin D
                </td>

                <td>
                  1000 IU
                </td>

                <td>
                  01:00 PM
                </td>

                <td>
                  ⏳ Pending
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </PageLayout>
  );
}

export default MedicineReminder;