'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  { id: 'spring-leaf', label: 'Spring Leaf' },
  { id: '4-signals', label: '4 Signals' },
  { id: 'hydrogel', label: 'Hydrogel' },
  { id: 'healing', label: 'Healing' },
  { id: 'development', label: 'Development' },
  { id: 'clinical-sim', label: 'Clinical Sim' },
  { id: 'cell-sources', label: 'Cell Sources' }
]

export default function SciencePage() {
  const [activeTab, setActiveTab] = useState('spring-leaf')

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
              <span className="font-semibold text-emerald-400">Science Platform</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="border-b border-gray-800 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'spring-leaf' && <SpringLeafTab />}
        {activeTab === '4-signals' && <FourSignalsTab />}
        {activeTab === 'hydrogel' && <HydrogelTab />}
        {activeTab === 'healing' && <HealingTab />}
        {activeTab === 'development' && <DevelopmentTab />}
        {activeTab === 'clinical-sim' && <ClinicalSimTab />}
        {activeTab === 'cell-sources' && <CellSourcesTab />}
      </main>
    </div>
  )
}

function SpringLeafTab() {
  return (
    <div className="space-y-12">
      {/* The Problem */}
      <section className="bg-red-950/20 border border-red-900/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-red-400 mb-4">The Problem</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Current periodontal regeneration produces <span className="text-red-400 font-semibold">structure without function</span>.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Current Approaches Fail Because:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Focus on bone/tissue scaffolds alone
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Ignore the neural component entirely
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Produce ankylosis (direct bone-tooth fusion)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                No proprioception, no bite force sensing
              </li>
            </ul>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Clinical Reality:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                87% of treated sites show incomplete regeneration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Long junctional epithelium instead of true attachment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                Recurrent disease in 30-50% within 5 years
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">The Insight</h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          Neural ingrowth <span className="text-emerald-400 font-semibold">precedes and coordinates</span> periodontal regeneration.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-gray-900 rounded-xl px-8 py-6 text-center">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-emerald-400 font-bold text-lg">NERVES</div>
            <div className="text-gray-500 text-sm">First</div>
          </div>
          <div className="flex items-center text-gray-600">→</div>
          <div className="bg-gray-900 rounded-xl px-8 py-6 text-center">
            <div className="text-3xl mb-2">🩸</div>
            <div className="text-emerald-400 font-bold text-lg">VESSELS</div>
            <div className="text-gray-500 text-sm">Second</div>
          </div>
          <div className="flex items-center text-gray-600">→</div>
          <div className="bg-gray-900 rounded-xl px-8 py-6 text-center">
            <div className="text-3xl mb-2">🦷</div>
            <div className="text-emerald-400 font-bold text-lg">PDL</div>
            <div className="text-gray-500 text-sm">Third</div>
          </div>
        </div>
        <p className="text-gray-400 text-center">
          This developmental hierarchy is preserved in adult regeneration but ignored by current therapies.
        </p>
      </section>

      {/* The Solution */}
      <section className="bg-blue-950/20 border border-blue-900/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">The Solution</h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          4-Signal Minimal Viable Construct delivering the <span className="text-blue-400 font-semibold">complete regenerative signal</span>.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-emerald-400">NGF</div>
            <div className="text-sm text-gray-400 mt-1">Nerve Growth Factor</div>
            <div className="text-xs text-gray-500 mt-2">Neural ingrowth</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-emerald-400">PDGF-BB</div>
            <div className="text-sm text-gray-400 mt-1">Platelet-Derived GF</div>
            <div className="text-xs text-gray-500 mt-2">Vascular support</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-emerald-400">BMP-7</div>
            <div className="text-sm text-gray-400 mt-1">Bone Morphogenetic</div>
            <div className="text-xs text-gray-500 mt-2">PDL differentiation</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-emerald-400">BDNF</div>
            <div className="text-sm text-gray-400 mt-1">Brain-Derived NF</div>
            <div className="text-xs text-gray-500 mt-2">Neural survival</div>
          </div>
        </div>
      </section>

      {/* Three-Phase Commercialization */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Three-Phase Commercialization</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-emerald-400 font-bold text-sm mb-2">PHASE 1</div>
            <h3 className="text-xl font-semibold text-white mb-3">Cell-Free Construct</h3>
            <p className="text-gray-400 text-sm">
              Hydrogel + 4 signals only. Lower regulatory burden (510(k)/De Novo). 
              Fastest path to market and revenue.
            </p>
            <div className="mt-4 text-xs text-gray-500">Timeline: 18-24 months</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-emerald-400 font-bold text-sm mb-2">PHASE 2</div>
            <h3 className="text-xl font-semibold text-white mb-3">Construct + Cells</h3>
            <p className="text-gray-400 text-sm">
              Add autologous or allogeneic cells. BLA pathway through CBER. 
              Enhanced efficacy for severe cases.
            </p>
            <div className="mt-4 text-xs text-gray-500">Timeline: 36-48 months</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-emerald-400 font-bold text-sm mb-2">PHASE 3</div>
            <h3 className="text-xl font-semibold text-white mb-3">Vertical Integration</h3>
            <p className="text-gray-400 text-sm">
              In-house cell sourcing, manufacturing, and distribution. 
              Maximum margins, supply chain control.
            </p>
            <div className="mt-4 text-xs text-gray-500">Timeline: 48-60 months</div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FourSignalsTab() {
  const signals = [
    {
      name: 'NGF',
      fullName: 'Nerve Growth Factor',
      role: 'Initiates neural ingrowth into the regenerating periodontium',
      mechanism: 'Binds TrkA receptors on sensory neurons, promoting axon extension and survival',
      concentration: '50 ng/mL',
      timing: 'Early phase (Days 1-7)',
      color: 'emerald'
    },
    {
      name: 'PDGF-BB',
      fullName: 'Platelet-Derived Growth Factor BB',
      role: 'Recruits pericytes and promotes angiogenesis',
      mechanism: 'Activates PDGFRβ on vascular cells, stimulating proliferation and migration',
      concentration: '100 ng/mL',
      timing: 'Early-Mid phase (Days 3-14)',
      color: 'red'
    },
    {
      name: 'BMP-7',
      fullName: 'Bone Morphogenetic Protein 7',
      role: 'Directs PDL progenitor differentiation toward functional fibroblasts',
      mechanism: 'SMAD signaling cascade activating PDL-specific gene programs',
      concentration: '200 ng/mL',
      timing: 'Mid phase (Days 7-21)',
      color: 'blue'
    },
    {
      name: 'BDNF',
      fullName: 'Brain-Derived Neurotrophic Factor',
      role: 'Supports survival and maturation of regenerated neural structures',
      mechanism: 'TrkB activation promotes long-term neural survival and synaptogenesis',
      concentration: '25 ng/mL',
      timing: 'Late phase (Days 14-28)',
      color: 'purple'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">4-Signal Minimal Viable Construct</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The precise combination of growth factors that recapitulate the neural-first 
          developmental hierarchy of periodontal tissue formation.
        </p>
      </div>

      <div className="grid gap-6">
        {signals.map((signal) => (
          <div key={signal.name} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-400">{signal.name}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">{signal.fullName}</h3>
                <p className="text-emerald-400 mb-3">{signal.role}</p>
                <p className="text-gray-400 text-sm mb-4">{signal.mechanism}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-800 rounded-lg px-3 py-1 text-sm">
                    <span className="text-gray-500">Concentration:</span>{' '}
                    <span className="text-white">{signal.concentration}</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg px-3 py-1 text-sm">
                    <span className="text-gray-500">Timing:</span>{' '}
                    <span className="text-white">{signal.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HydrogelTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Dual-Crosslinked Hydrogel System</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          HA/alginate hydrogel optimized for periodontal pocket delivery and sustained signal release.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Composition</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-800">
              <span className="text-gray-300">Hyaluronic Acid (HA)</span>
              <span className="text-white font-semibold">1.5% w/v</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-800">
              <span className="text-gray-300">Alginate</span>
              <span className="text-white font-semibold">1.0% w/v</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-800">
              <span className="text-gray-300">CaCl₂ (ionic crosslinker)</span>
              <span className="text-white font-semibold">50 mM</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-300">EDC/NHS (covalent crosslinker)</span>
              <span className="text-white font-semibold">25/10 mM</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-emerald-400 mb-6">Mechanical Properties</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Storage Modulus (G&apos;)</span>
                <span className="text-white font-bold">300-500 Pa</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Optimal for cell migration and neural ingrowth</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Degradation Time</span>
                <span className="text-white font-bold">21-28 days</span>
              </div>
              <p className="text-xs text-gray-500">Matches periodontal regeneration timeline</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Swelling Ratio</span>
                <span className="text-white font-bold">~15x</span>
              </div>
              <p className="text-xs text-gray-500">Allows nutrient/waste exchange</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-blue-400 mb-4">Why Dual Crosslinking?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-white mb-2">Ionic (CaCl₂ → Alginate)</h3>
            <p className="text-gray-400 text-sm">
              Rapid gelation upon injection. Provides immediate shape retention in the periodontal pocket.
              Reversible, allowing for controlled degradation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Covalent (EDC/NHS → HA)</h3>
            <p className="text-gray-400 text-sm">
              Long-term stability. Maintains growth factor binding capacity. 
              Provides sustained release kinetics over 21-28 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function HealingTab() {
  const phases = [
    { day: '0-3', phase: 'Inflammation', description: 'Controlled inflammatory response, neutrophil/macrophage recruitment', color: 'red' },
    { day: '3-7', phase: 'Neural Ingrowth', description: 'NGF-mediated sensory fiber extension into construct', color: 'emerald' },
    { day: '7-14', phase: 'Vascularization', description: 'PDGF-BB drives angiogenesis along neural tracks', color: 'orange' },
    { day: '14-21', phase: 'PDL Formation', description: 'BMP-7 directs fibroblast differentiation, fiber alignment begins', color: 'blue' },
    { day: '21-28', phase: 'Maturation', description: 'BDNF supports neural survival, cementum formation initiates', color: 'purple' },
    { day: '28+', phase: 'Remodeling', description: 'Functional fiber insertion, proprioceptive function restored', color: 'emerald' }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Healing Cascade</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The temporal sequence of regenerative events following Spring Leaf construct placement.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-800" />
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-6 w-5 h-5 rounded-full bg-emerald-500 border-4 border-gray-950" />
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-emerald-400 font-mono text-sm">Day {phase.day}</span>
                  <span className="text-white font-semibold text-lg">{phase.phase}</span>
                </div>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DevelopmentTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Developmental Biology Basis</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Spring Leaf recapitulates the embryonic development of the periodontium.
        </p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
        <h2 className="text-xl font-bold text-emerald-400 mb-6">The Neural Crest Connection</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The periodontium develops from cranial neural crest cells. These cells receive patterning 
          signals from the adjacent neural tube BEFORE differentiating into dental tissues. 
          This neural-first hierarchy is preserved in adult regeneration.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Embryonic Day</div>
            <div className="text-2xl font-bold text-emerald-400">E8.5-E9.5</div>
            <div className="text-xs text-gray-500 mt-1">Neural crest migration</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Embryonic Day</div>
            <div className="text-2xl font-bold text-emerald-400">E11-E13</div>
            <div className="text-xs text-gray-500 mt-1">Dental lamina formation</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Embryonic Day</div>
            <div className="text-2xl font-bold text-emerald-400">E14-E18</div>
            <div className="text-xs text-gray-500 mt-1">PDL fiber insertion</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4">Key Developmental Signals</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              Shh (Sonic Hedgehog) - patterning
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              FGF8 - neural crest specification
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              Wnt/β-catenin - mesenchymal condensation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              BMP2/4/7 - cell fate determination
            </li>
          </ul>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4">Spring Leaf Translation</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              NGF replaces early neural patterning
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              PDGF-BB mimics vascular morphogenesis
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              BMP-7 activates PDL differentiation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              BDNF ensures neural survival
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ClinicalSimTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Clinical Simulation</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Computational modeling of Spring Leaf construct performance in clinical scenarios.
        </p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
        <h2 className="text-xl font-bold text-emerald-400 mb-6">Defect Types Modeled</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">📐</div>
            <h3 className="font-semibold text-white mb-2">Intrabony Defects</h3>
            <p className="text-sm text-gray-400">1-wall, 2-wall, 3-wall configurations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-semibold text-white mb-2">Furcation Defects</h3>
            <p className="text-sm text-gray-400">Class I, II, III involvement</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📉</div>
            <h3 className="font-semibold text-white mb-2">Recession Defects</h3>
            <p className="text-sm text-gray-400">Miller Class I-IV</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4">Predicted Outcomes</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Clinical Attachment Level (CAL)</span>
                <span className="text-emerald-400">+4.2 mm</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-emerald-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Probing Depth Reduction</span>
                <span className="text-emerald-400">-5.1 mm</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Bone Fill</span>
                <span className="text-emerald-400">78%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-[78%] bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4">Model Parameters</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex justify-between">
              <span>Diffusion coefficient (growth factors)</span>
              <span className="text-white">1.2 × 10⁻⁷ cm²/s</span>
            </li>
            <li className="flex justify-between">
              <span>Cell migration speed</span>
              <span className="text-white">15 μm/hr</span>
            </li>
            <li className="flex justify-between">
              <span>Hydrogel degradation rate</span>
              <span className="text-white">3.5%/day</span>
            </li>
            <li className="flex justify-between">
              <span>Simulation duration</span>
              <span className="text-white">28 days</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function CellSourcesTab() {
  const sources = [
    {
      name: 'PDL Stem Cells (PDLSCs)',
      type: 'Autologous',
      advantages: ['Native to periodontium', 'High regenerative potential', 'No immune rejection'],
      challenges: ['Requires extraction', 'Limited quantity', 'Variable quality'],
      phase: 2
    },
    {
      name: 'Dental Pulp Stem Cells (DPSCs)',
      type: 'Autologous/Allogeneic',
      advantages: ['Accessible from extracted teeth', 'Multipotent', 'Good expansion'],
      challenges: ['Requires processing', 'Banking infrastructure needed'],
      phase: 2
    },
    {
      name: 'Gingival MSCs (GMSCs)',
      type: 'Autologous',
      advantages: ['Easy access', 'Minimal morbidity', 'Good proliferation'],
      challenges: ['Differentiation efficiency', 'Less characterized'],
      phase: 3
    },
    {
      name: 'iPSC-derived PDL cells',
      type: 'Allogeneic',
      advantages: ['Unlimited supply', 'Standardized product', 'Off-the-shelf'],
      challenges: ['Regulatory complexity', 'Differentiation protocols', 'Tumorigenicity'],
      phase: 3
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Cell Sources Strategy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Phase 2 and 3 products incorporate cells for enhanced regeneration in severe defects.
        </p>
      </div>

      <div className="grid gap-6">
        {sources.map((source, index) => (
          <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{source.name}</h3>
                <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded">
                  {source.type}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Phase {source.phase} Product
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-emerald-400 mb-2">Advantages</h4>
                <ul className="space-y-1">
                  {source.advantages.map((adv, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-emerald-400">+</span> {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-orange-400 mb-2">Challenges</h4>
                <ul className="space-y-1">
                  {source.challenges.map((chal, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-orange-400">−</span> {chal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
