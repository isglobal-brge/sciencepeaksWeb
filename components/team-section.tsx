"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Linkedin, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel, { type EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  isGlobalProfile?: string;
  linkedinProfile?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Eva Innovate",
    role: "Lead Researcher, ISGlobal",
    bio: "Expert in cancer-related fatigue and digital health interventions. Passionate about leveraging technology to improve patient outcomes. Her work has been published in numerous high-impact journals.",
    imageSrc: "/placeholder.svg?height=300&width=400&text=Dr.Eva",
    isGlobalProfile: "#",
    linkedinProfile: "#",
  },
  {
    id: 2,
    name: "Prof. Alex Data",
    role: "AI & Data Science Lead, ISGlobal",
    bio: "Specializes in machine learning models for predictive health analytics and personalized medicine. Leads the development of our core algorithms.",
    imageSrc: "/placeholder.svg?height=300&width=400&text=Prof.Alex",
    isGlobalProfile: "#",
  },
  {
    id: 3,
    name: "Dr. Ben Wellness",
    role: "Exercise Physiology Expert, ISGlobal",
    bio: "Focuses on developing and validating exercise prescriptions for chronic disease management, including CRF. Ensures our recommendations are safe and effective.",
    imageSrc: "/placeholder.svg?height=300&width=400&text=Dr.Ben",
    linkedinProfile: "#",
  },
  {
    id: 4,
    name: "Maria Tech",
    role: "Lead Software Engineer",
    bio: "Architecting and building the SCIENCEPEAKS platform with a focus on scalability, security, and user experience. Manages the engineering team.",
    imageSrc: "/placeholder.svg?height=300&width=400&text=MariaT",
    linkedinProfile: "#",
  },
  {
    id: 5,
    name: "Dr. Sofia Clinical",
    role: "Clinical Trials Coordinator, ISGlobal",
    bio: "Oversees the design and execution of clinical validation studies for SCIENCEPEAKS, ensuring rigorous testing and adherence to ethical standards.",
    imageSrc: "/placeholder.svg?height=300&width=400&text=Dr.Sofia",
    isGlobalProfile: "#",
    linkedinProfile: "#",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };

export function TeamSection() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();

    const wrapper = carouselWrapperRef.current;
    const stopAutoplay = () => autoplay.current.stop();
    const playAutoplay = () => autoplay.current.play();

    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAutoplay);
      wrapper.addEventListener('mouseleave', playAutoplay);
    }

    return () => {
      emblaApi.off("select", onSelect);
      if (wrapper) {
        wrapper.removeEventListener('mouseenter', stopAutoplay);
        wrapper.removeEventListener('mouseleave', playAutoplay);
      }
    };
  }, [emblaApi]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <motion.span
              variants={itemVariants}
              className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4"
            >
              Our Experts
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins"
            >
              Meet the Minds Behind SCIENCEPEAKS
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Our multidisciplinary team from ISGlobal combines expertise in oncology, data science, exercise physiology, and technology to drive innovation in cancer care.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="relative" ref={carouselWrapperRef}>
            <div className="overflow-hidden w-full max-w-3xl mx-auto pb-4" ref={emblaRef}>
              <div className="flex">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex-grow-0 flex-shrink-0 basis-full min-w-0 px-2 md:px-4"
                  >
                    <div
                      className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start p-6 md:p-8 space-y-4 md:space-y-0 md:space-x-6 h-full"
                    >
                      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                        <Image
                          src={member.imageSrc}
                          alt={member.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 font-poppins">{member.name}</h3>
                        <p className="text-sm md:text-base text-teal-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-4 h-24 md:min-h-[6rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                          {member.bio}
                        </p>
                        <div className="flex space-x-3 pt-3 border-t border-gray-200/70 justify-center md:justify-start">
                          {member.isGlobalProfile && (
                            <a
                              href={member.isGlobalProfile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-teal-600 transition-colors"
                              aria-label={`${member.name}'s ISGlobal Profile`}
                            >
                              <Globe size={20} />
                            </a>
                          )}
                          {member.linkedinProfile && (
                            <a
                              href={member.linkedinProfile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-700 transition-colors"
                              aria-label={`${member.name}'s LinkedIn Profile`}
                            >
                              <Linkedin size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 md:-left-4 z-10">
              <button 
                onClick={scrollPrev} 
                className="p-2 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-sm text-teal-500 hover:text-teal-700 transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={!emblaApi?.canScrollPrev()}
                aria-label="Previous team member"
              >
                <ChevronLeft size={24} className="md:w-7 md:h-7"/>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 md:-right-4 z-10">
              <button 
                onClick={scrollNext} 
                className="p-2 rounded-full bg-white/60 hover:bg-white/90 backdrop-blur-sm text-teal-500 hover:text-teal-700 transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={!emblaApi?.canScrollNext()}
                aria-label="Next team member"
              >
                <ChevronRight size={24} className="md:w-7 md:h-7"/>
              </button>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollTo(index);
                    autoplay.current.reset();
                  }}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ease-out ${
                    index === selectedIndex ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 