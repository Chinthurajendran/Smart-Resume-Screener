import { Sparkles } from "lucide-react";


function Header() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-white/30 rounded-full px-5 py-2 mb-4">
        <Sparkles className="w-4 h-4 text-purple-600" />
        <span className="text-sm font-medium text-slate-700">
          AI Screening Assistant
        </span>
      </div>
      <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 via-pink-700 to-purple-900 bg-clip-text text-transparent mb-2">
        Smart Resume Screener
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Upload resumes and a job description. Get AI-based compatibility scores
        in seconds.
      </p>
    </div>
  )
}

export default Header
