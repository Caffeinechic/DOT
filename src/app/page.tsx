'use client';

import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { Flex } from '@/components/layout/Flex';
import { Button } from '@/components/atoms/Button';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { ServiceCard } from '@/components/content/ServiceCard';
import { PortfolioCard } from '@/components/content/PortfolioCard';
import { TestimonialCard } from '@/components/content/TestimonialCard';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white dark:from-neutral-900 dark:to-black">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl">
              Build Your Digital Future with <span className="text-primary-600 dark:text-primary-400">DOT</span>
            </Heading>
            <Paragraph size="lg" className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We create stunning web experiences, innovative mobile apps, and scalable digital solutions 
              that help your business thrive in the modern world.
            </Paragraph>
            <Flex gap="md" justify="center" className="pt-4">
              <Button size="lg" variant="primary">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Flex>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <Heading level="h2" className="mb-4">Our Services</Heading>
            <Paragraph size="lg" className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </Paragraph>
          </div>
          <Grid cols={3} gap="lg">
            <ServiceCard
              title="Web Development"
              description="Modern, responsive websites built with the latest technologies"
              features={['Next.js & React', 'Responsive Design', 'SEO Optimized', 'Fast Performance']}
              ctaText="Learn More"
              ctaHref="/services/web-development"
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>}
            />
            <ServiceCard
              title="Mobile Apps"
              description="Native and cross-platform mobile applications"
              features={['iOS & Android', 'React Native', 'Push Notifications', 'Offline Support']}
              ctaText="Learn More"
              ctaHref="/services/mobile-apps"
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" /></svg>}
            />
            <ServiceCard
              title="UI/UX Design"
              description="Beautiful, intuitive designs that users love"
              features={['User Research', 'Wireframing', 'Prototyping', 'Design Systems']}
              ctaText="Learn More"
              ctaHref="/services/design"
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" /></svg>}
            />
          </Grid>
        </Container>
      </Section>

      {/* Portfolio Section */}
      <Section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="text-center mb-12">
            <Heading level="h2" className="mb-4">Featured Projects</Heading>
            <Paragraph size="lg" className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Some of our recent work that we're proud of
            </Paragraph>
          </div>
          <Grid cols={3} gap="lg">
            <PortfolioCard
              title="E-Commerce Platform"
              description="A full-featured online store with payment integration and inventory management"
              image="/placeholder-project-1.jpg"
              category="Web Development"
              tags={['Next.js', 'Stripe', 'TypeScript']}
              href="/portfolio/ecommerce-platform"
            />
            <PortfolioCard
              title="Fitness Tracking App"
              description="Mobile app for tracking workouts, nutrition, and health metrics"
              image="/placeholder-project-2.jpg"
              category="Mobile App"
              tags={['React Native', 'Firebase', 'Health Kit']}
              href="/portfolio/fitness-app"
            />
            <PortfolioCard
              title="SaaS Dashboard"
              description="Analytics dashboard with real-time data visualization"
              image="/placeholder-project-3.jpg"
              category="Web App"
              tags={['React', 'D3.js', 'WebSocket']}
              href="/portfolio/saas-dashboard"
            />
          </Grid>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <Heading level="h2" className="mb-4">What Our Clients Say</Heading>
            <Paragraph size="lg" className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Don't just take our word for it
            </Paragraph>
          </div>
          <Grid cols={3} gap="lg">
            <TestimonialCard
              author="Sarah Johnson"
              role="CEO"
              company="TechStart Inc"
              quote="DOT transformed our vision into reality. Their attention to detail and technical expertise is unmatched."
              avatar="/placeholder-avatar-1.jpg"
              rating={5}
            />
            <TestimonialCard
              author="Michael Chen"
              role="Founder"
              company="GrowthLabs"
              quote="Working with DOT was a game-changer. They delivered on time and exceeded our expectations."
              avatar="/placeholder-avatar-2.jpg"
              rating={5}
            />
            <TestimonialCard
              author="Emily Rodriguez"
              role="Marketing Director"
              company="BrandFlow"
              quote="The team at DOT is professional, creative, and highly skilled. Highly recommend!"
              avatar="/placeholder-avatar-3.jpg"
              rating={5}
            />
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-primary-600 dark:bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heading level="h2" className="text-white">
              Ready to Start Your Project?
            </Heading>
            <Paragraph size="lg" className="text-primary-100">
              Let's discuss how we can help bring your ideas to life
            </Paragraph>
            <Flex gap="md" justify="center" className="pt-4">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Schedule a Call
              </Button>
            </Flex>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
