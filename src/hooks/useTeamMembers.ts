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
    name: 'Michael Rodriguez',
    role: 'Director of Photography',
    bio: 'Michael is an award-winning cinematographer with a passion for creating stunning visual narratives. His expertise spans from commercial work to feature films, with a keen eye for lighting and composition that brings stories to life.',
    headshot_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20cinematographer%20headshot%20artistic%20professional%20lighting&image_size=square_hd',
    linkedin_url: 'https://linkedin.com/in/michaelrodriguez',
    display_order: 2
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Producer',
    bio: 'Emily has produced over 50 projects ranging from commercials to documentaries. Her organizational skills and industry knowledge ensure every production runs smoothly, on time, and within budget while maintaining the highest creative standards.',
    headshot_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20film%20producer%20headshot%20organized%20professional%20lighting&image_size=square_hd',
    linkedin_url: 'https://linkedin.com/in/emilychen',
    display_order: 3
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Editor & Post-Production',
    bio: 'David specializes in crafting compelling narratives through expert editing. With expertise in Adobe Premiere Pro, DaVinci Resolve, and After Effects, he transforms raw footage into polished, engaging content that captivates audiences.',
    headshot_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20film%20editor%20headshot%20creative%20professional%20lighting&image_size=square_hd',
    linkedin_url: 'https://linkedin.com/in/davidthompson',
    display_order: 4
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    role: 'Sound Designer',
    bio: 'Lisa brings over 8 years of experience in audio production and sound design. Her work spans from dialogue editing and ADR to creating immersive soundscapes that enhance the emotional impact of every project she works on.',
    headshot_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20sound%20designer%20headshot%20artistic%20professional%20lighting&image_size=square_hd',
    linkedin_url: 'https://linkedin.com/in/lisamartinez',
    display_order: 5
  }
]

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setTeamMembers(sampleTeamMembers)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return {
    teamMembers,
    loading,
    error,
    fetchTeamMembers: () => {}
  }
}
