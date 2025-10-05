import { create } from 'zustand'
import { DateRange } from 'react-day-picker'
import { Applicant } from '@/types'

interface BookingStoreState {
    bookingStep: number
    setBookingStep: (value: number) => void
    applicants: Applicant[]
    setApplicants: (applicants: Applicant[]) => void
    // Date range selection
    dateRange: DateRange | undefined
    setDateRange: (range: DateRange | undefined) => void
}

export const useBookingStore = create<BookingStoreState>((set, get) => ({
    bookingStep: 1,
    setBookingStep: value => set({ bookingStep: value }),
    applicants: [],
    setApplicants: applicants => set({ applicants }),
    dateRange: undefined,
    setDateRange: range => set({ dateRange: range })
}))
