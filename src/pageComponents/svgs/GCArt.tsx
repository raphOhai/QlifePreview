'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { IO } from '../../../Animations/observe'

export const GCArt = (props: React.SVGProps<SVGSVGElement>) => {
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (!svgRef.current) return

        const svg = svgRef.current
        const elements = svg.querySelectorAll('rect, circle, path')

        // Set initial state - hide all elements
        gsap.set(elements, { 
            opacity: 0,
            scale: 0.8,
            transformOrigin: 'center'
        })

        // Animate when scrolled into view
        IO(svg, { threshold: 0.3 }).then(() => {
            gsap.to(elements, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                stagger: {
                    amount: 0.8, // Total time for all elements to animate
                    from: 'start', // Animation order
                    ease: 'power2.out'
                },
                ease: 'back.out(1.7)',
                delay: 0.1
            })
        })

        // Cleanup
        return () => {
            gsap.set(elements, { clearProps: 'all' })
        }
    }, [])

    return (
        <svg 
            ref={svgRef}
            width="100%" 
            height="auto" 
            viewBox="0 0 950 256" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <rect y="12" width="99" height="8" fill="#00186B" />
            <rect x="97" y="8" width="124" height="16" rx="4" fill="#F8F4EB" />
            <rect x="105" y="8" width="6" height="16" fill="#FEC52C" />
            <circle cx="125" cy="16" r="6" fill="#00186B" />
            <circle cx="145" cy="16" r="6" fill="#00186B" />
            <rect x="159" y="8" width="6" height="16" fill="#FEC52C" />
            <rect x="173" y="8" width="6" height="16" fill="#FEC52C" />
            <circle cx="193" cy="16" r="6" fill="#00186B" />
            <rect x="207" y="8" width="6" height="16" fill="#FEC52C" />
            <rect x="219" y="12" width="109" height="8" fill="#00186B" />
            <circle cx="342" cy="16" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="356" y="12" width="109" height="8" fill="#00186B" />
            <rect x="463" y="8" width="96" height="16" rx="4" fill="#F8F4EB" />
            <rect x="471" y="8" width="6" height="16" fill="#A6E5D7" />
            <circle cx="491" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="511" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="531" cy="16" r="6" fill="#C1AAE4" />
            <rect x="545" y="8" width="6" height="16" fill="#A6E5D7" />
            <rect x="557" y="12" width="116" height="8" fill="#00186B" />
            <circle cx="687" cy="16" r="13" stroke="#00186B" strokeWidth="6" />
            <rect y="124" width="196" height="8" fill="#00186B" />
            <circle cx="210" cy="128" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="224" y="124" width="160" height="8" fill="#00186B" />
            <rect x="382" y="120" width="164" height="16" rx="4" fill="#F8F4EB" />
            <rect x="390" y="120" width="6" height="16" fill="#FFF16F" />
            <circle cx="410" cy="128" r="6" fill="#A6E5D7" />
            <circle cx="430" cy="128" r="6" fill="#A6E5D7" />
            <circle cx="450" cy="128" r="6" fill="#A6E5D7" />
            <circle cx="470" cy="128" r="6" fill="#A6E5D7" />
            <rect x="484" y="120" width="6" height="16" fill="#FFF16F" />
            <rect x="498" y="120" width="6" height="16" fill="#FFF16F" />
            <circle cx="518" cy="128" r="6" fill="#A6E5D7" />
            <rect x="532" y="120" width="6" height="16" fill="#FFF16F" />
            <rect x="544" y="124" width="120" height="8" fill="#00186B" />
            <circle cx="678" cy="128" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="692" y="124" width="228" height="8" fill="#00186B" />
            <circle cx="934" cy="128" r="13" stroke="#00186B" strokeWidth="6" />
            <rect y="236" width="99" height="8" fill="#00186B" />
            <rect x="97" y="232" width="84" height="16" rx="4" fill="#F8F4EB" />
            <rect x="105" y="232" width="6" height="16" fill="#FEC52C" />
            <circle cx="125" cy="240" r="6" fill="#A6E5D7" />
            <rect x="139" y="232" width="6" height="16" fill="#FEC52C" />
            <rect x="153" y="232" width="6" height="16" fill="#FEC52C" />
            <rect x="167" y="232" width="6" height="16" fill="#FEC52C" />
            <rect x="179" y="236" width="173" height="8" fill="#00186B" />
            <rect x="350" y="232" width="246" height="16" rx="4" fill="#F8F4EB" />
            <rect x="358" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="378" cy="240" r="6" fill="#C5E4F6" />
            <rect x="392" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="412" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="432" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="452" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="472" cy="240" r="6" fill="#C5E4F6" />
            <rect x="486" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="506" cy="240" r="6" fill="#C5E4F6" />
            <rect x="520" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="534" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="548" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="568" cy="240" r="6" fill="#C5E4F6" />
            <rect x="582" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="594" y="236" width="116" height="8" fill="#00186B" />
            <circle cx="724" cy="240" r="13" stroke="#00186B" strokeWidth="6" />
        </svg>
    )
}
