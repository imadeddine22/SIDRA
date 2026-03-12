'use client'

import { useState } from 'react'
import { Hero } from '@/components/sections/Hero'
import { GradientBanner } from '@/components/sections/GradientBanner'
import { Insurance } from '@/components/sections/Insurance'
import { Usage } from '@/components/sections/Usage'
import { Score } from '@/components/sections/Score'
import { Partner } from '@/components/sections/Partner'
import { MobileMenu } from '@/components/MobileMenu'
import { Navigation } from '@/components/Navigation'

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            {/* Navigation */}
            <Navigation onMenuClick={() => setMobileMenuOpen(true)} />

            {/* Mobile Menu */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

            {/* Sections */}
            <main>
                <Hero />
                <GradientBanner />
                <Insurance />
                <Usage />
                <Score />
                <Partner />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50 8L14 24v26c0 22 16 41 36 48 20-7 36-26 36-48V24L50 8z" stroke="#22d3ee" strokeWidth="7" strokeLinejoin="round" fill="none" />
                                    <polyline points="22,50 34,50 40,36 50,64 60,42 66,50 78,50" stroke="#22d3ee" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                                <h3 className="text-xl font-bold">SIDRA</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                L'assurance qui s'adapte à votre usage réel.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Liens rapides</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#hero" className="hover:text-pulse-accent transition-colors">Accueil</a></li>
                                <li><a href="#insurance" className="hover:text-pulse-accent transition-colors">Mon assurance</a></li>
                                <li><a href="#usage" className="hover:text-pulse-accent transition-colors">Usage & coût</a></li>
                                <li><a href="#score" className="hover:text-pulse-accent transition-colors">Score SIDRA</a></li>
                                <li><a href="#partner" className="hover:text-pulse-accent transition-colors">Partenaires</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <p className="text-sm text-gray-400">
                                Contact@sidra.dz

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
