'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { IO } from '../../../Animations/observe'

export const Art1 = () => {
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
            width="1098" 
            height="351" 
            viewBox="0 0 1098 351" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="59" y="42" width="42" height="8" fill="#00186B" />
            <rect x="99" y="38" width="84" height="16" rx="4" fill="#F8F4EB" />
            <rect x="107" y="38" width="6" height="16" fill="#00186B" />
            <circle cx="127" cy="46" r="6" fill="#C1AAE4" />
            <rect x="141" y="38" width="6" height="16" fill="#00186B" />
            <rect x="155" y="38" width="6" height="16" fill="#00186B" />
            <rect x="169" y="38" width="6" height="16" fill="#00186B" />
            <rect x="181" y="42" width="241" height="8" fill="#00186B" />
            <circle cx="436" cy="46" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="450" y="42" width="92" height="8" fill="#00186B" />
            <rect x="540" y="38" width="246" height="16" rx="4" fill="#F8F4EB" />
            <rect x="548" y="38" width="6" height="16" fill="#C1AAE4" />
            <circle cx="568" cy="46" r="6" fill="#C5E4F6" />
            <rect x="582" y="38" width="6" height="16" fill="#C1AAE4" />
            <circle cx="602" cy="46" r="6" fill="#C5E4F6" />
            <circle cx="622" cy="46" r="6" fill="#C5E4F6" />
            <circle cx="642" cy="46" r="6" fill="#C5E4F6" />
            <circle cx="662" cy="46" r="6" fill="#C5E4F6" />
            <rect x="676" y="38" width="6" height="16" fill="#C1AAE4" />
            <circle cx="696" cy="46" r="6" fill="#C5E4F6" />
            <rect x="710" y="38" width="6" height="16" fill="#C1AAE4" />
            <rect x="724" y="38" width="6" height="16" fill="#C1AAE4" />
            <rect x="738" y="38" width="6" height="16" fill="#C1AAE4" />
            <circle cx="758" cy="46" r="6" fill="#C5E4F6" />
            <rect x="772" y="38" width="6" height="16" fill="#C1AAE4" />
            <rect x="784" y="42" width="148" height="8" fill="#00186B" />
            <rect x="930" y="38" width="70" height="16" rx="4" fill="#F8F4EB" />
            <rect x="938" y="38" width="6" height="16" fill="#FEC52C" />
            <circle cx="958" cy="46" r="6" fill="#C5E4F6" />
            <rect x="972" y="38" width="6" height="16" fill="#FEC52C" />
            <rect x="986" y="38" width="6" height="16" fill="#FEC52C" />
            <rect x="998" y="42" width="100" height="8" fill="#00186B" />
            <rect x="59" y="154" width="560" height="8" fill="#00186B" />
            <rect x="617" y="150" width="96" height="16" rx="4" fill="#F8F4EB" />
            <rect x="625" y="150" width="6" height="16" fill="#A6E5D7" />
            <circle cx="645" cy="158" r="6" fill="#FFF16F" />
            <circle cx="665" cy="158" r="6" fill="#FFF16F" />
            <circle cx="685" cy="158" r="6" fill="#FFF16F" />
            <rect x="699" y="150" width="6" height="16" fill="#A6E5D7" />
            <rect x="711" y="154" width="295" height="8" fill="#00186B" />
            <circle cx="1020" cy="158" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="1034" y="154" width="64" height="8" fill="#00186B" />
            <circle cx="407" cy="270" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="421" y="266" width="348" height="8" fill="#00186B" />
            <rect x="767" y="262" width="124" height="16" rx="4" fill="#F8F4EB" />
            <rect x="775" y="262" width="6" height="16" fill="#FFF16F" />
            <circle cx="795" cy="270" r="6" fill="#00186B" />
            <rect x="809" y="262" width="6" height="16" fill="#C1AAE4" />
            <circle cx="829" cy="270" r="6" fill="#00186B" />
            <circle cx="849" cy="270" r="6" fill="#00186B" />
            <rect x="863" y="262" width="6" height="16" fill="#FFF16F" />
            <rect x="877" y="262" width="6" height="16" fill="#C1AAE4" />
            <rect x="889" y="266" width="30" height="8" fill="#00186B" />
            <circle cx="933" cy="270" r="13" stroke="#00186B" strokeWidth="6" />
            <rect x="947" y="266" width="151" height="8" fill="#00186B" />
            <path d="M60.7065 161.996C52.7708 162.089 44.8953 160.607 37.5362 157.636C30.1771 154.665 23.4807 150.263 17.8345 144.686C12.1884 139.108 7.70488 132.466 4.64353 125.144C1.58219 117.822 0.00388039 109.966 1.26348e-05 102.029C-0.00385512 94.093 1.56679 86.2347 4.62099 78.9097C7.67518 71.5846 12.1523 64.9382 17.7929 59.3554C23.4336 53.7726 30.1258 49.3643 37.482 46.3858C44.8382 43.4073 52.7122 41.9178 60.648 42.0035L60.5617 49.9986C53.6833 49.9243 46.8586 51.2153 40.4827 53.7969C34.1068 56.3785 28.3064 60.1993 23.4174 65.0382C18.5284 69.877 14.648 75.6377 12.0008 81.9867C9.35356 88.3356 7.99222 95.1466 7.99557 102.025C7.99893 108.904 9.36691 115.714 12.0203 122.06C14.6737 128.407 18.5598 134.163 23.4535 138.997C28.3472 143.832 34.1513 147.647 40.5297 150.222C46.9082 152.797 53.7341 154.082 60.6124 154.001L60.7065 161.996Z" fill="#00186B" />
        </svg>
    )
}