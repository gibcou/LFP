-- Create contact_inquiries table
CREATE TABLE contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    project_type VARCHAR(100),
    budget_range VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Grant permissions
GRANT SELECT ON contact_inquiries TO anon;
GRANT ALL PRIVILEGES ON contact_inquiries TO authenticated;