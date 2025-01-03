import { useState } from 'react'

export function LeadForm() {
  const [email, setEmail] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setEmail('')
      setLinkedin('')
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="input"
            required
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Get My AI Report'}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Free personalized report delivered to your inbox
        </p>
      </div>
    </form>
  )
}
