'use client'

import Link from 'next/link'

export default function Home() {
  const navCards = [
    {
      title: 'Science Platform',
      description: 'Neural-first regeneration, 4-signal construct, hydrogel technology',
      href: '/science',
      icon: '🔬'
    },
    {
      title: 'Investor Deck',
      description: '$4.2B market opportunity, business model, use of funds',
      href: '/investor',
      icon: '📊'
    },
    {
      title: 'Regulatory Roadmap',
      description: '510(k), BLA pathway, clinical milestones',
      href: '/regulatory',
      icon: '📋'
    },
    {
      title: 'Manufacturing Plan',
      description: 'Scaling strategy, vertical integration, domestic sourcing',
      href: '/manufacturing',
      icon: '🏭'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-7xl mb-6">🍃</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Spring Leaf
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              High Fidelity Periodontal Regeneration
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The first regenerative construct that recapitulates the neural-first developmental hierarchy
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-emerald-500/50 hover:bg-gray-900 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{card.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{card.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-emerald-500 text-sm font-medium">
                Explore
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Platform Continuity Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <span className="text-emerald-400 font-semibold">Platform Evolution</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                From <span className="text-emerald-400">Gengyve</span> to{' '}
                <span className="text-green-300">Spring Leaf</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Gengyve pioneered the fundamental science of neural-first periodontal regeneration. 
                Spring Leaf represents the commercialization platform—translating breakthrough research 
                into clinically-validated, FDA-cleared regenerative constructs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-gray-300">Same science, same team, same vision</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-gray-300">Optimized for clinical translation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-gray-300">Built for regulatory success</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-gray-300">Designed for scalable manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovation */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Neural-First Paradigm</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">NERVES</h3>
            <p className="text-gray-400">Neural ingrowth initiates the regenerative cascade</p>
          </div>
          <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="text-4xl mb-4">🩸</div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">VESSELS</h3>
            <p className="text-gray-400">Vascular network follows neural pathways</p>
          </div>
          <div className="text-center p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="text-4xl mb-4">🦷</div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">PDL</h3>
            <p className="text-gray-400">Functional periodontal ligament with proper fiber orientation</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍃</span>
              <div>
                <p className="font-semibold text-white">Spring Leaf Platform</p>
                <p className="text-sm text-gray-400">Gengyve / Adirondack Intelligence</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/science" className="hover:text-emerald-400 transition-colors">Science</Link>
              <Link href="/investor" className="hover:text-emerald-400 transition-colors">Investors</Link>
              <Link href="/regulatory" className="hover:text-emerald-400 transition-colors">Regulatory</Link>
              <Link href="/manufacturing" className="hover:text-emerald-400 transition-colors">Manufacturing</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Gengyve / Adirondack Intelligence. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
