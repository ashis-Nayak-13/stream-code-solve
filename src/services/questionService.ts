
export interface QuestionData {
  questionId: number;
  questionTitle: string;
  questionDescription: string;
  constraints: string[];
  example: {
    input: string;
    output: string;
  };
  hints: string[];
  tags: string[];
  difficulty: string;
}

export const fetchQuestion = async (questionId?: number): Promise<QuestionData> => {
  try {
    // Replace with your actual API endpoint
    const response = await fetch(`/api/questions/${questionId || 1}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch question');
    }
    
    const questionData = await response.json();
    return questionData;
  } catch (error) {
    console.error('Error fetching question:', error);
    
    // Fallback to mock data if API fails
    return {
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
  }
};
