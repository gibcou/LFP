import { useState, useEffect } from 'react'
import { Project } from '../lib/supabase'

// Projects built from local Assets for movies posters
const sampleProjects: Project[] = [
  {
    id: 'american-promise',
    title: 'American Promise',
    category: 'narrative',
    thumbnail_url: '/assets/movies/American Promise.jpg',
    trailer_url: '',
    imdb_url: 'https://www.imdb.com/find/?q=American%20Promise&s=tt',
    synopsis: `Captain Angela Bobbie Robinson returns home from the Iraq war charged with delivering effects to the family of her fallen comrade. Through this disparate collection of mementos, we learn about the lives of three American-born U.S. Army combat nurses, whose vastly opposing values collide in the most dangerous front-line hospital in Iraq.

1st Lieutenant Jeanie Crease, a rebel flag-waiving white woman from rural Alabama and Specialist Ani Mosstaghimi, a privileged Iranian American from California, lock horns with Bobbie, an older black experienced combat nurse from North Carolina.

The team soon becomes a well-oiled machine despite the many obstacles constantly in their way: relationships, rape, racism, heartache, humor, drug trafficking and death. American Promise is a film about love, loss, duty, and what it means to be a patriot in the face of generational racism.`,
    genre: 'Military/Drama/Action',
    screenwriter: 'Ryan Kelly & Ian Harris',
    producers: 'Julie Campbell',
    executive_producers: 'John Taylor, Kandy Bagley',
    status: 'Script',
    seeking: 'Financing & Distribution',
    description: 'Independent feature film with full details in the project page.',
    client: 'LFP',
    year: 2024,
    created_at: '2024-01-15T00:00:00Z'
  },
  {
    id: 'demons-among-us',
    title: 'Demons Among Us',
    category: 'narrative',
    thumbnail_url: '/assets/movies/Demons Among Us.jpg',
    trailer_url: '',
    imdb_url: 'https://www.imdb.com/find/?q=Demons%20Among%20Us&s=tt',
    tagline: '“In every family, some demons are real.”',
    genre: 'Horror',
    screenwriter: 'Thomas E. Kelly',
    director: 'Peter Ney',
    producers: 'Julie Campbell, Kandy Bagley',
    vfx: 'Mathew Dean Russell',
    status: 'Pre-production',
    seeking: 'Financing',
    cast: 'Nellie Sciutto, Terry Kiser, Tony Senzamici, Dimitrius Pulido, Wally Welch',
    budget: '$1.5M based on talent attachment',
    location: 'Upstate New York',
    synopsis: `In the eerie original screenplay Demons Among Us Father Jonathan, a knowledgeable Catholic priest, encounters a sinister force that has overtaken the children of the Gustus family in the quaint town of Lone Pine, California. The Gustus family, seeking peace away from the chaos of Los Angeles, soon faces terrifying supernatural occurrences.

As unsettling changes manifest in her children, Jane Gustus turns to Father Jonathan for help. With the situation spiraling out of control, the priest must gather his strength and resources to conduct a challenging exorcism, navigating both the dark entities and the skepticism of those around him.

The plot culminates in a dramatic confrontation, exploring themes of faith, family, and the eternal struggle between light and darkness.`,
    description: 'Horror feature currently in pre-production with financing sought.',
    client: 'LFP',
    year: 2024,
    created_at: '2024-01-16T00:00:00Z'
  },
  {
    id: 'looking-for-larkin',
    title: 'Looking for Larkin',
    category: 'narrative',
    thumbnail_url: '/assets/movies/Looking for Larkin.png',
    trailer_url: '',
    imdb_url: 'https://www.imdb.com/find/?q=Looking%20for%20Larkin&s=tt',
    description: 'Narrative feature poster from the LFP catalog.',
    client: 'LFP',
    status: 'Released',
    year: 2024,
    created_at: '2024-01-17T00:00:00Z'
  },
  {
    id: 'standby',
    title: 'Standby',
    category: 'narrative',
    thumbnail_url: '/assets/movies/Standby.png',
    trailer_url: '',
    imdb_url: 'https://www.imdb.com/find/?q=Standby&s=tt',
    tagline: '“Standby”',
    genre: 'Romantic Drama',
    screenwriter: 'Ian Harris',
    director: 'Ian Harris',
    cast: 'Sean Astin, John Cleese, Yunjin Kim, Abigal Breslin, Monica Potter, Bella Rochelle, Jay Mohr, Rick Gifford',
    filming: 'Fall 2024',
    status: 'Released',
    synopsis: `Standby is a late-in-life coming-of-age romantic drama about Matthew Holden Olsen, a socially repressed but knowledgeable 50-year-old man leaving home for the first time. Set in an airport over 24 hours, Matthew experiences life stages metaphorically through interactions with other travelers.

He meets Eve, a gate agent with her own unfulfilled dreams, who becomes his love interest and guide. As Matthew confronts his fears and experiences many “firsts,” the story explores themes of anxiety, innocence, and personal growth. Both Matthew and Eve must learn to pursue their dreams and overcome their fears, potentially finding love in the process.`,
    description: 'Romantic drama seeking distribution.',
    client: 'LFP',
    year: 2024,
    created_at: '2024-01-18T00:00:00Z'
  },
  {
    id: 'the-caller-returns',
    title: 'The Caller Returns',
    category: 'narrative',
    thumbnail_url: '/assets/movies/The Caller Returns.jpg',
    trailer_url: '',
    imdb_url: 'https://www.imdb.com/find/?q=The%20Caller%20Returns&s=tt',
    tagline: '“The Caller Returns”',
    genre: 'Horror, Mystery, Thriller',
    director: 'Samson Alli',
    producers: 'Julie Campbell, Jimmy Mathew, Rick Gifford',
    production_companies: 'Box Office Studios, Longhorn Film Productions',
    status: 'Released',
    synopsis: `Yetunde learns that the mysterious calls from a prank caller are from a psychopath who murdered her parents years ago. Anu will stop at nothing to fulfill his twisted vengeance. But Yetunde and her best friend, Farida aren’t going down a fight, and Anu is not the only one seeking revenge.

The Caller Returns is a story about failed fathers that create unintended consequences that impact their children. Our story is about flawed, and real characters set in Nigeria and present-day Montana. We pose the question for our audience, “whose revenge is it anyway?”`,
    description: 'Thriller seeking worldwide distribution.',
    client: 'LFP',
    year: 2024,
    created_at: '2024-01-19T00:00:00Z'
  },
  {
    id: 'tuff',
    title: 'Tuff',
    category: 'narrative',
    thumbnail_url: '/assets/movies/Tuff.png',
    trailer_url: '',
    imdb_url: 'https://www.imdb.com/find/?q=Tuff&s=tt',
    tagline: '"Sometimes there’s a line the state can’t cross."',
    genre: 'Action/Thriller',
    screenwriter: 'Sebastian MacLean',
    executive_producers: 'Thomas E. Kelly, John Taylor',
    producers: 'Sebastian MacLean, Julie Campbell, Kandy Bagley',
    status: 'Released',
    seeking: 'Financing/ Distribution',
    synopsis: `Tufford Shepherd, nicknamed Tuff, arrives in a small rural town after serving in Afghanistan, where he faced traumatic experiences that haunt him. Struggling to adapt to civilian life and provide for his family, Tuff’s challenges escalate when he confronts Jack Decklin, the new principal of his son Eric's school, over objectionable reading materials.

Initially cordial, the relationship deteriorates as Tuff’s requests for exemptions are dismissed, culminating in a heated school board meeting where he is arrested. Amid this turmoil, Tuff's old school mate, Kyle Laceman who is now serving as a public defender, steps in to offer his support. He reflects on how Tuff once defended him from bullies during their youth. As tensions rise, Principal Decklin paints Tuff as a dangerous parent, attempting to influence Tuff's wife, Jessica, to convince him to relent.

As circumstances spiral out of control, Tuff takes drastic action, immobilizing the police station to escape and retrieve his children. Meanwhile, Kyle attempts to mediate the situation, urging Tuff to surrender. However, a physical confrontation with Decklin triggers deeper emotional turmoil, leading to a dangerous chase as Decklin wrongly seizes Tuff's son.

The climax unfolds in a friend's cabin in the woods, where Tuff must confront not only Decklin's unraveling sanity but also make a harrowing choice that could determine the fate of his son and family. The film explores themes of sacrifice, parental love, and the struggle against bureaucratic systems.`,
    description: 'Action thriller in script stage seeking financing and distribution.',
    client: 'LFP',
    year: 2024,
    created_at: '2024-01-20T00:00:00Z'
  }
]

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setProjects(sampleProjects)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category)
  }

  return {
    projects,
    loading,
    error,
    getProjectsByCategory
  }
}
