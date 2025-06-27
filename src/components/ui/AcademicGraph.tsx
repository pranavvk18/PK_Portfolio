
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useState } from 'react';

interface SemesterData {
  semester: number;
  sgpa: number;
  credits: number;
}

const AcademicGraph = () => {
  // Sample data - replace with your actual SGPA data
const [semesterData] = useState<SemesterData[]>([
  { semester: 1, sgpa: 8.35, credits: 23 },
  { semester: 2, sgpa: 8.13, credits: 23 },
  { semester: 3, sgpa: 8.4, credits: 25 },
  { semester: 4, sgpa: 8.92, credits: 24 },
  { semester: 5, sgpa: 7.77, credits: 31 },
  { semester: 6, sgpa: 8.34, credits: 29 },
]);
  // Calculate CGPA (weighted average)
  const calculateCGPA = () => {
    const totalGradePoints = semesterData.reduce((sum, sem) => sum + (sem.sgpa * sem.credits), 0);
    const totalCredits = semesterData.reduce((sum, sem) => sum + sem.credits, 0);
    return (totalGradePoints / totalCredits).toFixed(2);
  };

  const cgpa = calculateCGPA();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border-2 border-foreground rounded-lg p-4 shadow-lg">
          <p className="font-bold font-mono">{`Semester ${label}`}</p>
          <p className="text-developer-blue font-mono">{`SGPA: ${data.sgpa}`}</p>
          <p className="text-developer-green font-mono">{`Credits: ${data.credits}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border-2 border-foreground rounded-lg p-8 glow-effect">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-developer-green">📈 Academic Performance</h2>
        <div className="flex items-center space-x-6">
          <div className="text-lg">
            <span className="text-muted-foreground">Current CGPA: </span>
            <span className="text-developer-orange font-bold text-xl font-mono">{cgpa}</span>
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            Hover over data points for details
          </div>
        </div>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={semesterData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" />
            <XAxis 
              dataKey="semester" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `Sem ${value}`}
            />
            <YAxis 
              domain={[7, 10]}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              label={{ value: 'SGPA', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine 
              y={parseFloat(cgpa)} 
              stroke="hsl(var(--developer-orange))" 
              strokeDasharray="5 5"
              label={{ value: `CGPA: ${cgpa}`, position: "top", fill: "hsl(var(--developer-orange))" }}
            />
            <Line 
              type="monotone" 
              dataKey="sgpa" 
              stroke="hsl(var(--developer-blue))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--developer-blue))', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: 'hsl(var(--developer-blue))', strokeWidth: 2, fill: 'hsl(var(--developer-green))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {semesterData.map((sem) => (
          <div key={sem.semester} className="border border-foreground rounded-lg p-3 text-center hover:border-developer-orange transition-colors duration-300">
            <div className="text-sm text-muted-foreground font-mono">Sem {sem.semester}</div>
            <div className="text-lg font-bold text-developer-blue font-mono">{sem.sgpa}</div>
            <div className="text-xs text-muted-foreground font-mono">{sem.credits} credits</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicGraph;