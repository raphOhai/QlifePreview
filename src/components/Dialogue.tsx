"use client"
import {
    Dialog,

    DialogContent,

    DialogTrigger,
} from "@/components/ui/dialog"

export function Dialogue({ triggerComponent, content }: { triggerComponent: React.ReactNode, content: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {triggerComponent}
            </DialogTrigger>
            <DialogContent className="w-[95vw] !max-w-[1280px] sm:!max-w-[1280px] py-[24px] h-[60vh] max-h-[800px]">
                {content}
            </DialogContent>
        </Dialog>
    )
}
