'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/Card'
import { SectionNumber } from '@/components/SectionNumber'

/* ── Circular Gauge ─────────────────────────────────────────── */
interface GaugeProps {
    value: number
    max?: number
    size?: number
    strokeWidth?: number
    label?: string
}

function CircularGauge({ value, max = 100, size = 240, strokeWidth = 18, label = 'Bon score' }: GaugeProps) {
    const [animated, setAnimated] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(value)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [value])

    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const pct = (animated / max) * 100
    const offset = circumference - (pct / 100) * circumference

    // colour gradient stops based on score
    const colour = value >= 80 ? '#10b981' : value >= 60 ? '#13ecda' : value >= 40 ? '#f59e0b' : '#ef4444'

    return (
        <div ref={ref} className="relative inline-flex items-center justify-center">
            <svg width={size} height={size} className="transform -rotate-90" style={{ filter: `drop-shadow(0 0 12px ${colour}55)` }}>
                {/* Track */}
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={strokeWidth} />
                {/* Arc */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={colour}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' }}
                />
            </svg>

            {/* Centre text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black text-gray-900 leading-none">{animated}</span>
                <span className="text-base font-bold text-gray-400 mt-1">/ {max}</span>
                <span
                    className="mt-3 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide"
                    style={{ background: `${colour}22`, color: colour }}
                >
                    {label}
                </span>
            </div>
        </div>
    )
}

/* ── Bar ────────────────────────────────────────────────────── */
interface BarProps {
    label: string
    value: number      // 0-100
    colour: string
    icon: React.ReactNode
    description: string
}

function ScoreBar({ label, value, colour, icon, description }: BarProps) {
    const [width, setWidth] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWidth(value)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [value])

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span style={{ color: colour }}>{icon}</span>
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                </div>
                <span className="text-sm font-bold" style={{ color: colour }}>{value}%</span>
            </div>
            {/* Track */}
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full"
                    style={{
                        width: `${width}%`,
                        background: `linear-gradient(90deg, ${colour}99, ${colour})`,
                        transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
                        boxShadow: `0 0 8px ${colour}66`,
                    }}
                />
            </div>
            <p className="text-xs text-gray-400">{description}</p>
        </div>
    )
}

/* ── Icons ──────────────────────────────────────────────────── */
const IconCheck = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)
const IconShield = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .746-.074 1.476-.217 2.185M19.5 17.5A11.955 11.955 0 0112 21a11.955 11.955 0 01-7.5-3.5" />
    </svg>
)
const IconTrend = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
)
const IconSpeed = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

/* ── Score data ─────────────────────────────────────────────── */
const BARS: BarProps[] = [
    {
        label: 'Régularité',
        value: 85,
        colour: '#10b981',
        icon: <IconCheck />,
        description: 'Vous conduisez de manière régulière et prévisible.',
    },
    {
        label: 'Prudence',
        value: 92,
        colour: '#13ecda',
        icon: <IconShield />,
        description: 'Vos freinages et accélérations sont doux.',
    },
    {
        label: 'Stabilité',
        value: 68,
        colour: '#f59e0b',
        icon: <IconTrend />,
        description: 'Légères variations sur routes à grande vitesse.',
    },
    {
        label: 'Ponctualité',
        value: 74,
        colour: '#818cf8',
        icon: <IconSpeed />,
        description: 'Respect global des plages horaires habituelles.',
    },
]

/* ── Section ────────────────────────────────────────────────── */
export function Score() {
    return (
        <section id="score" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <SectionNumber number={4} label="Score PULSE" />
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-pulse-accent font-semibold text-sm uppercase tracking-wide">
                        Votre profil
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Score SIDRA
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Votre score reflète vos habitudes d'utilisation et influence positivement votre coût dans le temps.
                    </p>
                </div>

                {/* Main grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* LEFT — Circular Gauge */}
                    <Card className="flex flex-col items-center space-y-6">
                        {/* Score badge */}
                        <div className="w-full flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900">Score SIDRA</h3>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">78 / 100</span>
                        </div>
                        <CircularGauge value={78} max={100} size={240} strokeWidth={20} label="Bon score" />
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">Bon score</h3>
                            <p className="text-sm text-gray-500 max-w-xs">
                                Continuez ainsi pour optimiser votre assurance et bénéficier de meilleures conditions.
                            </p>
                        </div>

                        {/* Mini legend */}
                        <div className="flex gap-4 flex-wrap justify-center text-xs text-gray-500">
                            {[
                                { c: '#ef4444', l: '0-39' },
                                { c: '#f59e0b', l: '40-59' },
                                { c: '#13ecda', l: '60-79' },
                                { c: '#10b981', l: '80-100' },
                            ].map(({ c, l }) => (
                                <span key={l} className="flex items-center gap-1">
                                    <span className="inline-block w-3 h-3 rounded-full" style={{ background: c }} />
                                    {l}
                                </span>
                            ))}
                        </div>
                    </Card>

                    {/* RIGHT — 4 Bars + info */}
                    <div className="space-y-6">
                        <Card>
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Détails du score</h3>
                            <div className="space-y-6">
                                {BARS.map(bar => (
                                    <ScoreBar key={bar.label} {...bar} />
                                ))}
                            </div>
                        </Card>

                        {/* Info card */}
                        <Card className="bg-gray-50 flex items-start gap-3">
                            <svg className="w-5 h-5 text-pulse-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">À quoi sert le score ?</h4>
                                <p className="text-sm text-gray-500">
                                    Le score SIDRA est un outil de transparence qui peut vous permettre d'accéder à de meilleures conditions tarifaires. Ce n'est pas une pénalité.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
