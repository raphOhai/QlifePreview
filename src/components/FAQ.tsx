'use client'
import React, { useState } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'

export const FAQ = () => {
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
        <div className='grid grid-cols-12 gap-10 px-[48px] py-[96px]'>
            <div className='col-span-6'>

                <div className='flex flex-col gap-7'>
                    <h1 className='text-[#00186B] text-[40px] font-weight-[500] leading-[54px]'>
                        Have any questions? We got you. Check out some of our FAQ's
                    </h1>
                    <p className='text-[#0B0A0B] text-[16px] font-weight-[400]'>
                        Curious to learn more about healthcare that combines personalized attention with clinical excellence? We have the answers to our customers' frequently asked questions here.
                    </p>

                </div>

            </div>
            <div className='col-span-6 mt-20'>
                <div className='flex flex-col gap-4'>
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
        <div className='flex flex-col gap-4 border-b border-[#F0F0F0] pb-4'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-8'>
                    <h1 className='text-[#0B0A0B] text-[20px] font-weight-[500] leading-[24px] tracking-[-0.6px]'>{question}</h1>
                </div>
                <div className='col-span-4 flex items-center justify-end'>
                    <button
                        onClick={onToggle}
                        className='transition-transform duration-200 hover:scale-110'
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        {isOpen ? (
                            <MinusIcon className='transition-transform duration-200' />
                        ) : (
                            <PlusIcon className='transition-transform duration-200' />
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
                <p className='text-[#0B0A0B] text-[15px] font-weight-[400] leading-[24px] tracking-[-0.48px] pt-2'>
                    {answer}
                </p>
            </div>
        </div>
    )
}