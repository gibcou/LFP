import { useState, useEffect } from 'react'
import { TeamMember } from '../lib/supabase'

// Sample data for demonstration
const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Julie Campbell',
    role: 'FOUNDER/PRODUCER',
    bio: `Julie Campbell has been a television and film producer for over twenty-five years. She worked as a producer, account executive and legal consultant for 10 years in Boston. In 1998 she produced her first feature film, a romantic comedy “Urban Relics” starring Frank Sivero and Richard Romanus.

In 2010, she relocated to Austin, Texas to work on feature films, consulting, developing, and collaborating on several independent film projects. In 2012, Julie worked closely as the head producer on the western comedy “One Lucky Moon” written and directed by the late Peter Bogdanovich, who passed away in 2022. Collaborating with Peter for the last 10 years was an honor, and experience of a lifetime…

March 2024, she wrapped post – production on “The Caller Returns” a psychological thriller, which she was the head producer. Her next feature film is a heartfelt comedy “Standby” written and directed by Ian Harris, starring Sean Astin and John Cleese, filming this summer 2024, in Los Angeles.

Julie is the founder and head producer of Longhorn Film Productions, an Austin based production company focusing on Independent Films and original Television Series. She is a production partner with acclaimed screenwriter Thomas E. Kelly, known for his westerns scripts which she & (LFP) will develop into indie films or television series. She is a signatory producer with the Writer’s Guild of America and a member of Women in Film, LA.`,
    headshot_url: '/assets/bio/Julie-hs.png',
    linkedin_url: 'https://linkedin.com/in/juliecampbell',
    display_order: 1
  },
  {
    id: '2',
    name: 'Kandy Bagley',
    role: 'PRODUCER',
    bio: `Kandy Bagley raised in the small town of Hereford, Texas, where she embraced the uncomplicated joys of rural life. Surrounded by scenic beauty of the West Texas Panhandle, she flourished in an atmosphere that nurtured her creativity. However, her family's decision to move to Dallas when she was a teen transformed a new chapter in her life. This shift not only broadened her horizons but also sparked her profound passion for a career in the entertainment industry right after completing her education.
Over the years, Kandy has made a name for herself by appearing in various television series, with her role in Walker, Texas Ranger standing out as a highlight of her early career. She also gained recognition as a Knockout Girl on the PCW (Professional Championship Wrestling) Show, where her vibrant personality and enthusiasm captivated fans. Kandy has demonstrated her versatility within the industry, successfully taking on roles as a model, actress, and script supervisor. Currently, she serves as a producer for Longhorn Film Productions and Snakebite Entertainment, contributing significantly to the development of creative projects.`,
    headshot_url: '/assets/bio/Kandy-hs.png',
    display_order: 2
  },
  {
    id: '3',
    name: 'John Taylor',
    role: 'EXECUTIVE PRODUCER',
    bio: `John E. Taylor has over 25 years of experience in project management, communications and as an IT specialist. John has written, produced, and recorded voice-overs for more than 200 productions including commercials, product evaluations and instructional videos.

John was brought on as an Executive Producer for Longhorn Film Productions, LLC. to collaborate with owner/producer Julie Campbell to create, develop, produce, and distribute independent feature ﬁlm and television projects. He is developing his ﬁrst feature ﬁlm entitled “American Promise” based on the real lives of Army Nurses in the time of war, a subject very dear to him. With his skills of being an IT Specialist, Project Management, and his love of ﬁlm John looks forward to this chapter of his life.`,
    headshot_url: '/assets/bio/John-Taylor-hs.jpeg',
    display_order: 3
  },
  {
    id: '4',
    name: 'Jimmy Mathews',
    role: 'PRODUCER',
    bio: 'need info',
    headshot_url: '/assets/bio/Jimmy-hs.png',
    display_order: 4
  },
  
]

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setTeamMembers(sampleTeamMembers)
    setLoading(false)
  }, [])

  return {
    teamMembers,
    loading,
    error,
    fetchTeamMembers: () => {}
  }
}
