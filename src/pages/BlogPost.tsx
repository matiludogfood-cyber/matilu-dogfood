import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts, getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post.id) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-6">El artículo que buscas no existe o fue movido.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-[#d69e2e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e3a5f] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Matilú" 
                className="h-12 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-2xl font-bold text-[#1e3a5f]">MATILÚ</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#1e3a5f] font-semibold hover:text-[#d69e2e] transition-colors">
                Inicio
              </Link>
              <Link to="/blog" className="text-[#d69e2e] font-semibold">
                Blog
              </Link>
              <a 
                href="https://matiludogfood.netlify.app/" 
                className="bg-[#d69e2e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1e3a5f] transition-all hover:-translate-y-0.5"
              >
                Tienda
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </button>
          
          <span className="inline-block bg-[#d69e2e] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="h-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#2c5282] to-[#d69e2e] shadow-2xl overflow-hidden relative">
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
                prose-p:text-gray-600 
                prose-p:leading-relaxed
                prose-strong:text-[#1e3a5f]
                prose-ul:text-gray-600
                prose-li:marker:text-[#d69e2e]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="w-5 h-5 text-[#d69e2e]" />
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-[#d69e2e] hover:text-white transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartir:
              </span>
              <button 
                onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`, '_blank')}
                className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button 
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost && (
                <Link 
                  to={`/blog/${prevPost.slug}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <span className="text-sm text-[#d69e2e] font-semibold flex items-center gap-2 mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </span>
                  <h4 className="text-[#1e3a5f] font-bold group-hover:text-[#d69e2e] transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link 
                  to={`/blog/${nextPost.slug}`}
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group ${!prevPost ? 'md:col-start-2' : ''}`}
                >
                  <span className="text-sm text-[#d69e2e] font-semibold flex items-center gap-2 mb-2 justify-end">
                    Siguiente
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <h4 className="text-[#1e3a5f] font-bold group-hover:text-[#d69e2e] transition-colors line-clamp-2 text-right">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author */}
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2c5282] to-[#d69e2e] flex items-center justify-center text-white text-2xl font-bold">
                M
              </div>
              <h4 className="text-lg font-bold text-[#1e3a5f]">{post.author}</h4>
              <p className="text-gray-500 text-sm mt-2">
                Expertos en nutrición canina y bienestar animal. Comprometidos con la salud de tu mejor amigo.
              </p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b-2 border-[#d69e2e] inline-block">
                Artículos Relacionados
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2c5282] to-[#d69e2e] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1e3a5f] group-hover:text-[#d69e2e] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">{related.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#d69e2e] to-[#ecc94b] rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">¿Listo para probar?</h3>
              <p className="text-sm mb-4 opacity-90">
                Tu perro merece lo mejor. Comida 100% natural.
              </p>
              <a 
                href="https://matiludogfood.netlify.app/"
                className="inline-block bg-white text-[#d69e2e] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Comprar Ahora
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-200">
             2026 Matilú Dog Food. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;