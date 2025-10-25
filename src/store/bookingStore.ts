import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Applicant, NumberOfApplicants } from '@/types'

interface BookingStoreState {
    bookingStep: number
    setBookingStep: (value: number) => void
    applicants: Applicant[]
    setApplicants: (applicants: Applicant[]) => void
    // Date selection
    selectedDate: Date | undefined
    setSelectedDate: (date: Date | undefined) => void
    // Number of applicants
    numberOfApplicants: NumberOfApplicants | null
    setNumberOfApplicants: (number: NumberOfApplicants | null) => void
    // Total number of applicants as a single number
    totalApplicants: number
    setTotalApplicants: (count: number) => void
}

export const useBookingStore = create<BookingStoreState>()(
    devtools(
        (set) => ({
            bookingStep: 1,
            setBookingStep: value => set({ bookingStep: value }, false, 'setBookingStep'),
            applicants: [],
            setApplicants: applicants => set({ applicants }, false, 'setApplicants'),
            selectedDate: undefined,
            setSelectedDate: date => set({ selectedDate: date }, false, 'setSelectedDate'),
            numberOfApplicants: null,
            setNumberOfApplicants: number => set({ numberOfApplicants: number }, false, 'setNumberOfApplicants'),
            totalApplicants: 0,
            setTotalApplicants: count => set({ totalApplicants: count }, false, 'setTotalApplicants')
        }),
        {
            name: 'BookingStore', // This will show up as the store name in DevTools
        }
    )
)
