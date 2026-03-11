import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import TrustLogos from '../components/TrustLogos'
import ServicesOverview from '../components/ServicesOverview'
import ProductsShowcase from '../components/ProductsShowcase'
import ProcessTimeline from '../components/ProcessTimeline'
import StatsSection from '../components/StatsSection'
import TechStack from '../components/TechStack'
import BlogPreview from '../components/BlogPreview'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <ServicesOverview />
      <ProductsShowcase />
      <ProcessTimeline />
      <StatsSection />
      <TechStack />
      <BlogPreview />
      <CTABanner />
    </>
  )
}
