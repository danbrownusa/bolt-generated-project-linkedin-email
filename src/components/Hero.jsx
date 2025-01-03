import { LeadForm } from './LeadForm'

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Discover Your Personal AI Potential
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Get custom AI recommendations based on your professional experience
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Transform Your Career with AI
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our AI-powered platform analyzes your professional background to provide
              personalized recommendations, helping you leverage artificial intelligence
              effectively in your role.
            </p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
