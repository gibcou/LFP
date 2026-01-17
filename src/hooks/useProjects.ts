import { useState, useEffect } from 'react'
import { Project } from '../lib/supabase'

// Sample data for demonstration
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Luxury Brand Campaign',
    category: 'commercial',
    thumbnail_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20brand%20commercial%20cinematic%20lighting%20high-end%20production%20values&image_size=landscape_16_9',
    trailer_url: 'https://vimeo.com/123456789',
    description: 'High-end commercial production showcasing luxury products with cinematic lighting and sophisticated visual storytelling.',
    client: 'Luxury Brand Co.',
    year: 2024,
    created_at: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Documentary: Texas Stories',
    category: 'documentary',
    thumbnail_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=documentary%20film%20texas%20landscape%20interview%20setup%20cinematic&image_size=landscape_16_9',
    trailer_url: 'https://vimeo.com/234567890',
    description: 'Feature-length documentary exploring the diverse stories and landscapes of Texas through intimate interviews and stunning cinematography.',
    client: 'Texas Heritage Foundation',
    year: 2023,
    created_at: '2023-12-01T00:00:00Z'
  },
  {
    id: '3',
    title: 'Short Film: The Journey',
    category: 'narrative',
    thumbnail_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=narrative%20short%20film%20cinematic%20lighting%20character%20drama&image_size=landscape_16_9',
    trailer_url: 'https://vimeo.com/345678901',
    description: 'Award-winning short film following a character\'s emotional journey through stunning visual storytelling and powerful performances.',
    client: 'Independent Production',
    year: 2023,
    created_at: '2023-11-15T00:00:00Z'
  },
  {
    id: '4',
    title: 'Tech Startup Launch',
    category: 'commercial',
    thumbnail_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=tech%20startup%20commercial%20modern%20slick%20cinematic%20lighting&image_size=landscape_16_9',
    trailer_url: 'https://vimeo.com/456789012',
    description: 'Dynamic commercial showcasing innovative technology with modern, sleek visuals and cutting-edge motion graphics.',
    client: 'Tech Innovations Inc.',
    year: 2024,
    created_at: '2024-02-01T00:00:00Z'
  },
  {
    id: '5',
    title: 'Music Video: Austin Nights',
    category: 'narrative',
    thumbnail_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=music%20video%20austin%20nights%20cinematic%20lighting%20atmospheric&image_size=landscape_16_9',
    trailer_url: 'https://vimeo.com/567890123',
    description: 'Stylish music video capturing the essence of Austin nightlife with atmospheric lighting and creative camera work.',
    client: 'Local Artist Collective',
    year: 2023,
    created_at: '2023-10-15T00:00:00Z'
  },
  {
    id: '6',
    title: 'Corporate Training Series',
    category: 'commercial',
    thumbnail_url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=corporate%20training%20video%20professional%20setup%20clean%20lighting&image_size=landscape_16_9',
    trailer_url: 'https://vimeo.com/678901234',
    description: 'Professional training video series with clean, corporate aesthetic and clear, engaging presentation style.',
    client: 'Corporate Solutions Ltd.',
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