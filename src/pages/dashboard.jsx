import PageLayout from "../layouts/PageLayout";

function Dashboard() {
  return (
    <PageLayout>
      <div className="dashboard-container px-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            Health Dashboard
          </h1>

          <p className="text-white/70 text-lg mt-3">
            Monitor your health records, medicines and activities in one place.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Medicines</h3>
            <h1 className="text-4xl font-bold text-white mt-3">12</h1>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Reports</h3>
            <h1 className="text-4xl font-bold text-white mt-3">8</h1>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Reminders</h3>
            <h1 className="text-4xl font-bold text-white mt-3">5</h1>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Health Score</h3>
            <h1 className="text-4xl font-bold text-white mt-3">92%</h1>
          </div>

        </div>

        {/* Health Overview */}
        <div className="grid grid-cols-2 gap-6 mb-10">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Today's Health Overview
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between text-white">
                <span>Water Intake</span>
                <span>6 / 8 Glasses</span>
              </div>

              <div className="flex justify-between text-white">
                <span>Sleep Hours</span>
                <span>7 Hours</span>
              </div>

              <div className="flex justify-between text-white">
                <span>Steps Walked</span>
                <span>4500</span>
              </div>

              <div className="flex justify-between text-white">
                <span>Calories Burned</span>
                <span>350</span>
              </div>

            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Upcoming Medicines
            </h2>

            <div className="space-y-5">

              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  Paracetamol
                </h3>
                <p className="text-white/70">
                  08:00 AM
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  Vitamin D
                </h3>
                <p className="text-white/70">
                  01:00 PM
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="text-white font-semibold">
                  Calcium
                </h3>
                <p className="text-white/70">
                  08:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-4 gap-4">

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl">
              Analyze Symptoms
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl">
              Add Reminder
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl">
              Upload Report
            </button>

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl">
              Voice Assistant
            </button>

          </div>

        </div>

      </div>
    </PageLayout>
  );
}

export default Dashboard;