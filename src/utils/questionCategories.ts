import { Question } from '../types';

export const QUESTION_CATEGORIES = [
  'Single correct option',
  'multiple correct options',
  'Statement wise questions',
  'Assertions and reasons',
  'Match the columns',
  'Diagramwise questions'
] as const;

export type QuestionCategory = (typeof QUESTION_CATEGORIES)[number];

export function getCategoryNumber(category: string): number {
  switch (category) {
    case 'Single correct option':
      return 1;
    case 'multiple correct options':
      return 2;
    case 'Statement wise questions':
      return 3;
    case 'Assertions and reasons':
      return 4;
    case 'Match the columns':
      return 5;
    case 'Diagramwise questions':
      return 6;
    default:
      return 1;
  }
}

export function getCategoryFormattedName(category: string): string {
  const num = getCategoryNumber(category);
  return `${num}. ${category}`;
}

/**
 * Intelligent categorization of any Question into one of the 6 NTA NEET categories:
 * 1. Single correct option
 * 2. multiple correct options
 * 3. Statement wise questions
 * 4. Assertions and reasons
 * 5. Match the columns
 * 6. Diagramwise questions
 */
export function getQuestionCategory(q: Partial<Question> | null | undefined): QuestionCategory {
  if (!q) return 'Single correct option';

  // Explicit override if already categorized
  const explicit = q.questionCategory || q.category;
  if (explicit && QUESTION_CATEGORIES.includes(explicit as any)) {
    return explicit as QuestionCategory;
  }

  const rawText = [
    q.questionText || '',
    q.explanation || '',
    Array.isArray(q.options) ? q.options.join(' ') : ''
  ].join(' ');

  const upper = rawText.toUpperCase();

  // 6. Diagramwise questions (has svg diagram, image asset, or explicit figure references)
  if (
    q.diagramSvg ||
    q.image ||
    q.solutionImage ||
    upper.includes('<SVG') ||
    upper.includes('GIVEN FIGURE') ||
    upper.includes('IN THE FIGURE') ||
    upper.includes('SHOWN IN FIGURE') ||
    upper.includes('GIVEN DIAGRAM') ||
    upper.includes('THE DIAGRAM SHOWS') ||
    upper.includes('CIRCUIT DIAGRAM') ||
    upper.includes('FOLLOWING GRAPH') ||
    upper.includes('GIVEN GRAPH') ||
    upper.includes('REPRESENTED IN THE FIGURE') ||
    upper.includes('IN THE GIVEN CIRCUIT')
  ) {
    return 'Diagramwise questions';
  }

  // 4. Assertions and reasons
  if (
    (upper.includes('ASSERTION') && upper.includes('REASON')) ||
    upper.includes('ASSERTION (A)') ||
    upper.includes('ASSERTION:') ||
    upper.includes('REASON (R)') ||
    upper.includes('REASON:') ||
    upper.includes('BOTH ASSERTION AND REASON') ||
    upper.includes('ASSERTION IS TRUE') ||
    upper.includes('ASSERTION IS FALSE')
  ) {
    return 'Assertions and reasons';
  }

  // 5. Match the columns
  if (
    upper.includes('COLUMN I') ||
    upper.includes('COLUMN-I') ||
    upper.includes('COLUMN 1') ||
    upper.includes('LIST I') ||
    upper.includes('LIST-I') ||
    upper.includes('MATCH THE COLUMN') ||
    upper.includes('MATCH THE FOLLOWING') ||
    upper.includes('MATCH LIST') ||
    upper.includes('MATCH COLUMN') ||
    upper.includes('COLUMN-1')
  ) {
    return 'Match the columns';
  }

  // 3. Statement wise questions
  if (
    upper.includes('STATEMENT I') ||
    upper.includes('STATEMENT-I') ||
    upper.includes('STATEMENT 1') ||
    upper.includes('STATEMENT II') ||
    upper.includes('STATEMENT-II') ||
    upper.includes('STATEMENT 2') ||
    upper.includes('TWO STATEMENTS') ||
    upper.includes('GIVEN BELOW ARE TWO STATEMENTS') ||
    upper.includes('WHICH OF THE FOLLOWING STATEMENT') ||
    upper.includes('CORRECT STATEMENT') ||
    upper.includes('INCORRECT STATEMENT') ||
    upper.includes('STATEMENT-WISE')
  ) {
    return 'Statement wise questions';
  }

  // 2. multiple correct options
  if (
    q.type === 'multiple_correct' ||
    q.type === 'multi_choice' ||
    q.multipleCorrect === true ||
    (Array.isArray(q.correctAnswer) && q.correctAnswer.length > 1) ||
    upper.includes('ONE OR MORE THAN ONE') ||
    upper.includes('MULTIPLE CORRECT') ||
    upper.includes('MORE THAN ONE OPTION')
  ) {
    return 'multiple correct options';
  }

  // 1. Single correct option (Default Standard NEET Pattern)
  return 'Single correct option';
}

/**
 * Styling badges for each of the 6 categories
 */
export function getCategoryBadgeClasses(cat: string): {
  badge: string;
  pill: string;
  border: string;
  dot: string;
} {
  const norm = cat.replace(/^\d+\.\s*/, '').trim();

  switch (norm) {
    case 'Diagramwise questions':
      return {
        badge: 'bg-cyan-50 text-cyan-900 border-cyan-300',
        pill: 'bg-cyan-500 text-white',
        border: 'border-cyan-300',
        dot: 'bg-cyan-500'
      };
    case 'Assertions and reasons':
      return {
        badge: 'bg-blue-50 text-blue-900 border-blue-300',
        pill: 'bg-blue-600 text-white',
        border: 'border-blue-300',
        dot: 'bg-blue-600'
      };
    case 'Match the columns':
      return {
        badge: 'bg-rose-50 text-rose-900 border-rose-300',
        pill: 'bg-rose-600 text-white',
        border: 'border-rose-300',
        dot: 'bg-rose-600'
      };
    case 'Statement wise questions':
      return {
        badge: 'bg-amber-50 text-amber-900 border-amber-300',
        pill: 'bg-amber-600 text-white',
        border: 'border-amber-300',
        dot: 'bg-amber-600'
      };
    case 'multiple correct options':
      return {
        badge: 'bg-purple-50 text-purple-900 border-purple-300',
        pill: 'bg-purple-600 text-white',
        border: 'border-purple-300',
        dot: 'bg-purple-600'
      };
    case 'Single correct option':
    default:
      return {
        badge: 'bg-emerald-50 text-emerald-900 border-emerald-300',
        pill: 'bg-emerald-600 text-white',
        border: 'border-emerald-300',
        dot: 'bg-emerald-600'
      };
  }
}
