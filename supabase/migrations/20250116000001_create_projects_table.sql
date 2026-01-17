-- Projects Table
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