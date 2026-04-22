import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../data/blogPosts';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog Matilú
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Consejos, nutrición y amor para tu mejor amigo. Todo lo que necesitas saber para mantener a tu perro feliz y saludable.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Posts Grid */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-64 bg-gradient-to-br from-[#2c5282] to-[#d69e2e] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d69e2e] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} de lectura
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3 hover:text-[#d69e2e] transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#d69e2e] transition-all hover:gap-3"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b-2 border-[#d69e2e] inline-block">
                Categorías
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 hover:text-[#d69e2e] cursor-pointer transition-colors">
                      {cat.name}
                    </span>
                    <span className="bg-gray-100 text-[#1e3a5f] text-xs font-bold px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b-2 border-[#d69e2e] inline-block">
                Más Leídos
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2c5282] to-[#d69e2e] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1e3a5f] group-hover:text-[#d69e2e] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-400 mt-1 block">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Newsletter</h3>
              <p className="text-blue-100 text-sm mb-4">
                Recibe consejos exclusivos y ofertas especiales para tu perro.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-[#d69e2e] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d69e2e] text-white py-3 rounded-xl font-semibold hover:bg-[#ecc94b] transition-colors"
                >
                  Suscribirme
                </button>
              </form>
            </div>

            {/* CTA */}
            <div className="bg-[#d69e2e] rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">¿Ya probaste Matilú?</h3>
              <p className="text-sm mb-4 opacity-90">
                Comida 100% natural para tu mejor amigo.
              </p>
              <a 
                href="https://matiludogfood.netlify.app/"
                className="inline-block bg-white text-[#d69e2e] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Ver Productos
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

export default Blog;