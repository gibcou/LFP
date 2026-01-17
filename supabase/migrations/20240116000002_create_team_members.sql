-- Create team_members table
CREATE TABLE team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    bio TEXT,
    headshot_url VARCHAR(500),
    linkedin_url VARCHAR(500),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Grant permissions
GRANT SELECT ON team_members TO anon;
GRANT ALL PRIVILEGES ON team_members TO authenticated;

-- Insert sample data
INSERT INTO team_members (name, role, bio, headshot_url, linkedin_url, display_order) VALUES
('Sarah Johnson', 'Creative Director', 'With over 12 years of experience in film and commercial production, Sarah brings a unique vision and storytelling expertise to every project. Her work has been featured at major film festivals and she has directed campaigns for Fortune 500 companies.', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20creative%20director%20headshot%20confident%20professional%20lighting&image_size=square_hd', 'https://linkedin.com/in/sarahjohnson', 1),
('Michael Rodriguez', 'Director of Photography', 'Michael is an award-winning cinematographer with a passion for creating stunning visual narratives. His expertise spans from commercial work to feature films, with a keen eye for lighting and composition that brings stories to life.', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20cinematographer%20headshot%20artistic%20professional%20lighting&image_size=square_hd', 'https://linkedin.com/in/michaelrodriguez', 2),
('Emily Chen', 'Producer', 'Emily has produced over 50 projects ranging from commercials to documentaries. Her organizational skills and industry knowledge ensure every production runs smoothly, on time, and within budget while maintaining the highest creative standards.', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20film%20producer%20headshot%20organized%20professional%20lighting&image_size=square_hd', 'https://linkedin.com/in/emilychen', 3),
('David Thompson', 'Editor & Post-Production', 'David specializes in crafting compelling narratives through expert editing. With expertise in Adobe Premiere Pro, DaVinci Resolve, and After Effects, he transforms raw footage into polished, engaging content that captivates audiences.', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20film%20editor%20headshot%20creative%20professional%20lighting&image_size=square_hd', 'https://linkedin.com/in/davidthompson', 4),
('Lisa Martinez', 'Sound Designer', 'Lisa brings over 8 years of experience in audio production and sound design. Her work spans from dialogue editing and ADR to creating immersive soundscapes that enhance the emotional impact of every project she works on.', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20sound%20designer%20headshot%20artistic%20professional%20lighting&image_size=square_hd', 'https://linkedin.com/in/lisamartinez', 5);