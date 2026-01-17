-- Create projects table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) CHECK (category IN ('commercial', 'narrative', 'documentary')),
    thumbnail_url VARCHAR(500),
    trailer_url VARCHAR(500),
    description TEXT,
    client VARCHAR(255),
    year INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_year ON projects(year DESC);

-- Grant permissions
GRANT SELECT ON projects TO anon;
GRANT ALL PRIVILEGES ON projects TO authenticated;

-- Insert sample data
INSERT INTO projects (title, category, thumbnail_url, trailer_url, description, client, year) VALUES
('Luxury Brand Campaign', 'commercial', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20brand%20commercial%20cinematic%20lighting%20high-end%20production%20values&image_size=landscape_16_9', 'https://vimeo.com/123456789', 'High-end commercial production showcasing luxury products with cinematic lighting and sophisticated visual storytelling.', 'Luxury Brand Co.', 2024),
('Documentary: Texas Stories', 'documentary', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=documentary%20film%20texas%20landscape%20interview%20setup%20cinematic&image_size=landscape_16_9', 'https://vimeo.com/234567890', 'Feature-length documentary exploring the diverse stories and landscapes of Texas through intimate interviews and stunning cinematography.', 'Texas Heritage Foundation', 2023),
('Short Film: The Journey', 'narrative', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=narrative%20short%20film%20cinematic%20lighting%20character%20drama&image_size=landscape_16_9', 'https://vimeo.com/345678901', 'Award-winning short film following a character\'s emotional journey through stunning visual storytelling and powerful performances.', 'Independent Production', 2023),
('Tech Startup Launch', 'commercial', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=tech%20startup%20commercial%20modern%20slick%20cinematic%20lighting&image_size=landscape_16_9', 'https://vimeo.com/456789012', 'Dynamic commercial showcasing innovative technology with modern, sleek visuals and cutting-edge motion graphics.', 'Tech Innovations Inc.', 2024),
('Music Video: Austin Nights', 'narrative', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=music%20video%20austin%20nights%20cinematic%20lighting%20atmospheric&image_size=landscape_16_9', 'https://vimeo.com/567890123', 'Stylish music video capturing the essence of Austin nightlife with atmospheric lighting and creative camera work.', 'Local Artist Collective', 2023),
('Corporate Training Series', 'commercial', 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=corporate%20training%20video%20professional%20setup%20clean%20lighting&image_size=landscape_16_9', 'https://vimeo.com/678901234', 'Professional training video series with clean, corporate aesthetic and clear, engaging presentation style.', 'Corporate Solutions Ltd.', 2024);