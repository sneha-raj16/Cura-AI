import PageLayout from "../layouts/PageLayout";

function Profile() {
  return (
    <PageLayout>

      <div className="px-10">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-white">
            Patient Profile
          </h1>

          <p className="text-white/70 mt-3 text-lg">
            Manage your personal and medical information.
          </p>

        </div>

        {/* Top Section */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center">

            <div className="w-28 h-28 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-4xl text-white font-bold">
              SR
            </div>

            <h2 className="text-white text-2xl font-bold mt-5">
              Sneha Raj
            </h2>

            <p className="text-white/70">
              Patient ID: HC2026
            </p>

          </div>

          <div className="col-span-2 bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-5">
              Personal Information
            </h2>

            <div className="grid grid-cols-2 gap-4 text-white">

              <p>Age: 20</p>
              <p>Gender: Female</p>

              <p>Blood Group: O+</p>
              <p>Height: 165 cm</p>

              <p>Weight: 58 kg</p>
              <p>Location: India</p>

            </div>

          </div>

        </div>

        {/* Medical Information */}
        <div className="grid grid-cols-2 gap-6 mb-10">

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Medical Information
            </h2>

            <div className="space-y-4 text-white">

              <p>Allergies: None</p>

              <p>Current Medications: Vitamin D</p>

              <p>Medical History: None</p>

            </div>

          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Emergency Contact
            </h2>

            <div className="space-y-4 text-white">

              <p>Name: John Raj</p>

              <p>Relationship: Father</p>

              <p>Phone: +91 XXXXX XXXXX</p>

            </div>

          </div>

        </div>

        {/* Health Statistics */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">BMI</h3>
            <h1 className="text-white text-4xl font-bold mt-3">22</h1>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Heart Rate</h3>
            <h1 className="text-white text-4xl font-bold mt-3">72</h1>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Blood Pressure</h3>
            <h1 className="text-white text-2xl font-bold mt-3">120/80</h1>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
            <h3 className="text-white/70">Health Score</h3>
            <h1 className="text-white text-4xl font-bold mt-3">92%</h1>
          </div>

        </div>

        {/* Health Goals */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Health Goals
          </h2>

          <div className="grid grid-cols-3 gap-6">

            <div className="bg-white/10 rounded-xl p-5 text-center">

              <h3 className="text-white font-semibold">
                Water Intake
              </h3>

              <p className="text-white/70 mt-2">
                8 Glasses / Day
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-5 text-center">

              <h3 className="text-white font-semibold">
                Sleep Goal
              </h3>

              <p className="text-white/70 mt-2">
                8 Hours
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-5 text-center">

              <h3 className="text-white font-semibold">
                Daily Steps
              </h3>

              <p className="text-white/70 mt-2">
                10,000 Steps
              </p>

            </div>

          </div>

        </div>

      </div>

    </PageLayout>
  );
}

export default Profile;