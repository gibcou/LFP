import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://placeholder.supabase.co'
const supabaseAnonKey = 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Project {
  id: string
  title: string
  category?: string
  thumbnail_url: string
  trailer_url: string
  overview_url?: string
  synopsis?: string
  genre?: string
  screenwriter?: string
  producers?: string
  executive_producers?: string
  status?: string
  seeking?: string
  tagline?: string
  director?: string
  vfx?: string
  cast?: string
  budget?: string
  location?: string
  filming?: string
  production_companies?: string
  imdb_url?: string
  description: string
  client: string
  year: number
  created_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  headshot_url: string
  linkedin_url?: string
  display_order: number
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone?: string
  project_type: string
  budget_range: string
  message: string
  created_at: string
}
