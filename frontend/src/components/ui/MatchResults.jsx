import { CheckCircle, Trophy, FileText } from "lucide-react";

import Card from "./Card";
import CardContent from "./CardContent";
import Badge from "./Badge";
import Progress from "./Progress";

const getScoreBadgeVariant = (score) => {
  if (score >= 90) return "success";
  if (score >= 75) return "warning";
  return "secondary";
};

const getScoreColor = (score) => {
  if (score >= 90) return "text-green-600";
  if (score >= 75) return "text-yellow-600";
  return "text-red-600";
};

function MatchResults({results}) {
  return (
    <div>
      <div className="mt-10 space-y-6 max-h-[60vh] overflow-y-auto w-full pr-2 scrollbar-hidden">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-200 rounded-xl">
            <CheckCircle className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Match Results</h2>
            <p className="text-sm text-slate-600">Sorted by score</p>
          </div>
        </div>

        {results.map((result, index) => (
          <Card
            key={result.filename}
            className="hover:scale-[1.02] transition-all duration-300 w-full"
          >
            <CardContent className="w-full">
              <div className="flex items-center justify-between mb-3 flex-wrap">
                <div className="flex items-center gap-2">
                  {index === 0 && <Trophy className="w-5 h-5 text-amber-500" />}
                  <div className="flex items-center text-sm text-slate-600 font-medium gap-2">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full">
                      {index + 1}
                    </span>
                    <span>Rank</span>
                  </div>
                </div>
                <Badge variant={getScoreBadgeVariant(result.score)}>
                  {result.score}% Match
                </Badge>
              </div>

              <div className="text-sm font-medium text-slate-700 flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-slate-500" />
                <span className="truncate">{result.filename}</span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Compatibility</span>
                  <span className={`font-bold ${getScoreColor(result.score)}`}>
                    {result.score}%
                  </span>
                </div>
                <Progress value={result.score} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default MatchResults
