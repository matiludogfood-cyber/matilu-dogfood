import { useEffect } from 'react';
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/data/blogPosts';
import type { Section } from '@/types';

interface BlogPostSectionProps {
  slug: string;
  onBack: () => void;
  onSectionChange: (section: Section) => void;
}

const BlogPostSection = ({ slug, onBack, onSectionChange }: BlogPostSectionProps) => {
  const post = getPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post.id) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">Artículo no encontrado</h1>
          <p className="text-slate-600 mb-6">El artículo que buscas no existe o fue movido.</p>
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Blog
          </button>
          
          <span className="inline-block bg-[#25D366] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="h-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#2c5282] to-[#25D366] shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <div 
              className="bg-white rounded-2xl p-8 md:p-12 shadow-md prose prose-lg max-w-none
                prose-headings:text-[#1e3a5f] 
                prose-headings:font-bold
                prose-h2:text-2xl 
                prose-h2:mt-8 
                prose-h2:mb-4
                prose-p:text-slate-600 
                prose-p:leading-relaxed
                prose-strong:text-[#1e3a5f]
                prose-ul:text-slate-600
                prose-li:marker:text-[#25D366]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-3">
                <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {post.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-700 px-4 py-1 rounded-full text-sm hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-slate-600 font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Compartir:
              </span>
              <button 
                onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`, '_blank')}
                className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button 
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost && (
                <button 
                  onClick={() => onBack()}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left group"
                >
                  <span className="text-sm text-[#25D366] font-semibold flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Anterior
                  </span>
                  <h4 className="text-[#1e3a5f] font-bold group-hover:text-[#25D366] transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </button>
              )}
              {nextPost && (
                <button 
                  onClick={() => onBack()}
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-right group ${!prevPost ? 'md:col-start-2' : ''}`}
                >
                  <span className="text-sm text-[#25D366] font-semibold flex items-center gap-2 mb-2 justify-end">
                    Siguiente
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h4 className="text-[#1e3a5f] font-bold group-hover:text-[#25D366] transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </button>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author */}
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2c5282] to-[#25D366] flex items-center justify-center text-white text-2xl font-bold">
                M
              </div>
              <h4 className="text-lg font-bold text-[#1e3a5f]">{post.author}</h4>
              <p className="text-slate-500 text-sm mt-2">
                Expertos en nutrición canina y bienestar animal. Comprometidos con la salud de tu mejor amigo.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b-2 border-[#25D366] inline-block">
                Artículos Relacionados
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <div 
                    key={related.id}
                    onClick={() => onBack()}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2c5282] to-[#25D366] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1e3a5f] group-hover:text-[#25D366] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <span className="text-xs text-slate-400 mt-1 block">{related.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">¿Listo para probar?</h3>
              <p className="text-sm mb-4 opacity-90">
                Tu perro merece lo mejor. Comida 100% natural.
              </p>
              <button 
                onClick={() => onSectionChange('catalogo')}
                className="inline-block bg-white text-[#25D366] px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
              >
                Comprar Ahora
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSection;