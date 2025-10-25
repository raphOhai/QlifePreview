import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useBookingStore } from '@/store/bookingStore'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export const NumberOfPatients = () => {
    const [showNumberOfPatientsBox, setShowNumberOfPatientsBox] = useState(false)

    const handleShowNumberOfPatientsBox = () => {
        setShowNumberOfPatientsBox(true)
    }

    const { numberOfApplicants, totalApplicants } = useBookingStore()

    

    return (
        <div className='relative'>
            <div className='space-y-1 md:space-y-2' onClick={handleShowNumberOfPatientsBox}>
                <p className='text-sm md:text-[14px] font-weight-[500] leading-relaxed lg:leading-[24px] text-[#222]'>
                    Select number of applicants
                </p>
                <Input value={totalApplicants} className='mt-2' />
            </div>
            {showNumberOfPatientsBox && <NumberOfPatientsBox onDone={() => setShowNumberOfPatientsBox(false)} />}
        </div>

    )
}


const NumberOfPatientsBox = ({ onDone }: { onDone: () => void }) => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    const { setNumberOfApplicants, setTotalApplicants } = useBookingStore()
    
    const handleDone = () => {
        const total = adults + children + infants
        setNumberOfApplicants({
            adults,
            children,
            infants
        })
        setTotalApplicants(total)
        onDone()
    }

    return (
        <div className='absolute top-0 right-0 space-y-4 bg-[#FFFFFE] border border-[#E6E6E6] w-[80%] p-[40px] rounded-[6px] shadow-lg'>
            <div className='space-y-1 grid grid-cols-12 gap-4 items-center'>
                <div className='col-span-6'>
                    <h1 className='text-sm font-medium'>
                        Adults
                    </h1>
                </div>
                <div className='col-span-6'>
                    <NumberBoxs value={adults} onChange={setAdults} min={0} max={10} />
                </div>
            </div>

            <div className='space-y-1 grid grid-cols-12 gap-4 items-center'>
                <div className='col-span-6'>
                    <h1 className='text-sm font-medium'>
                        Children
                    </h1>
                </div>
                <div className='col-span-6'>
                    <NumberBoxs value={children} onChange={setChildren} min={0} max={10} />
                </div>
            </div>

            <div className='space-y-1 grid grid-cols-12 gap-4 items-center'>
                <div className='col-span-6'>
                    <h1 className='text-sm font-medium'>
                        Infants
                    </h1>
                </div>
                <div className='col-span-6'>
                    <NumberBoxs value={infants} onChange={setInfants} min={0} max={5} />
                </div>
            </div>



            <div className='grid grid-cols-12 gap-4 items-center'>
                <div className='col-span-8'>
                    <h1>
                        Number of applicants
                    </h1>
                </div>

                <div className='col-span-4 items-center justify-end flex'>
                    <div className='bg-[#FAFAFA] border border-[#E6E6E6] pl-[34px] pr-[34px] rounded h-[50px] flex items-center justify-center'>
                        <p className='text-sm font-medium'>
                            {adults + children + infants}
                        </p>
                    </div>
                </div>
            </div>



            <Button 
                variant='outline' 
                onClick={handleDone}
                className='w-full bg-transparent border border-[#00186B] text-[#00186B] p-[24px] rounded-[6px] hover:bg-[#00186B]/10'
            >
                <p className='text-sm font-medium'>
                    Done
                </p>
            </Button>

        </div>
    )
}




interface NumberBoxsProps {
    value?: number
    onChange?: (value: number) => void
    min?: number
    max?: number
}

const NumberBoxs = ({ value: initialValue = 0, onChange, min = 0, max = 10 }: NumberBoxsProps) => {
    const [value, setValue] = useState(initialValue)

    const handleIncrement = () => {
        const newValue = value + 1
        if (newValue <= max) {
            setValue(newValue)
            onChange?.(newValue)
        }
    }

    const handleDecrement = () => {
        const newValue = value - 1
        if (newValue >= min) {
            setValue(newValue)
            onChange?.(newValue)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(e.target.value) || 0
        const clampedValue = Math.min(Math.max(inputValue, min), max)
        setValue(clampedValue)
        onChange?.(clampedValue)
    }

    return (
        <div className='grid grid-cols-12 gap-4 bg-[#FAFAFA] border border-[#E6E6E6] p-[13px] rounded  overflow-hidden'>
            <button
                onClick={handleDecrement}
                disabled={value <= min}
                className='col-span-4 items-center justify-center flex cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#E6E6E6] rounded transition-colors'
            >
                <Minus className='w-6 h-6' />
            </button>
            <div className='col-span-4'>
                <input
                    type='number'
                    value={value}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    className='w-full text-center bg-transparent outline-none'
                />
            </div>
            <button
                onClick={handleIncrement}
                disabled={value >= max}
                className='col-span-4 items-center justify-center flex cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#E6E6E6] rounded transition-colors'
            >
                <Plus className='w-6 h-6' />
            </button>
        </div>
    )
}


