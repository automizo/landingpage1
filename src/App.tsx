import React from 'react';
import { 
  Search, 
  FileSpreadsheet, 
  Wrench, 
  Rocket, 
  Headphones,
  Bot,
  Clock,
  DollarSign,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { ProcessStep } from './components/ProcessStep';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="bg-dark-green">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Bot className="w-8 h-8 text-mint" />
            <span className="ml-2 text-2xl font-bold text-mint">Automizo</span>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-8 animate-fade-in">
            Automate Your Agency's
            <span className="text-mint block mt-2">
              Administrative Tasks
            </span>
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Focus on what truly matters - your clients and creativity. Let us handle the repetitive tasks that drain your time and resources.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-mint text-dark-green rounded-lg font-semibold hover:bg-opacity-90 transition-colors animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Transform Your Agency Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Clock className="w-12 h-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Save Precious Time</h3>
              <p className="text-gray-300">Reclaim hours spent on repetitive tasks and focus on strategic growth</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <DollarSign className="w-12 h-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reduce Expenses</h3>
              <p className="text-gray-300">Cut operational costs through efficient automation solutions</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Briefcase className="w-12 h-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scale Operations</h3>
              <p className="text-gray-300">Handle more clients without increasing administrative overhead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-dark-green">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Strengths</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-black/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-mint mb-4">Business Acumen</h3>
              <p className="text-gray-200">
                We understand the unique challenges creative agencies face. Our solutions are tailored to your specific business needs and goals.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-mint mb-4">Process Optimization</h3>
              <p className="text-gray-200">
                We don't just automate - we optimize. Our expertise ensures your processes are streamlined for maximum efficiency and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ProcessStep
              icon={Search}
              title="Business Audit"
              description="We identify and evaluate your current processes to find optimization opportunities"
              delay="0.2s"
            />
            <ProcessStep
              icon={FileSpreadsheet}
              title="Project Outlining"
              description="We define clear goals and scope to ensure project success"
              delay="0.4s"
            />
            <ProcessStep
              icon={Wrench}
              title="Build Phase"
              description="We develop custom automations tailored to your needs"
              delay="0.6s"
            />
            <ProcessStep
              icon={Rocket}
              title="Implementation"
              description="We seamlessly integrate solutions into your workflow"
              delay="0.8s"
            />
            <ProcessStep
              icon={Headphones}
              title="Ongoing Support"
              description="We provide continuous support to ensure lasting success"
              delay="1s"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-green">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Agency?</h2>
            <p className="text-xl mb-12">
              Book a call with us to discuss how we can automate your processes and help your agency thrive.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Automizo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;