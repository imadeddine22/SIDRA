'use client'

import { useEffect } from 'react'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleLinkClick = () => {
        onClose()
    }

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 8L14 24v26c0 22 16 41 36 48 20-7 36-26 36-48V24L50 8z" stroke="#22d3ee" strokeWidth="7" strokeLinejoin="round" fill="none" />
                                <polyline points="22,50 34,50 40,36 50,64 60,42 66,50 78,50" stroke="#22d3ee" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                            <span className="text-xl font-bold text-gray-900">SIDRA</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Fermer le menu"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 overflow-y-auto py-6">
                        <div className="space-y-1 px-4">
                            <a
                                href="#hero"
                                onClick={handleLinkClick}
                                className="flex items-center space-x-3 px-4 py-3 rounded-SIDRA text-gray-700 hover:bg-pulse-accent/10 hover:text-pulse-accent transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="font-medium">Accueil</span>
                            </a>

                            <a
                                href="#insurance"
                                onClick={handleLinkClick}
                                className="flex items-center space-x-3 px-4 py-3 rounded-SIDRA text-gray-700 hover:bg-pulse-accent/10 hover:text-pulse-accent transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .746-.074 1.476-.217 2.185m0 0A11.952 11.952 0 0119.5 17.5m.217-5.315l-7.5-7.5-4.5 4.5m-6 5.5l7.5 7.5 4.5-4.5m0 0l7.5-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium">Mon assurance</span>
                            </a>

                            <a
                                href="#usage"
                                onClick={handleLinkClick}
                                className="flex items-center space-x-3 px-4 py-3 rounded-SIDRA text-gray-700 hover:bg-pulse-accent/10 hover:text-pulse-accent transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span className="font-medium">Usage & coût</span>
                            </a>

                            <a
                                href="#score"
                                onClick={handleLinkClick}
                                className="flex items-center space-x-3 px-4 py-3 rounded-SIDRA text-gray-700 hover:bg-pulse-accent/10 hover:text-pulse-accent transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span className="font-medium">Score PULSE</span>
                            </a>

                            <a
                                href="#partner"
                                onClick={handleLinkClick}
                                className="flex items-center space-x-3 px-4 py-3 rounded-SIDRA text-gray-700 hover:bg-pulse-accent/10 hover:text-pulse-accent transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="font-medium">Partenaires</span>
                            </a>
                        </div>
                    </nav>

                    {/* CTA Button */}
                    <div className="p-6 border-t border-gray-200">
                        <a
                            href="#hero"
                            onClick={handleLinkClick}
                            className="block w-full px-6 py-3 bg-pulse-accent text-white text-center rounded-SIDRA font-medium hover:bg-pulse-accent-dark transition-colors"
                        >
                            Commencer
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
