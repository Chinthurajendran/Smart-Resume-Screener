import React, { useState } from "react"
import axios from "axios"
import {
  Upload,
  FileText,
  Sparkles,
  Trophy,
  Clock,
  CheckCircle,
} from "lucide-react"

import Header from "./components/ui/Header"
import MatchResults from "./components/ui/MatchResults"
import Button from "./components/ui/Button"
import Card from "./components/ui/card"
import CardContent from "./components/ui/CardContent"
import Textarea from "./components/ui/textarea"
import Label from "./components/ui/label"
import Badge from "./components/ui/badge"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";




const BACKEND_URL = import.meta.env.REACT_APP_API_URL

export default function ResumeScreener
() {
  const [files, setFiles] = useState([])
  const [jd, setJd] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

   const handleFileChange = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);

      const invalidFile = selectedFiles.find(
        (file) => file.type !== "application/pdf"
      );

      if (invalidFile) {
        toast.error("Only PDF files are allowed.");
        return;
      }

      setFiles(selectedFiles);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!jd.trim() || files.length === 0) {
      toast.error("Please enter a job description and upload at least one PDF.");
      return
    }

    setLoading(true)
    try {
      const scored = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData()
          formData.append("file", file)
          formData.append("jd", jd)
          const { data } = await axios.post(`${BACKEND_URL}/match/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          return data
        })
      )
      scored.sort((a, b) => b.score - a.score)
      setResults(scored)
    } catch (err) {
      console.error(err)
      toast.error("Backend error. Check console & CORS settings.")
    } finally {
      setLoading(false)
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-emerald-700"
    if (score >= 60) return "text-amber-700"
    return "text-rose-700"
  }

  const getScoreBadgeVariant = (score) => {
    if (score >= 80) return "default"
    if (score >= 60) return "secondary"
    return "destructive"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 py-6 max-w-7xl flex flex-col justify-start min-h-screen">
        <Header />

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label htmlFor="job-description" className="text-base">
                  Job Description
                </Label>
                <div className="relative mt-2">
                  <Textarea
                    id="job-description"
                    rows={6}
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                    placeholder="Paste the complete job description here..."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="resume-upload" className="text-base">
                  Upload Resumes
                </Label>
                <div className="relative mt-2">
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="relative z-0 border-2 border-dashed border-slate-300 bg-white/50 rounded-xl p-8 text-center transition-all hover:border-purple-400 hover:bg-purple-50/30">
                    <Upload className="w-5 h-5 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-600 font-medium">
                      Click or drop resumes here
                    </p>
                    <p className="text-sm text-slate-500">
                      Supported: PDF, DOC, DOCX
                    </p>
                  </div>
                </div>
                {files.length > 0 && (
                  <div className="mt-4 space-y-1">
                    <p className="text-sm text-slate-700 font-semibold">
                      {files.length} file{files.length > 1 ? "s" : ""} selected:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {files.map((file, index) => (
                        <Badge key={index} variant="secondary">
                          <FileText className="w-3 h-3" /> {file.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button type="submit" disabled={loading} className="w-full justify-center">
                {loading ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Match Resumes
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {results.length > 0 && <MatchResults results={results} getScoreBadgeVariant={getScoreBadgeVariant} getScoreColor={getScoreColor} />}
      </div>
    </div>
  )
}
