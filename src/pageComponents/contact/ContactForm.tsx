'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ConArt1 } from '../svgs/ConArt1'

export const ContactForm = () => {
    return (
        <div>
            <div className='space-y-6 md:space-y-8 lg:space-y-10 py-12 md:py-16 lg:py-[96px] px-4 md:px-8 lg:px-[48px]'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-4'>
                    <div className='md:col-span-6'>
                        <ContactCopy />
                    </div>
                    <div className='md:col-span-6'>
                        <ContactFormX />
                    </div>
                </div>
            </div>
            <div className='relative px-4 md:px-8 lg:px-[48px] py-12 md:py-16 lg:py-[96px] h-[100px] md:h-[150px] lg:h-[200px] hidden md:block'>
                <div className='absolute bottom-0 right-0'>
                    <ConArt1 />
                </div>
            </div>
        </div>
    )
}



// Zod schema for form validation
const contactFormSchema = z.object({
    fullName: z.string().min(1, 'Full name is required').min(2, 'Full name must be at least 2 characters'),
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    phoneNumber: z.string().min(1, 'Phone number is required').min(10, 'Phone number must be at least 10 digits'),
    message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const ContactFormX = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            message: '',
        },
    })

    const onSubmit = (data: ContactFormData) => {
        console.log('Form submitted:', data)
        // Here you would typically send the data to your backend
        // For now, we'll just log it and show an alert
        alert('Form submitted successfully! Check console for data.')
    }

    return (
        <div className='space-y-4 md:space-y-5'>
            <div className='space-y-2 md:space-y-3'>
                <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-tight lg:leading-[32px] text-[#00186B]'>
                    Get in Touch With Us
                </h1>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                    Fill out the form below and a member of our team will reach out to you shortly with the information or support you need.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem className='space-y-1'>
                                <FormLabel className='text-[14px] font-weight-[400] leading-[24px] text-[#707070]'>
                                    Full name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        className='py-6'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='space-y-1'>
                                <FormLabel className='text-[14px] font-weight-[400] leading-[24px] text-[#707070]'>
                                    Email address
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder=""
                                        className='py-6'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className='space-y-1'>
                                <FormLabel className='text-[14px] font-weight-[400] leading-[24px] text-[#707070]'>
                                    Phone number
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        className='py-6'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className='space-y-1'>
                                <FormLabel className='text-[14px] font-weight-[400] leading-[24px] text-[#707070]'>
                                    Please tell us the reason you for contacting us
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder=""
                                        rows={10}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className='bg-[#00186B] text-white p-[24px] rounded-[6px] w-full hover:bg-[#00186B]/90'
                    >
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    )
}


const ContactCopy = () => {
    return (
        <div className='space-y-6 md:space-y-8 lg:space-y-10 w-full md:max-w-[90%] lg:max-w-[80%]'>
            <div className='space-y-2 md:space-y-3'>
                <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-tight lg:leading-[32px] text-[#00186B]'>
                    Clinic Hours
                </h1>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                    Our clinic is open Monday to Saturday, with flexible hours designed to fit your schedule.
                </p>
                <div className='space-y-1'>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Monday - Friday: 8:00am - 7:00pm
                    </h1>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                        Saturdays & Public Holidays: 8:00am - 4:00pm
                    </h1>
                </div>
            </div>



            <div className='space-y-2 md:space-y-3'>
                <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-tight lg:leading-[32px] text-[#00186B]'>
                    Call us
                </h1>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                    Speak directly with our front desk. We&apos;re always happy to assist you.
                </p>
                <div className='space-y-1'>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                        +234 (0) 809 974 2000
                    </h1>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                        +234 (0) 81139 QLIFE (0811 397 5433)
                    </h1>
                </div>
            </div>



            <div className='space-y-2 md:space-y-3'>
                <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-tight lg:leading-[32px] text-[#00186B]'>
                    Email Us
                </h1>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                    Send us a message and our team will respond promptly to your inquiry.
                </p>
                <div className='space-y-3 md:space-y-4'>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                        customercare@qlifefamilyclinic.com
                    </h1>
                </div>
            </div>


            <div className='space-y-2 md:space-y-3'>
                <h1 className='text-xl md:text-2xl lg:text-[24px] font-weight-[400] leading-tight lg:leading-[32px] text-[#00186B]'>
                    Our Location
                </h1>
                <p className='text-sm md:text-base lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222]'>
                    We are conveniently located and easily accessible for patients across the city.
                </p>
                <div className='space-y-3 md:space-y-4'>
                    <h1 className='text-base md:text-lg lg:text-[20px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#222] w-full md:max-w-[80%] lg:max-w-[70%]'>
                        155 Prince Ade Odedina Street,
                        Off Sinari Daranijo, Victoria Island 101244,
                        Lagos, Nigeria
                    </h1>
                </div>

                <p className='text-xs md:text-sm lg:text-[16px] font-weight-[400] leading-relaxed lg:leading-[24px] text-[#707070]'>
                    Access Ajose Adeogun from Eko Hotel round about, make a second right turn onto Younis Bashorun (by Haliburton after Zenith Bank HQ) then a second left unto Sinari Daranijo. Prince Ade Odedina is the first street on the right. We are at 155A Prince Ade Odedina Street.
                </p>
            </div>





        </div>

    )
}