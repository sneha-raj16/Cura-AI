import PageLayout from "../layouts/PageLayout";

function ReportSummarizer() {
  return (
    <PageLayout>

      <div className="px-10">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-white">
            Health Report Summarizer
          </h1>

          <p className="text-white/70 mt-3 text-lg">
            Upload your medical reports and get simplified AI-generated insights.
          </p>

        </div>

        {/* Upload Section */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-10 mb-10">

          <h2 className="text-2xl font-bold text-white mb-6">
            Upload Report
          </h2>

          <div className="border-2 border-dashed border-white/30 rounded-2xl p-16 text-center">

            <h3 className="text-white text-xl">
              Drag & Drop Medical Report
            </h3>

            <p className="text-white/60 mt-3">
              PDF • DOCX • JPG • PNG
            </p>

            <button className="mt-6 px-8 py-3 bg-cyan-500 rounded-xl text-white">
              Browse Files
            </button>

          </div>

        </div>

        {/* Uploaded Reports */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-10">

          <h2 className="text-2xl font-bold text-white mb-6">
            Uploaded Reports
          </h2>

          <div className="space-y-4">

            <div className="bg-white/10 p-4 rounded-xl text-white">
              Blood_Report.pdf
            </div>

            <div className="bg-white/10 p-4 rounded-xl text-white">
              ECG_Report.pdf
            </div>

            <div className="bg-white/10 p-4 rounded-xl text-white">
              Xray_Report.jpg
            </div>

          </div>

        </div>

        {/* Summary + Insights */}
        <div className="grid grid-cols-2 gap-8">

          {/* AI Summary */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              AI Summary
            </h2>

            <div className="space-y-4 text-white/80">

              <p>
                <strong>Diagnosis:</strong> Mild Vitamin D Deficiency
              </p>

              <p>
                <strong>Key Findings:</strong> Blood sugar levels are normal.
              </p>

              <p>
                <strong>Recommendation:</strong> Increase sunlight exposure and take supplements.
              </p>

            </div>

          </div>

          {/* Health Insights */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-white mb-6">
              Health Insights
            </h2>

            <div className="space-y-4">

              <div className="bg-white/10 p-4 rounded-xl text-white">
                Blood Sugar : Normal
              </div>

              <div className="bg-white/10 p-4 rounded-xl text-white">
                Vitamin D : Low
              </div>

              <div className="bg-white/10 p-4 rounded-xl text-white">
                Cholesterol : Slightly High
              </div>

            </div>

          </div>

        </div>

        {/* Doctor Recommendations */}
        <div className="mt-10 bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Doctor Recommendations
          </h2>

          <ul className="space-y-3 text-white">

            <li>✔ Increase daily water intake</li>

            <li>✔ Exercise for at least 30 minutes daily</li>

            <li>✔ Maintain a healthy diet</li>

            <li>✔ Take prescribed vitamin supplements</li>

          </ul>

        </div>

      </div>

    </PageLayout>
  );
}

export default ReportSummarizer;