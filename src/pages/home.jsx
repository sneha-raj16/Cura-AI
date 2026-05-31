import PageLayout from "../layouts/PageLayout";

function Home() {
  return (
    <PageLayout>

      <div className="home-container px-10">

        {/* Hero Section */}
        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold text-white">
            AI Healthcare Assistant
          </h1>

          <p className="text-white/80 text-xl mt-6 max-w-3xl mx-auto">
            Your smart healthcare companion for symptom analysis,
            medicine reminders, report summarization and voice assistance.
          </p>

          <div className="flex justify-center gap-5 mt-8">

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl">
              Get Started
            </button>

            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl">
              Learn More
            </button>

          </div>

        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 gap-6 mb-12">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white">
              Symptom Checker
            </h2>

            <p className="text-white/70 mt-3">
              Analyze symptoms and receive AI-powered health insights.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white">
              Medicine Reminder
            </h2>

            <p className="text-white/70 mt-3">
              Never miss your medicines with smart reminders.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white">
              Report Summarizer
            </h2>

            <p className="text-white/70 mt-3">
              Upload reports and get simplified explanations.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white">
              Voice Assistant
            </h2>

            <p className="text-white/70 mt-3">
              Voice-enabled healthcare support for elderly users.
            </p>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 mb-12">

          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div className="text-white">
              ✔ AI-Powered Health Analysis
            </div>

            <div className="text-white">
              ✔ Secure Medical Records
            </div>

            <div className="text-white">
              ✔ Smart Medicine Alerts
            </div>

            <div className="text-white">
              ✔ Voice Support for Elderly Users
            </div>

          </div>

        </div>

        {/* Health Tips */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 mb-12">

          <h2 className="text-4xl font-bold text-white mb-8">
            Daily Health Tips
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 rounded-xl p-5 text-white">
              Drink at least 8 glasses of water daily.
            </div>

            <div className="bg-white/10 rounded-xl p-5 text-white">
              Exercise for 30 minutes every day.
            </div>

            <div className="bg-white/10 rounded-xl p-5 text-white">
              Sleep for 7–8 hours every night.
            </div>

            <div className="bg-white/10 rounded-xl p-5 text-white">
              Maintain a balanced and nutritious diet.
            </div>

          </div>

        </div>

        {/* Testimonials */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-white mb-8">
            User Feedback
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 rounded-xl p-6">

              <p className="text-white">
                "Very helpful and easy to use. The medicine reminder
                feature keeps me on track."
              </p>

            </div>

            <div className="bg-white/10 rounded-xl p-6">

              <p className="text-white">
                "The report summarizer helped me understand my
                medical reports quickly."
              </p>

            </div>

          </div>

        </div>

      </div>

    </PageLayout>
  );
}

export default Home;