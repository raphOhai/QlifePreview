'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { IO } from '../../../Animations/observe'

export const ABArt1 = () => {
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
            width="1440" 
            height="268" 
            viewBox="0 0 1440 268" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="401" y="124" width="307" height="8" fill="#00186B" />
            <rect x="706" y="120" width="70" height="16" rx="4" fill="#F8F4EB" />
            <rect x="714" y="120" width="6" height="16" fill="#FEC52C" />
            <circle cx="734" cy="128" r="6" fill="#C5E4F6" />
            <rect x="748" y="120" width="6" height="16" fill="#FEC52C" />
            <rect x="762" y="120" width="6" height="16" fill="#FEC52C" />
            <rect x="774" y="124" width="148" height="8" fill="#00186B" />
            <circle cx="936" cy="128" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="950" y="124" width="148" height="8" fill="#00186B" />
            <path d="M1097.29 124.004C1105.23 123.911 1113.1 125.393 1120.46 128.364C1127.82 131.335 1134.52 135.737 1140.17 141.314C1145.81 146.892 1150.3 153.534 1153.36 160.856C1156.42 168.178 1158 176.034 1158 183.971C1158 191.907 1156.43 199.765 1153.38 207.09C1150.32 214.415 1145.85 221.062 1140.21 226.645C1134.57 232.227 1127.87 236.636 1120.52 239.614C1113.16 242.593 1105.29 244.082 1097.35 243.997L1097.44 236.001C1104.32 236.076 1111.14 234.785 1117.52 232.203C1123.89 229.621 1129.69 225.801 1134.58 220.962C1139.47 216.123 1143.35 210.362 1146 204.013C1148.65 197.664 1150.01 190.853 1150 183.975C1150 177.096 1148.63 170.286 1145.98 163.94C1143.33 157.593 1139.44 151.837 1134.55 147.003C1129.65 142.168 1123.85 138.353 1117.47 135.778C1111.09 133.203 1104.27 131.918 1097.39 131.999L1097.29 124.004Z" fill="#00186B" />
            <path d="M401.707 131.996C393.771 132.089 385.895 130.607 378.536 127.636C371.177 124.665 364.481 120.263 358.835 114.686C353.188 109.108 348.705 102.466 345.644 95.1444C342.582 87.8223 341.004 79.9656 341 72.0293C340.996 64.093 342.567 56.2347 345.621 48.9097C348.675 41.5846 353.152 34.9382 358.793 29.3554C364.434 23.7726 371.126 19.3643 378.482 16.3858C385.838 13.4073 393.712 11.9178 401.648 12.0035L401.562 19.9986C394.683 19.9243 387.859 21.2153 381.483 23.7969C375.107 26.3785 369.306 30.1993 364.417 35.0382C359.528 39.877 355.648 45.6377 353.001 51.9867C350.354 58.3356 348.992 65.1466 348.996 72.0254C348.999 78.9041 350.367 85.7138 353.02 92.0601C355.674 98.4065 359.56 104.163 364.453 108.997C369.347 113.832 375.151 117.647 381.53 120.222C387.908 122.797 394.734 124.082 401.612 124.001L401.707 131.996Z" fill="#00186B" />
            <rect x="400" y="8" width="158" height="16" rx="4" fill="#F8F4EB" />
            <rect x="408" y="8" width="6" height="16" fill="#FFF16F" />
            <circle cx="428" cy="16" r="6" fill="#A6E5D7" />
            <rect x="442" y="8" width="6" height="16" fill="#FFF16F" />
            <circle cx="462" cy="16" r="6" fill="#A6E5D7" />
            <circle cx="482" cy="16" r="6" fill="#A6E5D7" />
            <rect x="496" y="8" width="6" height="16" fill="#FFF16F" />
            <rect x="510" y="8" width="6" height="16" fill="#FFF16F" />
            <circle cx="530" cy="16" r="6" fill="#A6E5D7" />
            <rect x="544" y="8" width="6" height="16" fill="#FFF16F" />
            <rect x="556" y="12" width="119" height="8" fill="#00186B" />
            <circle cx="689" cy="16" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="703" y="12" width="100" height="8" fill="#00186B" />
            <rect x="801" y="8" width="96" height="16" rx="4" fill="#F8F4EB" />
            <rect x="809" y="8" width="6" height="16" fill="#A6E5D7" />
            <circle cx="829" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="849" cy="16" r="6" fill="#C1AAE4" />
            <circle cx="869" cy="16" r="6" fill="#C1AAE4" />
            <rect x="883" y="8" width="6" height="16" fill="#A6E5D7" />
            <rect x="895" y="12" width="33" height="8" fill="#00186B" />
            <rect x="926" y="8" width="70" height="16" rx="4" fill="#F8F4EB" />
            <rect x="934" y="8" width="6" height="16" fill="#FEC52C" />
            <circle cx="954" cy="16" r="6" fill="#C5E4F6" />
            <rect x="968" y="8" width="6" height="16" fill="#FEC52C" />
            <rect x="982" y="8" width="6" height="16" fill="#FEC52C" />
            <rect x="994" y="12" width="33" height="8" fill="#00186B" />
            <rect x="1025" y="8" width="70" height="16" rx="4" fill="#F8F4EB" />
            <rect x="1033" y="8" width="6" height="16" fill="#A6E5D7" />
            <circle cx="1053" cy="16" r="6" fill="#00186B" />
            <rect x="1067" y="8" width="6" height="16" fill="#A6E5D7" />
            <rect x="1081" y="8" width="6" height="16" fill="#A6E5D7" />
            <rect x="1093" y="12" width="347" height="8" fill="#00186B" />
            <circle cx="145" cy="240" r="13" stroke="#00186B" stroke-width="6" />
            <rect x="159" y="236" width="163" height="8" fill="#00186B" />
            <rect x="320" y="232" width="84" height="16" rx="4" fill="#F8F4EB" />
            <rect x="328" y="232" width="6" height="16" fill="#00186B" />
            <circle cx="348" cy="240" r="6" fill="#FEC52C" />
            <rect x="362" y="232" width="6" height="16" fill="#00186B" />
            <rect x="376" y="232" width="6" height="16" fill="#00186B" />
            <rect x="390" y="232" width="6" height="16" fill="#00186B" />
            <rect x="402" y="236" width="92" height="8" fill="#00186B" />
            <rect x="492" y="232" width="246" height="16" rx="4" fill="#F8F4EB" />
            <rect x="500" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="520" cy="240" r="6" fill="#C5E4F6" />
            <rect x="534" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="554" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="574" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="594" cy="240" r="6" fill="#C5E4F6" />
            <circle cx="614" cy="240" r="6" fill="#C5E4F6" />
            <rect x="628" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="648" cy="240" r="6" fill="#C5E4F6" />
            <rect x="662" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="676" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="690" y="232" width="6" height="16" fill="#C1AAE4" />
            <circle cx="710" cy="240" r="6" fill="#C5E4F6" />
            <rect x="724" y="232" width="6" height="16" fill="#C1AAE4" />
            <rect x="736" y="236" width="148" height="8" fill="#00186B" />
            <rect x="882" y="232" width="118" height="16" rx="4" fill="#F8F4EB" />
            <rect x="890" y="232" width="6" height="16" fill="#FFF16F" />
            <circle cx="910" cy="240" r="6" fill="#A6E5D7" />
            <rect x="924" y="232" width="6" height="16" fill="#FFF16F" />
            <rect x="938" y="232" width="6" height="16" fill="#FFF16F" />
            <rect x="952" y="232" width="6" height="16" fill="#FFF16F" />
            <circle cx="972" cy="240" r="6" fill="#A6E5D7" />
            <rect x="986" y="232" width="6" height="16" fill="#FFF16F" />
            <rect x="998" y="236" width="100" height="8" fill="#00186B" />
            <circle cx="1152" cy="184" r="13" fill="#FFFFFE" stroke="#00186B" stroke-width="6" />
            <rect x="1166" y="180" width="91" height="8" fill="#00186B" />
            <rect x="1255" y="176" width="96" height="16" rx="4" fill="#F8F4EB" />
            <rect x="1263" y="176" width="6" height="16" fill="#A6E5D7" />
            <circle cx="1283" cy="184" r="6" fill="#C1AAE4" />
            <circle cx="1303" cy="184" r="6" fill="#C1AAE4" />
            <circle cx="1323" cy="184" r="6" fill="#FEC52C" />
            <rect x="1337" y="176" width="6" height="16" fill="#A6E5D7" />
            <rect x="1349" y="180" width="91" height="8" fill="#00186B" />
        </svg>

    )
}
