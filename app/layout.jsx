import './globals.css'

export const metadata = {
  title: 'Spring Leaf - High Fidelity Periodontal Regeneration',
  description: 'The first regenerative construct that recapitulates the neural-first developmental hierarchy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}