"use client"

import { Button } from "@/components/ui/button"
import { dedicadaConfig } from "@/data/dedicada-data"

export function DedicadaCTASection() {
  const { finalCta, contact } = dedicadaConfig

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 lg:mb-6">{finalCta.title}</h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 lg:mb-12 max-w-2xl mx-auto text-purple-100">
          {finalCta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors"
          >
            {finalCta.primaryButton}
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors"
          >
            {finalCta.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  )
}
