
import { useState } from 'react';
import QuestionPanel from '../components/QuestionPanel';
import VideoInterview from '../components/VideoInterview';
import CodeEditor from '../components/CodeEditor';
import TestResults from '../components/TestResults';
import { Button } from '@/components/ui/button';
import { Play, Square } from 'lucide-react';

interface TestCase {
  input: string;
  expectedOutput: string;
  actualOutput?: string;
  passed?: boolean;
}

const Index = () => {
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Write your solution here
    
}`);
  
  const [testResults, setTestResults] = useState<TestCase[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState('javascript');

  // Sample question data
  const questionData = {
    questionId: 1,
    questionTitle: "Two Sum",
    questionDescription: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ],
    example: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]"
    },
    hints: [
      "A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.",
      "So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?",
      "The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?"
    ],
    tags: ["Array", "Hash Table"],
    difficulty: "Easy"
  };

  const handleRunCode = () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      const mockResults: TestCase[] = [
        {
          input: "nums = [2,7,11,15], target = 9",
          expectedOutput: "[0,1]",
          actualOutput: "[0,1]",
          passed: true
        },
        {
          input: "nums = [3,2,4], target = 6",
          expectedOutput: "[1,2]",
          actualOutput: "[1,2]",
          passed: true
        },
        {
          input: "nums = [3,3], target = 6",
          expectedOutput: "[0,1]",
          actualOutput: "[0,1]",
          passed: true
        }
      ];
      setTestResults(mockResults);
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-400">CodePractice</h1>
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleRunCode}
              disabled={isRunning}
              className="bg-green-600 hover:bg-green-700"
            >
              {isRunning ? (
                <>
                  <Square className="w-4 h-4 mr-2" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Run Code
                </>
              )}
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Question & Video */}
        <div className="w-1/2 border-r border-slate-700 flex flex-col">
          {/* Question Panel */}
          <div className="flex-1 overflow-hidden">
            <QuestionPanel questionData={questionData} />
          </div>
          
          {/* Video Interview Section */}
          <div className="h-64 border-t border-slate-700">
            <VideoInterview />
          </div>
        </div>

        {/* Right Panel - Code Editor & Results */}
        <div className="w-1/2 flex flex-col">
          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor 
              code={code}
              onChange={setCode}
              language={language}
              onLanguageChange={setLanguage}
            />
          </div>
          
          {/* Test Results */}
          <div className="h-64 border-t border-slate-700">
            <TestResults 
              testResults={testResults}
              isRunning={isRunning}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
