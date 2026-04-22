import { blogPosts, categories } from '@/data/blogPosts';
import type { Section } from '@/types';

interface BlogSectionProps {
  onBlogClick: (slug: string) => void;
  onSectionChange: (section: Section) => void;
}

const BlogSection = ({ onBlogClick, onSectionChange }: BlogSectionProps) => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => onBlogClick(post.slug)}
              >
                <div className="h-64 bg-gradient-to-br from-[#2c5282] to-[#25D366] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#25D366] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime} de lectura
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3 hover:text-[#25D366] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <span className="flex items-center gap-2 text-[#1e3a5f] font-semibold group">
                      Leer más
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b-2 border-[#25D366] inline-block">
                Categorías
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-slate-700 hover:text-[#25D366] cursor-pointer transition-colors">
                      {cat.name}
                    </span>
                    <span className="bg-slate-100 text-[#1e3a5f] text-xs font-bold px-2 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 pb-2 border-b-2 border-[#25D366] inline-block">
                Más Leídos
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div 
                    key={post.id}
                    onClick={() => onBlogClick(post.slug)}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2c5282] to-[#25D366] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1e3a5f] group-hover:text-[#25D366] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-slate-400 mt-1 block">{post.date}</span>
                    </div>
                  </div>
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-[#25D366] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  Suscribirme
                </button>
              </form>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">¿Ya probaste Matilú?</h3>
              <p className="text-sm mb-4 opacity-90">
                Comida 100% natural para tu mejor amigo.
              </p>
              <button 
                onClick={() => onSectionChange('catalogo')}
                className="inline-block bg-white text-[#25D366] px-6 py-2 rounded-full font-bold hover:bg-slate-100 transition-colors"
              >
                Ver Productos
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;