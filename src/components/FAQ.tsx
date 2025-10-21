'use client'
import React, { useState } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'

export const FAQ = ({leadingText}:{leadingText?: string}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "How do I book an appointment at QLife?",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },

        {
            question: "How often should I schedule a health check-up?",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },

        {
            question: "Can I access specialist doctors through QLife?",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },

        {
            question: "How do I book an appointment at QLife?",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },
        {
            question: "How do I book an appointment at QLife?",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },
        {
            question: "How quickly can I get results from tests?    ",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },
        {
            question: "How do I book an appointment at QLife?",
            answer: "QLife Family Clinic is a healthcare provider that offers a range of services to the community. We are a team of healthcare professionals who are dedicated to providing the best possible care to our patients."
        },

    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-[48px] py-12 md:py-16 lg:py-[96px]'>
            <div className='md:col-span-6'>

                <div className='flex flex-col gap-4 md:gap-6 lg:gap-7'>
                    <h1 className='text-[#00186B] text-2xl md:text-3xl lg:text-[40px] font-weight-[500] leading-tight md:leading-[40px] lg:leading-[54px]'>
                        {leadingText || 'Have any questions? We got you. Check out some of our FAQ&apos;s'}
                    </h1>
                    <p className='text-[#0B0A0B] text-sm md:text-base lg:text-[16px] font-weight-[400]'>
                        Curious to learn more about healthcare that combines personalized attention with clinical excellence? We have the answers to our customers&apos; frequently asked questions here.
                    </p>

                </div>

            </div>
            <div className='md:col-span-6 mt-6 md:mt-12 lg:mt-20'>
                <div className='flex flex-col gap-3 md:gap-4'>
                    {faqs.map((faq, index) => (
                        <FAQblock
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => toggleFAQ(index)}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}





const FAQblock = ({ question, answer, isOpen, onToggle }: {
    question: string,
    answer: string,
    isOpen: boolean,
    onToggle: () => void
}) => {
    return (
        <div className='flex flex-col gap-3 md:gap-4 border-b border-[#F0F0F0] pb-3 md:pb-4'>
            <div className='grid grid-cols-12 gap-3 md:gap-4'>
                <div className='col-span-10 md:col-span-8'>
                    <h1 className='text-[#0B0A0B] text-base md:text-lg lg:text-[20px] font-weight-[500] leading-[24px] tracking-[-0.6px]'>{question}</h1>
                </div>
                <div className='col-span-2 md:col-span-4 flex items-center justify-end'>
                    <button
                        onClick={onToggle}
                        className='transition-transform duration-200 hover:scale-110 p-1 md:p-2'
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        {isOpen ? (
                            <MinusIcon className='w-5 h-5 md:w-6 md:h-6 transition-transform duration-200' />
                        ) : (
                            <PlusIcon className='w-5 h-5 md:w-6 md:h-6 transition-transform duration-200' />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
            >
                <p className='text-[#0B0A0B] text-sm md:text-[15px] font-weight-[400] leading-[22px] md:leading-[24px] tracking-[-0.48px] pt-2'>
                    {answer}
                </p>
            </div>
        </div>
    )
}