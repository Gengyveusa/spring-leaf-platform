'use client'

import Link from 'next/link'

const colorClasses = {
  emerald: {
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    dot: 'bg-emerald-500'
  },
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    dot: 'bg-blue-500'
  },
  purple: {
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    dot: 'bg-purple-500'
  }
}

export default function RegulatoryPage() {
  const phases = [
    {
      phase: 1,
      title: 'Cell-Free Construct',
      pathway: '510(k) / De Novo',
      center: 'CDRH',
      timeline: '18-24 months',
      description: 'Hydrogel + 4 growth factors only. Device classification as combination product (device-led).',
      milestones: [
        { name: 'Pre-submission meeting', timing: 'Month 3', status: 'upcoming' },
        { name: 'Biocompatibility testing', timing: 'Month 6', status: 'upcoming' },
        { name: 'Preclinical efficacy', timing: 'Month 12', status: 'upcoming' },
        { name: '510(k)/De Novo submission', timing: 'Month 18', status: 'upcoming' },
        { name: 'FDA clearance', timing: 'Month 24', status: 'upcoming' }
      ],
      considerations: [
        'Predicate devices: EMD (Emdogain), GEM 21S',
        'Special controls for growth factor combination',
        'Biocompatibility per ISO 10993',
        'Shelf-life stability studies'
      ],
      color: 'emerald'
    },
    {
      phase: 2,
      title: 'Construct + Cells',
      pathway: 'BLA (Biologics License Application)',
      center: 'CBER',
      timeline: '36-48 months',
      description: 'Addition of autologous or allogeneic cells. Regulated as biologic product.',
      milestones: [
        { name: 'Pre-IND meeting', timing: 'Month 24', status: 'future' },
        { name: 'IND submission', timing: 'Month 30', status: 'future' },
        { name: 'Phase I trial', timing: 'Month 36', status: 'future' },
        { name: 'Phase II trial', timing: 'Month 48', status: 'future' },
        { name: 'BLA submission', timing: 'Month 60', status: 'future' }
      ],
      considerations: [
        'RMAT designation eligibility',
        'Cell sourcing and characterization',
        'Manufacturing under cGMP for biologics',
        'Clinical endpoints for regeneration'
      ],
      color: 'blue'
    },
    {
      phase: 3,
      title: 'Vertical Integration',
      pathway: 'BLA Supplement',
      center: 'CBER',
      timeline: '48-60 months',
      description: 'In-house cell sourcing and manufacturing. Supply chain control and margin optimization.',
      milestones: [
        { name: 'Manufacturing facility qualification', timing: 'Month 48', status: 'future' },
        { name: 'Process validation', timing: 'Month 54', status: 'future' },
        { name: 'BLA supplement submission', timing: 'Month 60', status: 'future' },
        { name: 'Approval and launch', timing: 'Month 66', status: 'future' }
      ],
      considerations: [
        'CMC supplement for manufacturing changes',
        'Comparability studies',
        'Domestic sourcing qualification',
        'Scale-up validation'
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
              <span className="font-semibold text-emerald-400">Regulatory Roadmap</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Regulatory Strategy</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Phased approach to FDA approval, from device pathway to full biologics licensure.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2" />
            
            {/* Timeline markers */}
            <div className="relative flex justify-between">
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto mb-2" />
                <div className="text-xs text-gray-400">Start</div>
                <div className="text-xs text-gray-500">Month 0</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto mb-2" />
                <div className="text-xs text-emerald-400">510(k) Clearance</div>
                <div className="text-xs text-gray-500">Month 24</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mx-auto mb-2" />
                <div className="text-xs text-blue-400">BLA Approval</div>
                <div className="text-xs text-gray-500">Month 60</div>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mx-auto mb-2" />
                <div className="text-xs text-purple-400">Full Integration</div>
                <div className="text-xs text-gray-500">Month 66+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Cards */}
        <div className="space-y-8">
          {phases.map((phase) => {
            const colors = colorClasses[phase.color]
            return (
            <div
              key={phase.phase}
              className={`bg-gray-900/50 border ${colors.border} rounded-2xl overflow-hidden`}
            >
              {/* Phase Header */}
              <div className={`${colors.bg} border-b ${colors.border} px-8 py-6`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className={`${colors.text} font-bold text-sm mb-1`}>PHASE {phase.phase}</div>
                    <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-xs text-gray-400 uppercase">Pathway</div>
                      <div className={`${colors.text} font-semibold`}>{phase.pathway}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase">FDA Center</div>
                      <div className="text-white font-semibold">{phase.center}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase">Timeline</div>
                      <div className="text-white font-semibold">{phase.timeline}</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mt-4">{phase.description}</p>
              </div>

              {/* Phase Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Milestones */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Key Milestones</h3>
                    <div className="space-y-3">
                      {phase.milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 bg-gray-800/50 rounded-lg px-4 py-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            milestone.status === 'upcoming' ? colors.dot : 'bg-gray-600'
                          }`} />
                          <div className="flex-1">
                            <div className="text-white text-sm">{milestone.name}</div>
                          </div>
                          <div className="text-xs text-gray-400">{milestone.timing}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Considerations */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Key Considerations</h3>
                    <ul className="space-y-2">
                      {phase.considerations.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400">
                          <span className={colors.text}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Why 510(k) First?</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Fastest path to market (18-24 months vs 5+ years for BLA)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Generates revenue to fund Phase 2 development
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Builds clinical evidence in real-world use
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Establishes manufacturing and QA systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                Creates commercial infrastructure
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4">RMAT Designation Strategy</h3>
            <p className="text-gray-400 mb-4">
              Regenerative Medicine Advanced Therapy (RMAT) designation may be pursued for Phase 2 product to enable:
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                Early FDA interactions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                Rolling BLA submission
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                Priority review
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">•</span>
                Accelerated approval pathway
              </li>
            </ul>
          </div>
        </div>

        {/* Contact FDA Timeline */}
        <div className="mt-16 bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">FDA Engagement Strategy</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">📞</span>
              </div>
              <h4 className="font-semibold text-white mb-1">Pre-Sub Meeting</h4>
              <p className="text-xs text-gray-400">Validate device classification and testing strategy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">📋</span>
              </div>
              <h4 className="font-semibold text-white mb-1">Q-Sub</h4>
              <p className="text-xs text-gray-400">Address specific technical questions pre-submission</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">📝</span>
              </div>
              <h4 className="font-semibold text-white mb-1">510(k) Review</h4>
              <p className="text-xs text-gray-400">90-day review period with interactive review</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">✅</span>
              </div>
              <h4 className="font-semibold text-white mb-1">Clearance</h4>
              <p className="text-xs text-gray-400">Market authorization and commercial launch</p>
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
