// "use client";

// import React, { useState } from "react";
// import { Upload, FileText, Sparkles, Trophy, Clock, CheckCircle, Zap, Brain, Target, ArrowRight, Scan, Star } from "lucide-react";

// // Mock API function for demo
// const mockAnalyzeResumes = async (files, jd) => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 2000));
  
//   return files.map((file, index) => ({
//     filename: file.name,
//     score: Math.floor(Math.random() * 40) + 60 - index * 5, // Random scores for demo
//     skills_match: Math.floor(Math.random() * 30) + 70,
//     experience_match: Math.floor(Math.random() * 25) + 65,
//     keywords_found: Math.floor(Math.random() * 15) + 8
//   })).sort((a, b) => b.score - a.score);
// };

// const FloatingOrb = ({ className = "", delay = 0 }) => (
//   <div 
//     className={`absolute rounded-full blur-xl opacity-20 animate-ping ${className}`}
//     style={{ animationDelay: `${delay}s`, animationDuration: '4s' }}
//   />
// );

// const GlowCard = ({ children, className = "", glowColor = "purple" }) => {
//   const glowColors = {
//     purple: "shadow-purple-500/20 hover:shadow-purple-500/40",
//     blue: "shadow-blue-500/20 hover:shadow-blue-500/40",
//     pink: "shadow-pink-500/20 hover:shadow-pink-500/40",
//     emerald: "shadow-emerald-500/20 hover:shadow-emerald-500/40"
//   };

//   return (
//     <div className={`relative group ${className}`}>
//       <div className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor}-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 group-hover:duration-200 transition duration-1000`} />
//       <div className={`relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl ${glowColors[glowColor]} transition-all duration-300 hover:scale-[1.01]`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// const AnimatedBackground = () => (
//   <div className="fixed inset-0 overflow-hidden pointer-events-none">
//     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.4),transparent_50%)]" />
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.4),transparent_50%)]" />
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.3),transparent_50%)]" />
    
//     <FloatingOrb className="w-96 h-96 bg-purple-500 top-1/4 left-1/4" delay={0} />
//     <FloatingOrb className="w-64 h-64 bg-pink-500 top-3/4 right-1/4" delay={1} />
//     <FloatingOrb className="w-80 h-80 bg-blue-500 top-1/2 right-1/3" delay={2} />
    
//     <div className="absolute inset-0 opacity-30" 
//          style={{
//            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//          }} />
//   </div>
// );

// const MetricCard = ({ icon: Icon, label, value, color = "purple" }) => (
//   <div className={`bg-gradient-to-br from-${color}-500/10 to-${color}-600/10 border border-${color}-200/30 rounded-xl p-4`}>
//     <div className="flex items-center gap-3">
//       <div className={`p-2 bg-${color}-500/20 rounded-lg`}>
//         <Icon className={`w-4 h-4 text-${color}-400`} />
//       </div>
//       <div>
//         <p className="text-sm text-slate-300">{label}</p>
//         <p className={`text-lg font-bold text-${color}-300`}>{value}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function App() {
//   const [files, setFiles] = useState([]);
//   const [jd, setJd] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [dragActive, setDragActive] = useState(false);

//   const showResults = results.length > 0;

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setFiles(Array.from(e.dataTransfer.files));
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files) {
//       setFiles(Array.from(e.target.files));
//     }
//   };

//   const handleSubmit = async (e) => {
//     if (!jd.trim() || files.length === 0) {
//       alert("Please enter a job description and upload at least one resume.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const scored = await mockAnalyzeResumes(files, jd);
//       setResults(scored);
//     } catch (err) {
//       console.error(err);
//       alert("Analysis error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getScoreColor = (score) => {
//     if (score >= 80) return "emerald";
//     if (score >= 60) return "amber";
//     return "rose";
//   };

//   return (
//     <div className="min-h-screen relative">
//       <AnimatedBackground />
      
//       <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-all duration-300">
//             <div className="relative">
//               <Brain className="w-5 h-5 text-purple-300" />
//               <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             </div>
//             <span className="text-sm font-semibold text-white/90">
//               Next-Gen AI Screening
//             </span>
//             <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
//           </div>
          
//           <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 tracking-tight">
//             Neural
//             <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//               Screener
//             </span>
//           </h1>
          
//           <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             Harness advanced AI to instantly match candidates with precision and discover hidden talent
//           </p>
          
//           <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-400">
//             <div className="flex items-center gap-2">
//               <Target className="w-4 h-4" />
//               <span>95% Accuracy</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Zap className="w-4 h-4" />
//               <span>3s Analysis</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Star className="w-4 h-4" />
//               <span>AI-Powered</span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
//           {/* Main Form */}
//           <div className={`xl:col-span-${showResults ? '7' : '8'} transition-all duration-700`}>
//             <GlowCard glowColor="purple">
//               <div className="p-8">
//                 <div className="space-y-8">
//                   {/* Job Description */}
//                   <div className="space-y-4">
//                     <label className="flex items-center gap-3 text-xl font-bold text-slate-800">
//                       <div className="p-2 bg-purple-100 rounded-xl">
//                         <FileText className="w-5 h-5 text-purple-600" />
//                       </div>
//                       Job Description
//                     </label>
//                     <div className="relative group">
//                       <textarea
//                         rows={8}
//                         value={jd}
//                         onChange={(e) => setJd(e.target.value)}
//                         placeholder="Describe your ideal candidate, required skills, experience level, and key responsibilities..."
//                         className="w-full p-6 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl text-base placeholder:text-slate-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none group-hover:border-slate-300"
//                       />
//                       <div className="absolute bottom-4 right-4 text-xs text-slate-400">
//                         {jd.length} characters
//                       </div>
//                     </div>
//                   </div>

//                   {/* File Upload */}
//                   <div className="space-y-4">
//                     <label className="flex items-center gap-3 text-xl font-bold text-slate-800">
//                       <div className="p-2 bg-blue-100 rounded-xl">
//                         <Upload className="w-5 h-5 text-blue-600" />
//                       </div>
//                       Upload Resumes
//                     </label>
                    
//                     <div className="relative">
//                       <input
//                         type="file"
//                         accept=".pdf,.doc,.docx"
//                         multiple
//                         onChange={handleFileChange}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         onDragEnter={handleDrag}
//                         onDragLeave={handleDrag}
//                         onDragOver={handleDrag}
//                         onDrop={handleDrop}
//                       />
//                       <div className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
//                         dragActive 
//                           ? 'border-blue-400 bg-blue-50 scale-[1.02]' 
//                           : 'border-slate-300 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/50'
//                       }`}>
//                         <div className={`transition-all duration-300 ${dragActive ? 'scale-110' : ''}`}>
//                           <div className="relative mx-auto w-16 h-16 mb-6">
//                             <Upload className="w-16 h-16 text-slate-400 transition-colors duration-300" />
//                             {dragActive && (
//                               <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping" />
//                             )}
//                           </div>
//                           <p className="text-lg font-semibold text-slate-700 mb-2">
//                             {dragActive ? 'Drop files here!' : 'Drag & drop or click to upload'}
//                           </p>
//                           <p className="text-slate-500">
//                             PDF, DOC, DOCX • Up to 10MB each
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {files.length > 0 && (
//                       <div className="space-y-4">
//                         <p className="font-semibold text-slate-700 flex items-center gap-2">
//                           <CheckCircle className="w-4 h-4 text-green-500" />
//                           {files.length} resume{files.length > 1 ? "s" : ""} ready for analysis
//                         </p>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                           {files.map((file, index) => (
//                             <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
//                               <div className="p-2 bg-green-100 rounded-lg">
//                                 <FileText className="w-4 h-4 text-green-600" />
//                               </div>
//                               <div className="flex-1 min-w-0">
//                                 <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
//                                 <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     onClick={handleSubmit}
//                     disabled={loading || !jd.trim() || files.length === 0}
//                     className="group relative w-full h-16 text-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100 overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="relative flex items-center justify-center gap-3">
//                       {loading ? (
//                         <>
//                           <Scan className="w-6 h-6 animate-spin" />
//                           Analyzing with AI...
//                           <div className="flex gap-1">
//                             <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
//                             <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
//                             <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <Brain className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
//                           Start Neural Analysis
//                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                         </>
//                       )}
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </GlowCard>
//           </div>

//           {/* Results Panel */}
//           {showResults && (
//             <div className="xl:col-span-5 transition-all duration-700">
//               <div className="sticky top-8">
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className="p-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl shadow-lg">
//                     <Trophy className="w-7 h-7 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-3xl font-black text-white">Match Results</h2>
//                     <p className="text-slate-300">Ranked by AI compatibility score</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {results.map((result, index) => {
//                     const colorScheme = getScoreColor(result.score);
//                     return (
//                       <GlowCard key={result.filename} glowColor={colorScheme}>
//                         <div className="p-6">
//                           <div className="flex items-center justify-between mb-6">
//                             <div className="flex items-center gap-4">
//                               <div className={`relative p-3 bg-gradient-to-br from-${colorScheme}-400 to-${colorScheme}-500 rounded-xl shadow-lg`}>
//                                 <span className="text-white font-black text-lg">#{index + 1}</span>
//                                 {index === 0 && (
//                                   <div className="absolute -top-2 -right-2 p-1 bg-amber-400 rounded-full">
//                                     <Star className="w-3 h-3 text-white fill-current" />
//                                   </div>
//                                 )}
//                               </div>
//                               <div>
//                                 <p className="font-bold text-slate-800 text-lg truncate max-w-[200px]" title={result.filename}>
//                                   {result.filename}
//                                 </p>
//                                 <p className="text-sm text-slate-500">Candidate Resume</p>
//                               </div>
//                             </div>
                            
//                             <div className={`px-4 py-2 bg-gradient-to-r from-${colorScheme}-500 to-${colorScheme}-600 text-white font-black text-lg rounded-full shadow-lg`}>
//                               {result.score}%
//                             </div>
//                           </div>

//                           <div className="space-y-4">
//                             <div className="grid grid-cols-2 gap-3">
//                               <MetricCard 
//                                 icon={Target}
//                                 label="Skills Match"
//                                 value={`${result.skills_match}%`}
//                                 color={colorScheme}
//                               />
//                               <MetricCard 
//                                 icon={Clock}
//                                 label="Experience"
//                                 value={`${result.experience_match}%`}
//                                 color={colorScheme}
//                               />
//                             </div>

//                             <div className="space-y-2">
//                               <div className="flex justify-between text-sm">
//                                 <span className="text-slate-600 font-medium">Overall Compatibility</span>
//                                 <span className={`font-bold text-${colorScheme}-600`}>{result.score}%</span>
//                               </div>
//                               <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
//                                 <div 
//                                   className={`h-full bg-gradient-to-r from-${colorScheme}-400 to-${colorScheme}-600 rounded-full transition-all duration-1000 ease-out shadow-lg`}
//                                   style={{ 
//                                     width: `${result.score}%`,
//                                     animationDelay: `${index * 200}ms`
//                                   }}
//                                 />
//                               </div>
//                             </div>

//                             <div className={`p-3 bg-${colorScheme}-50 border border-${colorScheme}-200 rounded-xl`}>
//                               <p className="text-sm text-slate-600">
//                                 <span className="font-semibold">{result.keywords_found} keywords</span> matched from job description
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </GlowCard>
//                     );
//                   })}
//                 </div>//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }