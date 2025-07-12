
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react';

const QuestionPanel = () => {
  return (
    <div className="h-full bg-slate-800">
      <div className="border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">1. Two Sum</h2>
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500">1.2k</span>
            <ThumbsDown className="w-4 h-4 text-red-500 ml-2" />
            <span className="text-sm text-red-500">234</span>
            <Star className="w-4 h-4 text-yellow-500 ml-2" />
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Easy</Badge>
          <Badge variant="outline" className="border-slate-600 text-slate-300">Array</Badge>
          <Badge variant="outline" className="border-slate-600 text-slate-300">Hash Table</Badge>
        </div>
      </div>

      <ScrollArea className="h-[calc(100%-100px)]">
        <div className="px-6 py-4 space-y-6">
          <div>
            <p className="text-slate-300 leading-relaxed">
              Given an array of integers <code className="bg-slate-700 px-2 py-1 rounded text-blue-400">nums</code> and an integer <code className="bg-slate-700 px-2 py-1 rounded text-blue-400">target</code>, return <em>indices of the two numbers such that they add up to target</em>.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              You can return the answer in any order.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Example 1:</h3>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-slate-400">Input:</div>
              <div className="text-blue-400">nums = [2,7,11,15], target = 9</div>
              <div className="text-slate-400 mt-2">Output:</div>
              <div className="text-green-400">[0,1]</div>
              <div className="text-slate-400 mt-2">Explanation:</div>
              <div className="text-slate-300">Because nums[0] + nums[1] == 9, we return [0, 1].</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Example 2:</h3>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-slate-400">Input:</div>
              <div className="text-blue-400">nums = [3,2,4], target = 6</div>
              <div className="text-slate-400 mt-2">Output:</div>
              <div className="text-green-400">[1,2]</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Constraints:</h3>
            <ul className="text-slate-300 space-y-1 list-disc list-inside">
              <li><code className="bg-slate-700 px-2 py-1 rounded text-blue-400">2 ≤ nums.length ≤ 10⁴</code></li>
              <li><code className="bg-slate-700 px-2 py-1 rounded text-blue-400">-10⁹ ≤ nums[i] ≤ 10⁹</code></li>
              <li><code className="bg-slate-700 px-2 py-1 rounded text-blue-400">-10⁹ ≤ target ≤ 10⁹</code></li>
              <li><strong>Only one valid answer exists.</strong></li>
            </ul>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default QuestionPanel;
