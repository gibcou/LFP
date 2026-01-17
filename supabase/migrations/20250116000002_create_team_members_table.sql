-- Team Members Table
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