'use client'

import { useState, useEffect } from 'react'
import { smoothScrollTo } from '@/utils/smoothScroll'

interface NavigationProps {
    onMenuClick: () => void
}

export function Navigation({ onMenuClick }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center space-x-2">
                        <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 8L14 24v26c0 22 16 41 36 48 20-7 36-26 36-48V24L50 8z" stroke="#22d3ee" strokeWidth="7" strokeLinejoin="round" fill="none" />
                            <polyline points="22,50 34,50 40,36 50,64 60,42 66,50 78,50" stroke="#22d3ee" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                        <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                            SIDRA
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => smoothScrollTo('insurance', 450)} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-pulse-accent' : 'text-white hover:text-pulse-accent'}`}>
                            Mon assurance
                        </button>
                        <button onClick={() => smoothScrollTo('usage', 450)} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-pulse-accent' : 'text-white hover:text-pulse-accent'}`}>
                            Usage & coût
                        </button>
                        <button onClick={() => smoothScrollTo('score', 450)} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-pulse-accent' : 'text-white hover:text-pulse-accent'}`}>
                            Score
                        </button>
                        <button onClick={() => smoothScrollTo('partner', 450)} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-pulse-accent' : 'text-white hover:text-pulse-accent'}`}>
                            Partenaires
                        </button>
                        <button
                            onClick={() => smoothScrollTo('insurance', 450)}
                            className="px-6 py-2 bg-pulse-accent text-white rounded-SIDRA font-medium hover:bg-pulse-accent-dark transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg"
                        >
                            Commencer
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
                        aria-label="Menu"
                    >
                        <svg
                            className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
