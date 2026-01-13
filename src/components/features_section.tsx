'use client';

import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Calendar,
    CheckCircle2,
    FlaskConical,
    Pill,
    Scan,
    User,
    UserCheck,
    Users,
    ArrowRight,
    BarChart3,
    Shield,
    Activity,
    Cpu
} from 'lucide-react';
import { Button } from './ui/button';
import Container from './ui/container';
import { Muted, ParagraphLarge, Title, TitleSmall } from './ui/typography';

interface Feature {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    imageUrl: string;
    category: 'clinical' | 'administrative' | 'support';
    benefits: string[];
}

const features: Feature[] = [
    {
        id: 1,
        icon: Users,
        title: "Patient Management",
        description: "Complete patient records, history, and medical information management, including patient registration and electronic health records (EHR). Ensures secure storage and easy access to patient data for better care coordination.",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'administrative',
        benefits: ["Reduced administrative burden", "Improved data accuracy", "Enhanced patient privacy", "Compliance with HIPAA and GDPR"]
    },
    {
        id: 2,
        icon: Calendar,
        title: "Appointment Management",
        description: "Efficient appointment scheduling and management for seamless patient bookings. Supports online booking, reminders, and real-time availability to minimize wait times and improve patient satisfaction.",
        imageUrl: "https://www.vivid.care/wp-content/uploads/2025/01/smallbox-FFA8yd4OynY-unsplash-1024x768.jpg?w=800&h=500&fit=crop",
        category: 'administrative',
        benefits: ["Reduced no-shows", "Optimized scheduling", "Better resource allocation", "Patient convenience via portal"]
    },
    {
        id: 3,
        icon: CheckCircle2,
        title: "OPD Management",
        description: "Outpatient department management with streamlined consultation workflows, patient flow tracking, and integration with doctor schedules. Enables efficient handling of daily outpatient visits.",
        imageUrl: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'clinical',
        benefits: ["Streamlined consultations", "Real-time patient tracking", "Reduced wait times", "Integrated scheduling"]
    },
    {
        id: 4,
        icon: BarChart3,
        title: "Billing & Invoicing",
        description: "Advanced billing and invoicing system with insurance claims processing, automated invoicing, and payment integration. Simplifies financial operations and ensures accurate revenue management.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'administrative',
        benefits: ["Automated claims processing", "Faster revenue cycles", "Insurance integration", "Error-free invoicing"]
    },
    {
        id: 5,
        icon: FlaskConical,
        title: "Laboratory Management",
        description: "Complete laboratory test management and result tracking, including workflow automation, quality control, and seamless integration with EHR for quick diagnostic insights.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661374880867-d9f52a0dace7?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'support',
        benefits: ["Automated test workflows", "Quick result turnaround", "Quality assurance", "EHR integration via HL7/FHIR"]
    },
    {
        id: 6,
        icon: Pill,
        title: "Pharmacy Module",
        description: "Full pharmacy inventory, prescription, and stock management, including prescription processing, drug interaction checks, and automated reordering to maintain optimal stock levels.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661777752178-fa6055526eb8?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'administrative',
        benefits: ["Inventory optimization", "Prescription safety checks", "Stock alerts and reordering", "Compliance tracking"]
    },
    {
        id: 7,
        icon: Scan,
        title: "Radiology Management",
        description: "Radiology imaging, reports, and diagnostic management with support for DICOM standards, report generation, and PACS integration for efficient handling of imaging workflows.",
        imageUrl: "https://images.unsplash.com/photo-1666214280352-db292c05fd80?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'support',
        benefits: ["Efficient image management", "Quick report generation", "Diagnostic accuracy", "PACS and API integration"]
    },
    {
        id: 8,
        icon: UserCheck,
        title: "Reception & Queue Management",
        description: "Front desk operations with patient registration, intelligent queue management, and real-time notifications. Enhances patient flow and reduces administrative bottlenecks at the reception.",
        imageUrl: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?fm=jpg&q=60&w=800&h=500&fit=crop&ixlib=rb-4.1.0",
        category: 'administrative',
        benefits: ["Queue optimization", "Smooth patient flow", "Reduced wait times", "Staff efficiency tools"]
    }
];

const FeaturesSection = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const selectedFeature = features[selectedIndex];

    const handleTabClick = useCallback((index: number) => {
        if (index === selectedIndex || isTransitioning) return;

        setIsTransitioning(true);
        setSelectedIndex(index);

        // Reset transition state after animation and scroll to center active tab
        setTimeout(() => {
            setIsTransitioning(false);
            if (tabRefs.current[index] && scrollContainerRef.current) {
                const tab = tabRefs.current[index];
                const container = scrollContainerRef.current;
                const tabRect = tab.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const scrollLeft = container.scrollLeft + (tabRect.left - containerRect.left) - (containerRect.width / 2) + (tabRect.width / 2);
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }, 300);
    }, [selectedIndex, isTransitioning]);

    const handleNext = useCallback(() => {
        if (isTransitioning) return;
        const nextIndex = (selectedIndex + 1) % features.length;
        handleTabClick(nextIndex);
    }, [selectedIndex, isTransitioning, handleTabClick]);

    const handlePrevious = useCallback(() => {
        if (isTransitioning) return;
        const prevIndex = selectedIndex === 0 ? features.length - 1 : selectedIndex - 1;
        handleTabClick(prevIndex);
    }, [selectedIndex, isTransitioning, handleTabClick]);

    const getCategoryColor = (category: Feature['category']) => {
        switch (category) {
            case 'clinical': return 'bg-blue-100 text-blue-800';
            case 'administrative': return 'bg-indigo-100 text-indigo-800';
            case 'support': return 'bg-emerald-100 text-emerald-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const IconComponent = selectedFeature.icon;

    return (
        <Container>
            <section className="relative py-16 md:py-20">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="w-full relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16 md:mb-20 max-w-5xl mx-auto px-2 md:px-4">
                        <Title className="text-primary font-bold mb-6 leading-tight">
                            Discover our Integrated Healthcare Platform
                        </Title>
                        <ParagraphLarge className="text-gray-600 mx-auto leading-relaxed">
                            Unified clinical, administrative, and operational platform designed to streamline
                            healthcare delivery and enhance patient outcomes across all departments.
                        </ParagraphLarge>
                    </div>

                    {/* Feature Navigation Tabs */}
                    <div className="mb-10 -mt-16">
                        <div 
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto scrollbar-hide pb-4 -mx-2 md:-mx-4 px-2 md:px-4"
                        >
                            <div className="flex gap-2 min-w-max mx-auto">
                                {features.map((feature, index) => {
                                    const TabIconComponent = feature.icon;
                                    const isSelected = index === selectedIndex;

                                    return (
                                        <button
                                            key={feature.id}
                                            ref={(el) => { tabRefs.current[index] = el; }}
                                            onClick={() => handleTabClick(index)}
                                            disabled={isTransitioning}
                                            className={`
                                                flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-300
                                                min-h-[3rem] sm:min-h-[3.25rem]
                                                ${isSelected
                                                    ? 'bg-white shadow-lg border border-gray-200 scale-[1.02]'
                                                    : 'bg-white/50 hover:bg-white border border-gray-100 hover:border-gray-200'
                                                }
                                                ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                                hover:shadow-md min-w-0
                                              `}
                                        >
                                            <div className={`
                                                p-2 sm:p-2.5 rounded-lg transition-colors
                                                ${isSelected ? 'bg-primary/10' : 'bg-gray-50'}
                                              `}>
                                                <TabIconComponent className={`
                                                  w-5 h-5 sm:w-6 sm:h-6 transition-colors
                                                  ${isSelected ? 'text-primary' : 'text-gray-500'}
                                                `} />
                                            </div>
                                            <span className={`
                                                font-medium whitespace-nowrap transition-colors text-sm sm:text-base
                                                ${isSelected ? 'text-gray-900' : 'text-gray-600'}
                                              `}>
                                                {feature.title}
                                            </span>
                                            <div className={`
                                                w-2 h-2 rounded-full transition-colors
                                                ${isSelected ? 'bg-primary' : 'bg-transparent'}
                                              `} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Feature Content Display */}
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start -mt-5">
                        {/* Image Section */}
                        <div className={`
              relative transition-opacity duration-300
              ${isTransitioning ? 'opacity-70' : 'opacity-100'}
            `}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-white">
                                {/* Category Badge */}
                                <div className="absolute top-6 left-6 z-20">
                                    <Muted className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${getCategoryColor(selectedFeature.category)}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {selectedFeature.category.charAt(0).toUpperCase() + selectedFeature.category.slice(1)}
                                    </Muted>
                                </div>

                                {/* Feature Counter */}
                                <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                    <Muted className="text-sm font-medium text-gray-700">
                                        {selectedIndex + 1} / {features.length}
                                    </Muted>
                                </div>

                                <Image
                                    src={selectedFeature.imageUrl}
                                    alt={`${selectedFeature.title} - Vaidhya Sewa Hospital Management System`}
                                    width={800}
                                    height={500}
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority={selectedIndex < 2}
                                    unoptimized
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    onClick={handlePrevious}
                                    disabled={isTransitioning}
                                    className="p-2 sm:p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0"
                                    aria-label="Previous feature"
                                >
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 rotate-180" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={isTransitioning}
                                    className="p-2 sm:p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0"
                                    aria-label="Next feature"
                                >
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-gradient-to-br from-primary/10 to-indigo-50 rounded-xl">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <TitleSmall className="font-bold text-primary">
                                        {selectedFeature.title}
                                    </TitleSmall>
                                </div>

                                <ParagraphLarge className="text-gray-600 text-lg leading-relaxed">
                                    {selectedFeature.description}
                                </ParagraphLarge>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-900">Key Benefits</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedFeature.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-primary/50 transition-colors"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* Action Buttons */}
                            <div className="flex flex-row flex-wrap gap-4 pt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="flex-1 bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[3rem] sm:min-h-[3.25rem]"
                                >
                                    <Link href="/demo" className="flex items-center justify-center gap-3 text-sm sm:text-base">
                                        <span>Request Demo</span>
                                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="flex-1 border-gray-300 hover:border-gray-400 min-h-[3rem] sm:min-h-[3.25rem]"
                                >
                                    <Link href="/features" className="flex items-center justify-center text-sm sm:text-base">
                                        <span>View Full Specifications</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default FeaturesSection;