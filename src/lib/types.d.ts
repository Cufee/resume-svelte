export interface Resume {
  info: PersonalInfo;
  positions: Position[];
  summary: string;
  skills: { [header: string]: string[] };
}

export interface PersonalInfo {
  name: string;
  email: string;
  number: string;
  slogan: string;
}

export interface Position {
  title: string;
  company: string;
  website?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}
