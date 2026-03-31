export interface NewsItem {
  date: string;
  text: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  paperLink: string;
  codeLink?: string;
  selected: boolean;
  bestPaperAward?: boolean;
}