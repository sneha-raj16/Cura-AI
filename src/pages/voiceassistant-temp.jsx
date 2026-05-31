import { useState } from "react";
import PageLayout from "../layouts/PageLayout";

function VoiceAssistant() {
  const [message, setMessage] = useState("");

  return (
    <PageLayout>

      <div className="px-10">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-white">
            Voice Healthcare Assistant
          </h1>

          <p className="text-white/70 mt-3 text-lg">
            Talk to your healthcare assistant using voice commands.
          </p>

        </div>

        {/* Voice Controls */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-2xl">
            🎤 Start Listening
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl">
            ⏹ Stop Listening
          </button>

          <button className="bg-white/20 hover:bg-white/30 text-white py-4 rounded-2xl">
            🗑 Clear Chat
          </button>

        </div>

        {/* Chat Window */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-10">

          <h2 className="text-2xl font-bold text-white mb-6">
            Conversation
          </h2>

          <div className="space-y-5">

            {/* User Message */}
            <div className="flex justify-end">

              <div className="bg-cyan-500 text-white p-4 rounded-2xl max-w-md">
                I have a headache and mild fever.
              </div>

            </div>

            {/* AI Response */}
            <div className="flex justify-start">

              <div className="bg-white/10 text-white p-4 rounded-2xl max-w-md">
                Stay hydrated and rest. Monitor your temperature.
                Consult a doctor if symptoms persist.
              </div>

            </div>

          </div>

        </div>

        {/* Message Input */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 mb-10">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Type your health query..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-xl p-4 text-white outline-none"
            />

            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-xl text-white">
              Send
            </button>

          </div>

        </div>

        {/* Quick Commands */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Commands
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-white/10 p-4 rounded-xl text-white">
              Check Symptoms
            </button>

            <button className="bg-white/10 p-4 rounded-xl text-white">
              Set Medicine Reminder
            </button>

            <button className="bg-white/10 p-4 rounded-xl text-white">
              Show Health Reports
            </button>

            <button className="bg-white/10 p-4 rounded-xl text-white">
              Daily Health Tips
            </button>

          </div>

        </div>

      </div>

    </PageLayout>
  );
}

export default VoiceAssistant;