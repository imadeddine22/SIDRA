import { Card } from '@/components/Card'
import { SectionNumber } from '@/components/SectionNumber'

export function Partner() {
    return (
        <section id="partner" className="py-20 sm:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <SectionNumber number={5} label="Assureur partenaire" />
                <div className="text-center mb-16">
                    <span className="text-pulse-accent font-semibold text-sm uppercase tracking-wide">
                        Confiance & sécurité
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Assureur partenaire
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nous collaborons avec des compagnies d'assurance reconnues et régulées pour garantir votre protection.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Trust Card */}
                    <Card className="text-center space-y-8 p-8 sm:p-12">
                        <div className="w-24 h-24 mx-auto rounded-full bg-pulse-accent/10 flex items-center justify-center">
                            <svg className="w-12 h-12 text-pulse-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .746-.074 1.476-.217 2.185m0 0A11.952 11.952 0 0119.5 17.5m.217-5.315l-7.5-7.5-4.5 4.5m-6 5.5l7.5 7.5 4.5-4.5m0 0l7.5-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Les contrats sont portés par des assureurs agréés
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                SIDRA travaille exclusivement avec des partenaires de premier plan pour garantir une conformité totale et votre sécurité financière.
                            </p>
                        </div>

                        {/* Logo Placeholder */}
                        <div className="py-8">
                            <div className="w-64 h-32 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-SIDRA flex items-center justify-center">
                                <span className="text-sm text-gray-400 font-medium">Logo Assureur Partenaire</span>
                            </div>
                        </div>
                    </Card>

                    {/* Disclaimer */}


                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .746-.074 1.476-.217 2.185m0 0A11.952 11.952 0 0119.5 17.5m.217-5.315l-7.5-7.5-4.5 4.5m-6 5.5l7.5 7.5 4.5-4.5m0 0l7.5-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-900">Agréés & conformes</h4>
                            <p className="text-sm text-gray-600">
                                Tous nos partenaires sont agréés par les autorités de régulation et respectent les normes en vigueur.
                            </p>
                        </Card>

                        <Card className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-900">Contrats clairs</h4>
                            <p className="text-sm text-gray-600">
                                Des conditions générales rédigées en langage simple, sans jargon juridique complexe.
                            </p>
                        </Card>

                        <Card className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-900">Protection réglementée</h4>
                            <p className="text-sm text-gray-600">
                                Vos données et vos droits sont protégés conformément à la réglementation en vigueur.
                            </p>
                        </Card>
                    </div>

                    {/* CTA */}
                    <Card className="bg-gradient-to-br from-pulse-accent/5 to-pulse-accent/10 border-pulse-accent/30 text-center p-8 sm:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Prêt à découvrir SIDRA ?
                        </h3>

                        <a
                            href="#hero"
                            className="inline-flex items-center px-8 py-4 bg-pulse-accent text-white rounded-SIDRA font-medium hover:bg-pulse-accent-dark transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            contactez nous a  <br />
                            contact@sidra.dz
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    )
}
