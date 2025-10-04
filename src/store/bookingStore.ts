import { create } from 'zustand'
import { DateRange } from 'react-day-picker'

interface BookingStoreState {
    bookingStep: number
    setBookingStep: (value: number) => void
    
    // Date range selection
    dateRange: DateRange | undefined
    setDateRange: (range: DateRange | undefined) => void
}

export const useBookingStore = create<BookingStoreState>((set, get) => ({
    bookingStep: 1,
    setBookingStep: value => set({ bookingStep: value }),
    
    dateRange: undefined,
    setDateRange: range => set({ dateRange: range })
}))
