import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Container from './ui/container'
import { Button } from './ui/button'
import { Title, ParagraphLarge } from './ui/typography'

const companies = [
    {
        name: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
        name: 'Facebook',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
    },
    {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    },
    {
        name: 'Netflix',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
    },
    {
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
        name: 'Tesla',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/640px-Tesla_T_symbol.svg.png',
    },
    {
        name: 'Uber',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg',
    },
    {
        name: 'Spotify',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Spotify_New_Full_Logo_RGB_Green.png/640px-Spotify_New_Full_Logo_RGB_Green.png',
    },
    {
        name: 'Airbnb',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    },
    {
        name: 'Salesforce',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/640px-Salesforce.com_logo.svg.png',
    },
    {
        name: 'Adobe',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Adobe_logo_and_wordmark_%282017%29.svg',
    },
]

const Trustedby = () => {
    return (
        <Container>
            <section
                className="relative py-5 overflow-hidden"
            >
                <div className="relative z-10 mx-auto text-center">
                    <div className="text-center mb-16">
                        <Title className="text-primary mb-6">
                            Trusted by Leading Hospitals
                        </Title>
                        <ParagraphLarge className="text-bluegray_500 mx-auto max-w-2xl">
                            Hospitals rely on Vaidhya Sewa to streamline operations and enhance patient care.
                        </ParagraphLarge>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="group relative flex items-center justify-center h-16 sm:h-20 w-full transition-all duration-300"
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={160}
                                    height={64}
                                    className="max-h-10 sm:max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                                    unoptimized
                                />
                                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-primary text-white px-2.5 py-2 rounded shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
                                    {company.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="px-6 md:px-8 bg-primary hover:bg-secondary text-white shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <a href="#trusted-by">
                                <span className="mr-2">View All</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Trustedby