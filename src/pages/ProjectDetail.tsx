import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useProjects } from '../hooks/useProjects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const { projects, loading, error } = useProjects();
  const project = projects.find(p => p.id === id);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/projects" className="text-gray-300 hover:text-white">← Back to Projects</Link>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 text-lg">Error loading project: {error}</p>
            </div>
          )}

          {!loading && !error && project && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div className="bg-black rounded-lg shadow-2xl flex items-center justify-center min-h-[480px]">
                <img
                  src={project.thumbnail_url}
                  alt={project.title}
                  className="max-h-[720px] max-w-full h-auto w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                {project.tagline && (
                  <p className="text-lg text-gray-300 italic mb-4">{project.tagline}</p>
                )}
                <div className="flex items-center gap-4 mb-6 text-gray-300">
                  <span className="uppercase text-red-500 font-medium">{project.category}</span>
                  <span>{project.year}</span>
                  <span>Client: {project.client}</span>
                </div>
                {project.synopsis && (
                  <div className="space-y-4 text-gray-300 whitespace-pre-line">
                    {project.synopsis}
                  </div>
                )}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  {project.genre && <div><span className="text-white font-semibold">Genre:</span> {project.genre}</div>}
                  {project.screenwriter && <div><span className="text-white font-semibold">Screenwriter:</span> {project.screenwriter}</div>}
                  {project.director && <div><span className="text-white font-semibold">Director:</span> {project.director}</div>}
                  {project.producers && <div><span className="text-white font-semibold">Producers:</span> {project.producers}</div>}
                  {project.executive_producers && <div><span className="text-white font-semibold">Executive Producers:</span> {project.executive_producers}</div>}
                  {project.vfx && <div><span className="text-white font-semibold">VFX:</span> {project.vfx}</div>}
                  {project.status && <div><span className="text-white font-semibold">Status:</span> {project.status}</div>}
                  {project.seeking && <div><span className="text-white font-semibold">Seeking:</span> {project.seeking}</div>}
                  {project.cast && <div className="md:col-span-2"><span className="text-white font-semibold">Cast:</span> {project.cast}</div>}
                  {project.budget && <div><span className="text-white font-semibold">Budget:</span> {project.budget}</div>}
                  {project.location && <div><span className="text-white font-semibold">Location:</span> {project.location}</div>}
                  {project.filming && <div><span className="text-white font-semibold">Filming:</span> {project.filming}</div>}
                  {project.production_companies && <div className="md:col-span-2"><span className="text-white font-semibold">Production Companies:</span> {project.production_companies}</div>}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
