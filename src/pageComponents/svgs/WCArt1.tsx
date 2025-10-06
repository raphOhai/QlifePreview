'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { IO } from '../../../Animations/observe'

export const WCArt1 = (props: React.SVGProps<SVGSVGElement>) => {
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        if (!svgRef.current) return

        const svg = svgRef.current
        const rects = svg.querySelectorAll('rect')
        const circles = svg.querySelectorAll('circle')
        const paths = svg.querySelectorAll('path')

        // Store original attributes for restoration
        const originalAttributes = new Map()
        const allElements = [...rects, ...circles, ...paths]
        
        allElements.forEach((el) => {
            const fill = el.getAttribute('fill')
            const stroke = el.getAttribute('stroke')
            const strokeWidth = el.getAttribute('stroke-width')
            
            originalAttributes.set(el, { fill, stroke, strokeWidth })
            
            // Convert filled shapes to strokes for drawing effect (except circles)
            if (fill && fill !== 'none' && el.tagName !== 'circle') {
                el.setAttribute('stroke', fill)
                el.setAttribute('stroke-width', '2')
                el.setAttribute('fill', 'none')
            }
        })

        // Set up stroke dash animation for paths only (keep circles as they are)
        const strokeElements = [...paths]
        strokeElements.forEach((el) => {
            const length = el.getTotalLength ? el.getTotalLength() : 100
            el.style.strokeDasharray = `${length}`
            el.style.strokeDashoffset = `${length}`
        })

        // Set initial state - hide all elements
        gsap.set(allElements, { 
            opacity: 0,
            scale: 0.9,
            transformOrigin: 'center'
        })

        // Animate when scrolled into view
        IO(svg, { threshold: 0.3 }).then(() => {
            const tl = gsap.timeline()

            // First, fade in and scale up all elements
            tl.to(allElements, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                stagger: {
                    amount: 0.8,
                    from: 'start',
                    ease: 'power2.out'
                },
                ease: 'back.out(1.2)'
            })

            // Then animate stroke drawing for circles and paths
            tl.to(strokeElements, {
                strokeDashoffset: 0,
                duration: 0.4,
                stagger: {
                    amount: 0.5,
                    from: 'start'
                },
                ease: 'power2.inOut'
            }, '-=0.6')

            // Smoothly animate fill restoration
            tl.to(allElements.filter(el => {
                const original = originalAttributes.get(el)
                return original && original.fill && el.tagName !== 'circle'
            }), {
                duration: 0.3,
                ease: 'power2.inOut',
                onStart: function() {
                    // Set up for fill animation by ensuring stroke is visible
                    this.targets().forEach((el: Element) => {
                        const original = originalAttributes.get(el)
                        if (original && original.fill) {
                            el.setAttribute('fill', 'transparent')
                        }
                    })
                },
                onComplete: function() {
                    // Restore all original attributes after animation
                    allElements.forEach((el) => {
                        const original = originalAttributes.get(el)
                        if (original) {
                            if (original.fill) {
                                el.setAttribute('fill', original.fill)
                            }
                            if (original.stroke) {
                                el.setAttribute('stroke', original.stroke)
                            } else {
                                el.removeAttribute('stroke')
                            }
                            if (original.strokeWidth) {
                                el.setAttribute('stroke-width', original.strokeWidth)
                            } else {
                                el.removeAttribute('stroke-width')
                            }
                        }
                    })
                }
            }, '+=0.2')

            // Animate the fill color smoothly using GSAP's color interpolation
            tl.to(allElements.filter(el => {
                const original = originalAttributes.get(el)
                return original && original.fill && el.tagName !== 'circle'
            }), {
                duration: 0.3,
                ease: 'power2.inOut',
                stagger: {
                    amount: 0.2,
                    from: 'start'
                },
                onUpdate: function() {
                    const progress = this.progress()
                    this.targets().forEach((el: Element) => {
                        const original = originalAttributes.get(el)
                        if (original && original.fill) {
                            // Gradually transition from transparent to original fill
                            const fillOpacity = progress
                            ;(el as SVGElement).style.fillOpacity = fillOpacity.toString()
                            el.setAttribute('fill', original.fill)
                        }
                    })
                }
            }, '-=0.3')
        })

        // Cleanup
        return () => {
            gsap.set(allElements, { clearProps: 'all' })
        }
    }, [])

    return (
        <svg 
            ref={svgRef}
            width="100%" 
            height="auto" 
            viewBox="0 0 888 256" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <rect x="502" y="12" width="51" height="8" fill="#00186B" />
            <rect x="551" y="8" width="136" height="16" rx="4" fill="#F8F4EB" />
            <circle cx="565" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="585" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="605" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="625" cy="16" r="6" fill="#C1AAE4" />
            <rect x="639" y="8" width="6" height="16" fill="#FEC52C" />
            <circle cx="659" cy="16" r="6" fill="#C1AAE4" />
            <rect x="673" y="8" width="6" height="16" fill="#FEC52C" />
            <rect x="685" y="12" width="85" height="8" fill="#00186B" />
            <circle cx="784" cy="16" r="13" stroke="#00186B" stroke-width="6" />
            <circle cx="144" cy="240" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="158" y="236" width="74" height="8" fill="#00186B" />
            <rect x="230" y="232" width="70" height="16" rx="4" fill="#F8F4EB" />
            <rect x="238" y="232" width="6" height="16" fill="#FEC52C" />
            <circle cx="258" cy="240" r="6" fill="#C5E4F6" />
            <rect x="272" y="232" width="6" height="16" fill="#FEC52C" />
            <rect x="286" y="232" width="6" height="16" fill="#FEC52C" />
            <rect x="298" y="236" width="115" height="8" fill="#00186B" />
            <rect x="411" y="232" width="246" height="16" rx="4" fill="#F8F4EB" />
            <rect x="419" y="232" width="6" height="16" fill="#A6E5D7" />
            <circle cx="439" cy="240" r="6" fill="#C5E4F6" />
            <rect x="453" y="232" width="6" height="16" fill="#A6E5D7" />
            <circle cx="473" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="493" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="513" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="533" cy="240" r="6" fill="#C5E4F6" />
            <rect x="547" y="232" width="6" height="16" fill="#A6E5D7" />
            <circle cx="567" cy="240" r="6" fill="#C5E4F6" />
            <rect x="581" y="232" width="6" height="16" fill="#A6E5D7" />
            <rect x="595" y="232" width="6" height="16" fill="#A6E5D7" />
            <rect x="609" y="232" width="6" height="16" fill="#A6E5D7" />
            <circle cx="629" cy="240" r="6" fill="#C5E4F6" />
            <rect x="643" y="232" width="6" height="16" fill="#A6E5D7" />
            <rect x="655" y="236" width="39" height="8" fill="#00186B" />
            <rect x="692" y="232" width="84" height="16" rx="4" fill="#F8F4EB" />
            <rect x="700" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="720" cy="240" r="6" fill="#00186B" />
            <rect x="734" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="748" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="762" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="774" y="236" width="114" height="8" fill="#00186B" />
            <circle cx="29" cy="128" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="43" y="124" width="91" height="8" fill="#00186B" />
            <rect x="132" y="120" width="104" height="16" rx="4" fill="#F8F4EB" />
            <rect x="140" y="120" width="6" height="16" fill="#C5E4F6" />
            <circle cx="160" cy="128" r="6" fill="#FFF16F" />
            <rect x="174" y="120" width="6" height="16" fill="#C5E4F6" />
            <rect x="188" y="120" width="6" height="16" fill="#C5E4F6" />
            <circle cx="208" cy="128" r="6" fill="#FFF16F" />
            <rect x="222" y="120" width="6" height="16" fill="#C5E4F6" />
            <rect x="234" y="124" width="109" height="8" fill="#00186B" />
            <circle cx="357" cy="128" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="371" y="124" width="167" height="8" fill="#00186B" />
            <circle cx="552" cy="128" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="566" y="124" width="86" height="8" fill="#00186B" />
            <rect x="650" y="120" width="110" height="16" rx="4" fill="#F8F4EB" />
            <rect x="658" y="120" width="6" height="16" fill="#A6E5D7" />
            <circle cx="678" cy="128" r="6" fill="#C1AAE4" />
            <circle cx="698" cy="128" r="6" fill="#FEC52C" />
            <circle cx="718" cy="128" r="6" fill="#FEC52C" />
            <rect x="732" y="120" width="6" height="16" fill="#A6E5D7" />
            <rect x="746" y="120" width="6" height="16" fill="#A6E5D7" />
            <rect x="758" y="124" width="130" height="8" fill="#00186B" />
            <path d="M450 72C450 79.8793 448.448 87.6815 445.433 94.961C442.417 102.241 437.998 108.855 432.426 114.426C426.855 119.998 420.241 124.417 412.961 127.433C405.681 130.448 397.879 132 390 132V124.004C396.829 124.004 403.592 122.659 409.901 120.046C416.211 117.432 421.944 113.602 426.773 108.773C431.602 103.944 435.432 98.2107 438.046 91.9012C440.659 85.5918 442.004 78.8293 442.004 72H450Z" fill="#00186B" />
            <path d="M442 72C442 64.1207 443.552 56.3185 446.567 49.039C449.583 41.7595 454.002 35.1451 459.574 29.5736C465.145 24.0021 471.759 19.5825 479.039 16.5672C486.319 13.5519 494.121 12 502 12L502 19.9956C495.171 19.9956 488.408 21.3407 482.099 23.9542C475.789 26.5676 470.056 30.3982 465.227 35.2273C460.398 40.0564 456.568 45.7893 453.954 52.0988C451.341 58.4082 449.996 65.1707 449.996 72L442 72Z" fill="#00186B" />
        </svg>

    )
}
