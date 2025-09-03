"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star } from "lucide-react"

export function VivoGestaoAwardsSection(): React.JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-[#660099]/10 to-[#EB3C7D]/10 border border-[#660099]/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 text-lg font-bold">
                  5G GLOBAL WINNER 2024
                </Badge>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Opensignal 5G Global Awards 2024
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Eleito o 5G mais rápido do mundo pelo prêmio Opensignal
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-6">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-2">5.0/5.0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
