export type ExamType = 'NEET' | 'JEE_MAIN' | 'JEE_ADVANCED' | 'CUET' | 'OLYMPIAD' | 'FOUNDATION' | 'BOARDS';

export type TestCategory = 'minor' | 'major' | 'part' | 'full' | 'neet_mock' | 'custom' | 'dpp';

export interface Question {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  chapter: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionText: string;
  image?: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  pyqYear?: number;
  tags?: string[];
}

export interface TestItem {
  id: string;
  title: string;
  category: TestCategory;
  exam: ExamType;
  syllabus: string;
  totalQuestions: number;
  durationMinutes: number;
  totalMarks: number;
  negativeMarking: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Mixed';
  scheduledDate?: string;
  cbtMode: boolean;
  features: string[];
  questions: Question[];
  enrolledStudentsCount?: number;
  avgScore?: number;
}

export interface OnlineCourse {
  id: string;
  title: string;
  batchType: 'Target Batch' | 'Masterclass' | 'Foundation' | 'Dropper Batch' | 'Crash Course' | 'Classroom Test Series';
  targetExam: ExamType;
  duration: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  enrolledCount: number;
  badge?: string;
  features: string[];
  includes: {
    liveClasses: string;
    recordedClasses: string;
    assignments: string;
    weeklyTests: string;
    mentorSupport: string;
  };
  faculty: {
    name: string;
    subject: string;
    exp: string;
    almaMater: string;
  }[];
}

export interface Flashcard {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  category: 'Formulas' | 'Reactions' | 'Diagrams' | 'Concepts';
  topic: string;
  frontTitle: string;
  frontContent: string;
  frontFormula?: string;
  backExplanation: string;
  backKeyPoints: string[];
  mnemonic?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface MindMapNode {
  id: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  description: string;
  children?: {
    title: string;
    details: string[];
    subTopics?: string[];
  }[];
}

export interface BookItem {
  id: string;
  title: string;
  category: 'NCERT notes' | 'Revision notes' | 'Formula books' | 'eBooks' | 'PDFs';
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics' | 'All';
  pages: number;
  size: string;
  description: string;
  downloadUrl?: string;
  rating: number;
  highlights: string[];
}

export interface PYQItem {
  id: string;
  exam: 'NEET' | 'JEE Main' | 'JEE Advanced';
  year: number;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';
  chapter: string;
  topic: string;
  question: Question;
  frequency: string;
  conceptWeightage: string;
}

export interface RankerStory {
  id: string;
  name: string;
  exam: 'NEET' | 'JEE';
  air: number;
  score: string;
  college: string;
  image: string;
  quote: string;
  state: string;
  year: number;
  category: string;
  keyStrategy: string;
}

export interface CollegeInfo {
  id: string;
  name: string;
  type: 'AIIMS' | 'Government' | 'Private' | 'IIT / NIT';
  location: string;
  totalSeats: number;
  closingRankGen: number;
  closingRankOBC: number;
  closingRankSC: number;
  closingRankST: number;
  approxFeePerYear: string;
  nirfRank: number;
}

export interface UserTestResult {
  testId: string;
  testTitle: string;
  score: number;
  totalMarks: number;
  correctAnswers: number;
  wrongAnswers: number;
  unattempted: number;
  timeSpentSeconds: number;
  accuracyPercentage: number;
  predictedAIR: number;
  nationalPercentile: number;
  subjectBreakdown: {
    subject: string;
    correct: number;
    wrong: number;
    unattempted: number;
    score: number;
  }[];
  weakChapters: string[];
  strongChapters: string[];
  revisionSuggestions: string[];
  answers: Record<number, number>; // questionIdx -> selectedOption
}
