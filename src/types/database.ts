export interface Project {
  id: string;
  title: string;
  category: 'commercial' | 'narrative' | 'documentary';
  thumbnail_url: string;
  trailer_url: string;
  description: string;
  client: string;
  year: number;
  created_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  headshot_url: string;
  linkedin_url?: string;
  display_order: number;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  project_type?: string;
  budget_range?: string;
  message: string;
  created_at: string;
}