export interface Resume {
  info: PersonalInfo;
  positions: Position[];
  summary: string;
  expandPositionsUrl: string;
  skills: { header?: string; items: string[] }[];
  projects: Project[];
}

export interface PersonalInfo {
  name: string;
  email: string;
  number: string;
  slogan: string;
  links?: { name: string; url: string }[];
}

export interface Position {
  title: string;
  tags?: string[];
  company: string;
  website?: string;
  period: {
    from: string;
    to?: string;
  };
  location: string;
  description: string;
  achievements: string[];
}
export interface Project {
  name: string;
  description: string;
  link: {
    name: string;
    url?: string;
  };
  private: boolean;
  tags?: string[];
}
