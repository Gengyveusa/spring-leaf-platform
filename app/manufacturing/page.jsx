'use client'

import Link from 'next/link'

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400'
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400'
  }
}

export default function ManufacturingPage() {
  const phases = [
    {
      phase: 1,
      title: 'Contract Manufacturing',
      timeline: 'Months 0-24',
      description: 'Partner with established CMOs for initial production. Focus on product development and regulatory clearance.',
      strategy: [
        'Select FDA-registered CMO with hydrogel/biologics experience',
        'Tech transfer of formulation and process',
        'Establish QA/QC specifications',
        'Build inventory for launch'
      ],
      costs: {
        setup: '$200K-300K',
        perUnit: '$180',
        batchSize: '500 units',
        capacity: '10,000 units/year'
      },
      advantages: [
        'Minimal capital investment',
        'Leverage existing FDA-compliant facilities',
        'Flexible scaling',
        'Focus resources on R&D and commercialization'
      ],
      risks: [
        'Supply chain dependence',
        'Lower margins',
        'IP exposure',
        'Quality control distance'
      ],
      color: 'emerald'
    },
    {
      phase: 2,
      title: 'Hybrid Model',
      timeline: 'Months 24-48',
      description: 'In-house QC and finishing operations while maintaining CMO for bulk manufacturing.',
      strategy: [
        'Establish in-house quality laboratory',
        'Bring final formulation and packaging in-house',
        'Maintain CMO for component manufacturing',
        'Build cell processing capabilities for Phase 2 product'
      ],
      costs: {
        setup: '$1.5M-2M',
        perUnit: '$140',
        batchSize: '1,000 units',
        capacity: '50,000 units/year'
      },
      advantages: [
        'Improved margins (22% reduction in COGS)',
        'Better quality control',
        'Faster iteration on formulation',
        'Cell handling expertise development'
      ],
      risks: [
        'Increased capital requirements',
        'Regulatory complexity (facility registration)',
        'Staffing challenges'
      ],
      color: 'blue'
    },
    {
      phase: 3,
      title: 'Vertical Integration',
      timeline: 'Months 48+',
      description: 'Full in-house manufacturing with domestic sourcing. Maximum control and margins.',
      strategy: [
        'Dedicated manufacturing facility',
        'Domestic raw material sourcing',
        'In-house cell banking and processing',
        'Automated production lines'
      ],
      costs: {
        setup: '$8M-12M',
        perUnit: '$85',
        batchSize: '5,000 units',
        capacity: '500,000 units/year'
      },
      advantages: [
        'Maximum gross margins (82%+)',
        'Complete supply chain control',
        'Rapid response to demand',
        'Full IP protection'
      ],
      risks: [
        'Significant capital investment',
        'Facility qualification timelines',
        'Operational complexity'
      ],
      color: 'purple'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍃</span>
              <span className="font-semibold text-emerald-400">Manufacturing Plan</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Manufacturing Strategy</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Phased approach from contract manufacturing to full vertical integration.
          </p>
        </div>

        {/* Cost Progression Chart */}
        <div className="mb-16 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">COGS Progression</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400">$180</div>
              <div className="text-sm text-gray-400 mt-1">Phase 1</div>
              <div className="h-32 flex items-end justify-center mt-4">
                <div className="w-16 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: '100%' }} />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">$140</div>
              <div className="text-sm text-gray-400 mt-1">Phase 2</div>
              <div className="text-xs text-emerald-400 mt-0.5">-22%</div>
              <div className="h-32 flex items-end justify-center mt-4">
                <div className="w-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{ height: '78%' }} />
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">$85</div>
              <div className="text-sm text-gray-400 mt-1">Phase 3</div>
              <div className="text-xs text-emerald-400 mt-0.5">-53%</div>
              <div className="h-32 flex items-end justify-center mt-4">
                <div className="w-16 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{ height: '47%' }} />
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Cost per unit decreases as manufacturing scales and moves in-house
          </p>
        </div>

        {/* Phase Cards */}
        <div className="space-y-8">
          {phases.map((phase) => {
            const colors = colorClasses[phase.color]
            return (
            <div
              key={phase.phase}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden"
            >
              {/* Phase Header */}
              <div className={`${colors.bg} border-b border-gray-800 px-8 py-6`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className={`${colors.text} font-bold text-sm mb-1`}>PHASE {phase.phase}</div>
                    <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                  </div>
                  <div className="text-gray-400">
                    <span className="font-semibold text-white">{phase.timeline}</span>
                  </div>
                </div>
                <p className="text-gray-400 mt-4">{phase.description}</p>
              </div>

              {/* Phase Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Strategy */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Strategy</h3>
                    <ul className="space-y-2">
                      {phase.strategy.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className={colors.text}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Costs */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Cost Structure</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Setup Cost</span>
                        <span className="text-white font-semibold">{phase.costs.setup}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Cost per Unit</span>
                        <span className={`${colors.text} font-semibold`}>{phase.costs.perUnit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Batch Size</span>
                        <span className="text-white">{phase.costs.batchSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Annual Capacity</span>
                        <span className="text-white">{phase.costs.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advantages & Risks */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Trade-offs</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-emerald-400 font-semibold mb-2">ADVANTAGES</div>
                        <ul className="space-y-1">
                          {phase.advantages.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                              <span className="text-emerald-400">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs text-orange-400 font-semibold mb-2">RISKS</div>
                        <ul className="space-y-1">
                          {phase.risks.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                              <span className="text-orange-400">−</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>

        {/* Supply Chain */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Supply Chain Components</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🧪</div>
              <h3 className="font-semibold text-white mb-2">Hyaluronic Acid</h3>
              <p className="text-sm text-gray-400 mb-3">Medical-grade HA for hydrogel base</p>
              <div className="text-xs text-gray-500">
                <div>Source: Fermentation-derived</div>
                <div>Phase 3: Domestic supplier</div>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="font-semibold text-white mb-2">Alginate</h3>
              <p className="text-sm text-gray-400 mb-3">Ultra-pure alginate for crosslinking</p>
              <div className="text-xs text-gray-500">
                <div>Source: Seaweed-derived</div>
                <div>Phase 3: Domestic supplier</div>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="font-semibold text-white mb-2">Growth Factors</h3>
              <p className="text-sm text-gray-400 mb-3">NGF, PDGF-BB, BMP-7, BDNF</p>
              <div className="text-xs text-gray-500">
                <div>Source: Recombinant production</div>
                <div>Phase 3: In-house expression</div>
              </div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">💉</div>
              <h3 className="font-semibold text-white mb-2">Delivery System</h3>
              <p className="text-sm text-gray-400 mb-3">Pre-filled syringes, packaging</p>
              <div className="text-xs text-gray-500">
                <div>Source: Contract packaging</div>
                <div>Phase 3: In-house</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Systems */}
        <div className="mt-16 bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Quality Systems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Regulatory Compliance</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  21 CFR Part 820 (QSR)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  ISO 13485:2016
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  cGMP for biologics (Phase 2+)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Testing Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Sterility testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Endotoxin limits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Growth factor potency
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Rheological properties
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Shelf Life</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Target: 24 months at 2-8°C
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Real-time stability studies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  Accelerated aging protocols
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Domestic Sourcing */}
        <div className="mt-16 bg-blue-950/20 border border-blue-900/50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Domestic Sourcing Strategy</h2>
          <p className="text-gray-400 mb-6">
            Phase 3 emphasizes US-based supply chain for security, quality control, and regulatory simplicity.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Reduced supply chain risk
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Faster response to demand changes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Simplified regulatory documentation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Quality audit accessibility
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Target Regions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Northeast corridor for biomanufacturing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Research Triangle for R&D
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  California for component suppliers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          Spring Leaf Platform | Gengyve / Adirondack Intelligence
        </div>
      </footer>
    </div>
  )
}
