"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"

type Testimonial = {
  name: string
  role: string
  hospital: string
  image: string
  text: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

const makeInfinite = (arr: Testimonial[]) => [...arr, ...arr, ...arr]

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [cardsPerView, setCardsPerView] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const trackRef = useRef<HTMLDivElement | null>(null)

  const animationRef = useRef<number | null>(null)
  const currentPosition = useRef<number>(0)

  const startX = useRef<number>(0)
  const savedPos = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const infinite = makeInfinite(testimonials)
  const speed = 1

  useEffect(() => {
    const update = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : 1)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const animate = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    if (!isPaused && !isDragging.current) {
      currentPosition.current += speed
    }

    const fullWidth = track.scrollWidth / 3

    if (currentPosition.current >= fullWidth) {
      currentPosition.current = 0
    }

    track.style.transform = `translateX(-${currentPosition.current}px)`

    animationRef.current = requestAnimationFrame(animate)
  }, [isPaused])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [animate])

  const handleDown = (clientX: number) => {
    const track = trackRef.current
    if (!track) return

    isDragging.current = true
    startX.current = clientX
    savedPos.current = currentPosition.current
    track.style.cursor = "grabbing"
  }

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !trackRef.current) return

    const walk = (clientX - startX.current) * 1.8
    currentPosition.current = savedPos.current - walk

    trackRef.current.style.transform = `translateX(-${currentPosition.current}px)`
  }

  const stopDragging = () => {
    isDragging.current = false
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab"
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-10 select-none">
      <div className="relative">
        <div
          ref={trackRef}
          className="flex cursor-grab"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false)
            stopDragging()
          }}
          onMouseDown={(e) => handleDown(e.pageX)}
          onMouseMove={(e) => handleMove(e.pageX)}
          onMouseUp={stopDragging}
          onTouchStart={(e) => handleDown(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={stopDragging}
        >
          {infinite.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-3 md:px-4"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="h-full flex flex-col bg-white rounded-xl shadow-md p-6 md:p-8 relative border border-gray-200">
                {/* Profile image */}
                <div className="absolute -top-8 left-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={61}
                    height={61}
                    className="rounded-full border-4 border-white"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="pt-8 flex flex-col h-full">
                  <p className="text-base text-gray-600 mb-6 leading-relaxed flex-1">
                    "{t.text}"
                  </p>

                  <div className="mt-auto">
                    <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    <p className="text-sm text-teal-700 font-medium">{t.hospital}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
