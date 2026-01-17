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
('Julie Campbell', 'FOUNDER/PRODUCER', 'Julie Campbell has been a television and film producer for over twenty-five years. She worked as a producer, account executive and legal consultant for 10 years in Boston. In 1998 she produced her first feature film, a romantic comedy “Urban Relics” starring Frank Sivero and Richard Romanus.\n\nIn 2010, she relocated to Austin, Texas to work on feature films, consulting, developing, and collaborating on several independent film projects. In 2012, Julie worked closely as the head producer on the western comedy “One Lucky Moon” written and directed by the late Peter Bogdanovich, who passed away in 2022. Collaborating with Peter for the last 10 years was an honor, and experience of a lifetime…\n\nMarch 2024, she wrapped post – production on “The Caller Returns” a psychological thriller, which she was the head producer. Her next feature film is a heartfelt comedy “Standby” written and directed by Ian Harris, starring Sean Astin and John Cleese, filming this summer 2024, in Los Angeles.\n\nJulie is the founder and head producer of Longhorn Film Productions, an Austin based production company focusing on Independent Films and original Television Series. She is a production partner with acclaimed screenwriter Thomas E. Kelly, known for his westerns scripts which she & (LFP) will develop into indie films or television series. She is a signatory producer with the Writer’s Guild of America and a member of Women in Film, LA.', '/assets/bio/Julie-hs.png', 'https://linkedin.com/in/juliecampbell', 1),
('Kandy Bagley', 'PRODUCER', 'Kandy Bagley raised in the small town of Hereford, Texas, where she embraced the uncomplicated joys of rural life. Surrounded by scenic beauty of the West Texas Panhandle, she flourished in an atmosphere that nurtured her creativity. However, her family\'s decision to move to Dallas when she was a teen transformed a new chapter in her life. This shift not only broadened her horizons but also sparked her profound passion for a career in the entertainment industry right after completing her education.\nOver the years, Kandy has made a name for herself by appearing in various television series, with her role in Walker, Texas Ranger standing out as a highlight of her early career. She also gained recognition as a Knockout Girl on the PCW (Professional Championship Wrestling) Show, where her vibrant personality and enthusiasm captivated fans. Kandy has demonstrated her versatility within the industry, successfully taking on roles as a model, actress, and script supervisor. Currently, she serves as a producer for Longhorn Film Productions and Snakebite Entertainment, contributing significantly to the development of creative projects.', '/assets/bio/Kandy-hs.png', NULL, 2),
('John Taylor', 'EXECUTIVE PRODUCER', 'John E. Taylor has over 25 years of experience in project management, communications and as an IT specialist. John has written, produced, and recorded voice-overs for more than 200 productions including commercials, product evaluations and instructional videos.\n\nJohn was brought on as an Executive Producer for Longhorn Film Productions, LLC. to collaborate with owner/producer Julie Campbell to create, develop, produce, and distribute independent feature ﬁlm and television projects. He is developing his ﬁrst feature ﬁlm entitled “American Promise” based on the real lives of Army Nurses in the time of war, a subject very dear to him. With his skills of being an IT Specialist, Project Management, and his love of ﬁlm John looks forward to this chapter of his life.', '/assets/bio/John-Taylor-hs.jpeg', NULL, 3),
('Jimmy Mathews', 'PRODUCER', 'need info', '/assets/bio/Jimmy-hs.png', NULL, 4),
-- Removed Lisa Martinez seed entry
;
