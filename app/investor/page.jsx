'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    id: 'cover',
    title: 'Spring Leaf',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-8xl mb-8">🍃</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
          Spring Leaf
        </h1>
        <p className="text-2xl text-gray-300 mb-6">High Fidelity Periodontal Regeneration</p>
        <p className="text-lg text-gray-400">Investor Presentation</p>
        <div className="mt-12 text-sm text-gray-500">Gengyve / Adirondack Intelligence</div>
      </div>
    )
  },
  {
    id: 'problem',
    title: 'The Problem',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-red-400">The Problem</h2>
        <p className="text-2xl text-gray-300">Current periodontal regeneration produces structure without function.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Market Pain Points</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3"><span className="text-red-400">✗</span> 50% of adults have periodontal disease</li>
              <li className="flex gap-3"><span className="text-red-400">✗</span> Current treatments fail in 30-50% of cases</li>
              <li className="flex gap-3"><span className="text-red-400">✗</span> No true regeneration - only repair</li>
              <li className="flex gap-3"><span className="text-red-400">✗</span> Lost proprioception never restored</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Clinical Reality</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3"><span className="text-red-400">✗</span> Ankylosis (bone fuses to tooth)</li>
              <li className="flex gap-3"><span className="text-red-400">✗</span> No functional PDL attachment</li>
              <li className="flex gap-3"><span className="text-red-400">✗</span> Recurrent disease common</li>
              <li className="flex gap-3"><span className="text-red-400">✗</span> Tooth loss remains endpoint</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'insight',
    title: 'The Insight',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-emerald-400">The Insight</h2>
        <p className="text-2xl text-gray-300">Neural ingrowth precedes and coordinates periodontal regeneration.</p>
        <div className="flex flex-wrap justify-center gap-8 my-12">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🧠</span>
            </div>
            <div className="text-emerald-400 font-bold text-xl">NERVES</div>
            <div className="text-gray-500">First</div>
          </div>
          <div className="flex items-center text-4xl text-gray-600">→</div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🩸</span>
            </div>
            <div className="text-red-400 font-bold text-xl">VESSELS</div>
            <div className="text-gray-500">Second</div>
          </div>
          <div className="flex items-center text-4xl text-gray-600">→</div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🦷</span>
            </div>
            <div className="text-blue-400 font-bold text-xl">PDL</div>
            <div className="text-gray-500">Third</div>
          </div>
        </div>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          This developmental hierarchy is preserved in adult tissue but completely ignored by current therapies.
        </p>
      </div>
    )
  },
  {
    id: 'solution',
    title: 'The Solution',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-blue-400">The Solution</h2>
        <p className="text-2xl text-gray-300">4-Signal Minimal Viable Construct</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-gray-900 border border-emerald-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">NGF</div>
            <div className="text-sm text-gray-400 mt-2">Neural ingrowth</div>
          </div>
          <div className="bg-gray-900 border border-emerald-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">PDGF-BB</div>
            <div className="text-sm text-gray-400 mt-2">Vascular support</div>
          </div>
          <div className="bg-gray-900 border border-emerald-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">BMP-7</div>
            <div className="text-sm text-gray-400 mt-2">PDL formation</div>
          </div>
          <div className="bg-gray-900 border border-emerald-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">BDNF</div>
            <div className="text-sm text-gray-400 mt-2">Neural survival</div>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400">
            Delivered in a dual-crosslinked HA/alginate hydrogel (300-500 Pa) optimized for periodontal pocket injection
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'market',
    title: 'Market',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-emerald-400">Market Opportunity</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-emerald-900/30 to-gray-900/50 border border-emerald-500/30 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-emerald-400">$4.2B</div>
            <div className="text-gray-400 mt-2">Global Periodontal Regeneration Market</div>
            <div className="text-sm text-gray-500 mt-1">2024, growing at 8.2% CAGR</div>
          </div>
          <div className="bg-gradient-to-b from-blue-900/30 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-blue-400">$1.1B</div>
            <div className="text-gray-400 mt-2">US Addressable Market</div>
            <div className="text-sm text-gray-500 mt-1">Moderate-severe periodontitis</div>
          </div>
          <div className="bg-gradient-to-b from-purple-900/30 to-gray-900/50 border border-purple-500/30 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-purple-400">$340M</div>
            <div className="text-gray-400 mt-2">DSO Beachhead</div>
            <div className="text-sm text-gray-500 mt-1">Initial target segment</div>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mt-8">
          <h3 className="font-semibold text-white mb-4">Why DSOs First?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>• Centralized purchasing decisions</div>
            <div>• Standard treatment protocols</div>
            <div>• Data-driven outcomes tracking</div>
            <div>• Volume pricing leverage</div>
            <div>• Faster adoption curves</div>
            <div>• Reference site network</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'competitive',
    title: 'Competitive',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-orange-400">Competitive Landscape</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-4 text-gray-400 font-medium">Company</th>
                <th className="py-4 px-4 text-gray-400 font-medium">Approach</th>
                <th className="py-4 px-4 text-gray-400 font-medium">Neural Component</th>
                <th className="py-4 px-4 text-gray-400 font-medium">Stage</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800/50">
                <td className="py-4 px-4">Straumann (Emdogain)</td>
                <td className="py-4 px-4">Enamel matrix derivative</td>
                <td className="py-4 px-4 text-red-400">None</td>
                <td className="py-4 px-4">Market leader</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-4 px-4">Geistlich (Bio-Oss)</td>
                <td className="py-4 px-4">Bone graft + membrane</td>
                <td className="py-4 px-4 text-red-400">None</td>
                <td className="py-4 px-4">Established</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-4 px-4">BioHorizons (GEM 21S)</td>
                <td className="py-4 px-4">PDGF-BB + β-TCP</td>
                <td className="py-4 px-4 text-yellow-400">Indirect</td>
                <td className="py-4 px-4">Established</td>
              </tr>
              <tr className="bg-emerald-900/20">
                <td className="py-4 px-4 text-emerald-400 font-semibold">Spring Leaf</td>
                <td className="py-4 px-4">4-signal hydrogel</td>
                <td className="py-4 px-4 text-emerald-400 font-semibold">Primary driver</td>
                <td className="py-4 px-4">Pre-clinical</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-6 mt-4">
          <p className="text-emerald-400 font-semibold">Our Moat:</p>
          <p className="text-gray-400 mt-2">
            First-mover in neural-first regeneration. Strong IP position on 4-signal formulation and delivery system.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'business',
    title: 'Business Model',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-purple-400">Business Model</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-emerald-400 font-bold text-sm mb-3">PHASE 1</div>
            <h3 className="text-xl font-semibold text-white mb-4">Cell-Free Construct</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>ASP</span>
                <span className="text-white">$850/unit</span>
              </div>
              <div className="flex justify-between">
                <span>COGS</span>
                <span className="text-white">$180/unit</span>
              </div>
              <div className="flex justify-between">
                <span>Gross Margin</span>
                <span className="text-emerald-400">79%</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-emerald-400 font-bold text-sm mb-3">PHASE 2</div>
            <h3 className="text-xl font-semibold text-white mb-4">Construct + Cells</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>ASP</span>
                <span className="text-white">$2,400/unit</span>
              </div>
              <div className="flex justify-between">
                <span>COGS</span>
                <span className="text-white">$650/unit</span>
              </div>
              <div className="flex justify-between">
                <span>Gross Margin</span>
                <span className="text-emerald-400">73%</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-emerald-400 font-bold text-sm mb-3">PHASE 3</div>
            <h3 className="text-xl font-semibold text-white mb-4">Vertical Integration</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>ASP</span>
                <span className="text-white">$2,400/unit</span>
              </div>
              <div className="flex justify-between">
                <span>COGS</span>
                <span className="text-white">$420/unit</span>
              </div>
              <div className="flex justify-between">
                <span>Gross Margin</span>
                <span className="text-emerald-400">82%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4">Revenue Model</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-400">
            <div>• Direct sales to DSOs and periodontists</div>
            <div>• Distributor partnerships for reach</div>
            <div>• Training and certification programs</div>
            <div>• Premium pricing for premium outcomes</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'funds',
    title: 'Use of Funds',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-green-400">Use of Funds</h2>
        <p className="text-xl text-gray-300">Seeking $3.5M Seed Round</p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">R&D / Product Development</span>
                <span className="text-emerald-400 font-bold">45%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-emerald-500 rounded-full" />
              </div>
              <p className="text-xs text-gray-500 mt-2">$1.575M - Formulation optimization, preclinical studies</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Regulatory</span>
                <span className="text-blue-400 font-bold">25%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[25%] bg-blue-500 rounded-full" />
              </div>
              <p className="text-xs text-gray-500 mt-2">$875K - 510(k)/De Novo submission, consultants</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Manufacturing Scale-up</span>
                <span className="text-purple-400 font-bold">20%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[20%] bg-purple-500 rounded-full" />
              </div>
              <p className="text-xs text-gray-500 mt-2">$700K - CMO selection, process validation</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Operations / G&A</span>
                <span className="text-orange-400 font-bold">10%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[10%] bg-orange-500 rounded-full" />
              </div>
              <p className="text-xs text-gray-500 mt-2">$350K - Team expansion, facilities</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">18-Month Milestones</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Complete preclinical efficacy studies
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Submit 510(k)/De Novo application
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Establish CMO partnership
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                First-in-human pilot study design
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Key DSO partnership LOIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'team',
    title: 'Team',
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-cyan-400">Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Founder & CEO</h3>
                <p className="text-emerald-400">Gengyve / Adirondack Intelligence</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Neural-first periodontal regeneration visionary. Background in biotech commercialization and dental tissue engineering.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-2xl">
                🔬
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Scientific Advisors</h3>
                <p className="text-blue-400">Academic Partners</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Leading researchers in periodontal biology, neural regeneration, and biomaterials engineering.
            </p>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4">Key Hires (Seed Funding)</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-emerald-400 font-semibold">VP R&D</div>
              <div className="text-xs text-gray-500 mt-1">Formulation & preclinical</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-emerald-400 font-semibold">Regulatory Lead</div>
              <div className="text-xs text-gray-500 mt-1">FDA strategy</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-emerald-400 font-semibold">CMC Lead</div>
              <div className="text-xs text-gray-500 mt-1">Manufacturing</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-emerald-400 font-semibold">BD Lead</div>
              <div className="text-xs text-gray-500 mt-1">Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ask',
    title: 'The Ask',
    content: (
      <div className="space-y-8 text-center">
        <h2 className="text-4xl font-bold text-emerald-400">The Ask</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-emerald-900/30 to-gray-900/50 border border-emerald-500/30 rounded-2xl p-12">
            <div className="text-6xl font-bold text-emerald-400 mb-4">$3.5M</div>
            <div className="text-2xl text-gray-300 mb-2">Seed Round</div>
            <div className="text-gray-400">18-month runway to 510(k) submission</div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-white mb-2">Clear Regulatory Path</h3>
            <p className="text-sm text-gray-400">510(k)/De Novo for cell-free product</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-semibold text-white mb-2">$4.2B Market</h3>
            <p className="text-sm text-gray-400">Growing 8.2% annually</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">🧬</div>
            <h3 className="font-semibold text-white mb-2">First-Mover Advantage</h3>
            <p className="text-sm text-gray-400">Neural-first approach is novel</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'closing',
    title: 'Closing',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-8xl mb-8">🍃</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Regeneration with <span className="text-emerald-400">Function</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-12">
          Spring Leaf is the first periodontal regeneration platform that restores what matters: 
          neural function, proprioception, and true tissue integration.
        </p>
        <div className="space-y-2 text-gray-400">
          <p className="text-lg font-semibold text-white">Gengyve / Adirondack Intelligence</p>
          <p>spring-leaf-platform</p>
        </div>
      </div>
    )
  }
]

export default function InvestorPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide(Math.min(currentSlide + 1, slides.length - 1))
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(Math.max(currentSlide - 1, 0))
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {currentSlide + 1} / {slides.length}
              </span>
              <span className="text-2xl">🍃</span>
            </div>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-800 py-6 flex-shrink-0">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-emerald-500 w-6'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="text-center text-xs text-gray-600 mt-4">
              Use arrow keys to navigate
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}