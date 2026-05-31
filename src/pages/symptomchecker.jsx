import { useState } from "react";
import PageLayout from "../layouts/PageLayout";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("");

  const handleAnalyzeSymptoms = () => {
    alert("AI Analysis Feature Coming Soon");
  };

  return (
    <PageLayout>

      <div className="px-10">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-white">
            Symptom Checker
          </h1>

          <p className="text-white/70 mt-3 text-lg">
            Describe your symptoms and get AI-powered health suggestions.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-8">

          {/* Left Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Enter Symptoms
            </h2>

            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Example: Fever, Headache, Cough"
              className="w-full h-40 rounded-2xl bg-white/10 border border-white/20 text-white p-5 outline-none"
            />

            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Duration (e.g. 3 days)"
              className="w-full mt-5 rounded-xl bg-white/10 border border-white/20 text-white p-4 outline-none"
            />

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full mt-5 rounded-xl bg-white/10 border border-white/20 text-white p-4 outline-none"
            >
              <option value="">Select Severity</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>

            <button
              onClick={handleAnalyzeSymptoms}
              className="w-full mt-6 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white font-semibold"
            >
              Analyze Symptoms
            </button>

          </div>

          {/* Right Section */}
          <div className="space-y-6">

            {/* AI Result */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-white mb-5">
                Possible Conditions
              </h2>

              <ul className="text-white/80 space-y-3">
                <li>• Viral Infection</li>
                <li>• Common Cold</li>
                <li>• Seasonal Flu</li>
              </ul>

            </div>

            {/* Recommendations */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-white mb-5">
                Recommendations
              </h2>

              <ul className="text-white/80 space-y-3">
                <li>• Stay hydrated</li>
                <li>• Take adequate rest</li>
                <li>• Monitor body temperature</li>
                <li>• Consult a doctor if symptoms worsen</li>
              </ul>

            </div>

            {/* Recent Searches */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-white mb-5">
                Recent Searches
              </h2>

              <div className="space-y-3">

                <div className="bg-white/10 rounded-xl p-4 text-white">
                  Fever + Headache
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-white">
                  Cough + Cold
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-white">
                  Back Pain
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Emergency Warning */}
        <div className="mt-10 bg-red-500/20 border border-red-400 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-4">
            Emergency Warning Signs
          </h2>

          <ul className="text-white/90 space-y-2">
            <li>• Difficulty breathing</li>
            <li>• Chest pain</li>
            <li>• High fever above 103°F (39.4°C)</li>
            <li>• Loss of consciousness</li>
          </ul>

        </div>

      </div>

    </PageLayout>
  );
}

export default SymptomChecker;