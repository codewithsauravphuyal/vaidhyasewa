// testimonial.tsx (updated with fixes)
import React from 'react'
import { Muted, ParagraphLarge, Title } from './ui/typography'
import { TestimonialsCarousel } from './testimonials-carousel'
import Container from './ui/container';

const testimonials = [
    {
        name: "Dr. Sarah Johnson",
        role: "Hospital Administrator",
        hospital: "City General Hospital",
        image: "/images/img_ellipse70.png",
        text: "Vaidhya Sewa has transformed our hospital operations. The system is intuitive, efficient, and has significantly improved our patient care quality.",
        rating: 5,
    },
    {
        name: "Dr. Rajesh Kumar",
        role: "Chief Medical Officer",
        hospital: "Metro Healthcare",
        image: "/images/img_ellipse70_1.png",
        text: "Excellent hospital management solution. Our staff adapted quickly and patient satisfaction improved significantly. Highly recommended!",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Operations Manager",
        hospital: "Sunrise Clinic",
        image: "/images/img_ellipse70_2.png",
        text: "The best investment we made for our hospital. Streamlined operations, better patient care, and excellent customer support.",
        rating: 5,
    },
    {
        name: "Anil Thapa",
        role: "IT Manager",
        hospital: "Everest Care Hospital",
        image: "/images/img_ellipse70.png",
        text: "Easy to use and perfectly fits our workflow. The support team is very responsive and helpful.",
        rating: 5,
    },
    {
        name: "Dr. Meera Shrestha",
        role: "Medical Director",
        hospital: "Green Valley Clinic",
        image: "/images/img_ellipse70_1.png",
        text: "We now have clear visibility into every department. Reporting and billing have become much smoother.",
        rating: 5,
    },
    {
        name: "Ramesh Karki",
        role: "Administrator",
        hospital: "Himalayan Health Center",
        image: "/images/img_ellipse70_2.png",
        text: "Implementation was quick and the team guided us throughout. Highly recommended for any clinic or hospital.",
        rating: 5,
    },
];

const Testimonial = () => {
    return (
        <Container>
            <section className="relative py-5 bg-white overflow-hidden">
                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <Title className="text-primary mb-6">
                            Trusted by Healthcare Providers
                        </Title>
                        <ParagraphLarge className="text-bluegray_500 mx-auto">
                            Hear from hospitals and clinics that have transformed their operations with Vaidhya Sewa.
                        </ParagraphLarge>
                    </div>
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>
        </Container>
    )
}

export default Testimonial