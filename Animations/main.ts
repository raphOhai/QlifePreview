import { gsap } from "gsap";
import { IO } from "./observe";


// Don't forget to add the attributes and remove later

export const reset = () => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }
    
    const elementsToReset = document.querySelectorAll(
        ".m__mask, [data-animation], [data-fade-group], [data-group-fade-item], span.word_wrap, span.word, img"
    );
    elementsToReset.forEach((element) => {
        gsap.set(element, { clearProps: "transform,opacity,yPercent,xPercent,scale,autoAlpha" });
    });
};

export const animate = () => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }
    const maskTop: NodeListOf<HTMLElement> = document.querySelectorAll("[data-mask='top'], .m__mask_col, .m__mask_rh");
    const maskLeft: NodeListOf<HTMLElement> = document.querySelectorAll("[data-mask='left']");
    const maskRight: NodeListOf<HTMLElement> = document.querySelectorAll("[data-mask='right']");
    const fadeIn: NodeListOf<HTMLElement> = document.querySelectorAll("[data-animation='fade']");
    const fadeLeft: NodeListOf<HTMLElement> = document.querySelectorAll("[data-animation='fade-left']");
    const fadeRight: NodeListOf<HTMLElement> = document.querySelectorAll("[data-animation='fade-right']");
    const fadeG: NodeListOf<HTMLElement> = document.querySelectorAll("[data-fade-group]");
    const fadeB: NodeListOf<HTMLElement> = document.querySelectorAll("[data-animation='fade-bottom']");

    maskTop.forEach((item: Element) => {
        const image = item.querySelector("img") as HTMLImageElement;
        gsap.set(image, { yPercent: 100 });
        IO(item, { threshold: 0.5 }).then(() => {
            gsap.to(image, {
                yPercent: 0,
                transformStyle: "preserve-3d",
                ease: "power1.inOut",
                duration: 1,
                delay: 0.1,
            });
        });
    });
    maskLeft.forEach((item: Element) => {
        const image = item.querySelector("img") as HTMLImageElement;
        gsap.set(image, { xPercent: -150 });
        IO(item, { threshold: 0.6 }).then(() => {
            gsap.to(image, {
                xPercent: 0,
                transformStyle: "preserve-3d",
                ease: "power1.inOut",
                duration: 1.3,
                delay: 0.1,
            });
        });
    });
    maskRight.forEach((item: Element) => {
        const image = item.querySelector("img") as HTMLImageElement;
        gsap.set(image, { xPercent: 150 });

        IO(item, { threshold: 0.6 }).then(() => {
            gsap.to(image, {
                xPercent: 0,
                transformStyle: "preserve-3d",
                ease: "power1.inOut",
                duration: 1.5,
                delay: 0.1,
            });
        });
    });

    fadeIn.forEach((item: Element) => {
        gsap.set(item, { autoAlpha: 0, yPercent: 50 });
        IO(item, { threshold: 0.35 }).then(() => {
            gsap.to(item, {
                yPercent: 0,
                autoAlpha: 1,
                transformStyle: "preserve-3d",
                duration: 0.8,
                ease: "circ.out",
                delay: 0.1,
            });
        });
    });

    fadeLeft.forEach((item: Element) => {
        gsap.set(item, { autoAlpha: 0, xPercent: -60 });
        IO(item, { threshold: 0.4 })
            .then(() => {
                gsap.to(item, {
                    xPercent: 0,
                    autoAlpha: 1,
                    transformStyle: "preserve-3d",
                    duration: 0.8,
                    ease: "circ.out",
                    delay: 0.1,
                });
            })
    });

    fadeRight.forEach((item: Element) => {
        gsap.set(item, { autoAlpha: 0, xPercent: 60 });
        IO(item, { threshold: 0.4 }).then(() => {
            gsap.to(item, {
                xPercent: 0,
                autoAlpha: 1,
                transformStyle: "preserve-3d",
                duration: 0.8,
                ease: "circ.out",
                delay: 0.1,
            });
        });
    });

    fadeG.forEach((elem: Element) => {
        let images = elem.querySelectorAll("[data-fade-group-item]") as NodeListOf<HTMLElement>;
        images.forEach((item) => {
            gsap.set(item, { autoAlpha: 0, yPercent: 30 });
            IO(item, { threshold: 0.3 }).then(() => {
                gsap.to(images, {
                    yPercent: 0,
                    autoAlpha: 1,
                    transformStyle: "preserve-3d",
                    duration: 0.5,
                    stagger: images.length > 4 ? 0.25 : 0.3,
                    ease: "power1.out",
                    delay: 0.1,
                });
            });
        });
    });

    fadeB.forEach((item: Element) => {
        gsap.set(item, { autoAlpha: 0, yPercent: -50 });
        IO(item, { threshold: 0.5 }).then(() => {
            gsap.to(item, {
                yPercent: 0,
                autoAlpha: 1,
                transformStyle: "preserve-3d",
                duration: 0.8,
                ease: "circ.out",
                delay: 0.1,
            });
        });
    });
};

export const textAnimate = () => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }
    
    const blurredText = document.querySelectorAll("[data-animation='blurIn']");
    const p = document.querySelectorAll("[data-animation='p']");
    const opacIn = document.querySelectorAll("[data-animation='opacIn']");
    const H = document.querySelectorAll("[data-animation='h']");
    const B = document.querySelectorAll("[data-animation='bounce']");

    blurredText.forEach((item) => {
        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 50,
            opacity: 0,
            filter: "blur(2px) contrast(0%)",
            rotateX: 50,
            transformStyle: "preserve-3d",
        });
        IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                filter: "blur(0px) contrast(100%)",
                rotateX: 0,
                stagger: elem.length > 30 ? 0.02 : 0.03,
                duration: elem.length > 30 ? 0.6 : 0.8,
                ease: "power1.inOut",
                delay: 0.1,
            });
        });
    });

    p.forEach((item) => {
        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 80,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });
        IO(item, { threshold: 0.7 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.022 : 0.032,
                duration: elem.length > 100 ? 0.3 : 0.5,
                ease: "easeOut",
                delay: 0.1,
            });
        });
    });

    H.forEach((item) => {
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });
        IO(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                delay: 0.3, // 0.2 + 0.1
                stagger: elem.length > 100 ? 0.015 : 0.025,
                duration: elem.length > 150 ? 0.25 : 0.35,
                ease: "easeOut",
            });
        });
    });

    B.forEach((item) => {
        gsap.set(item.querySelectorAll(".char"), { yPercent: 50, opacity: 0 });
        IO(item, { threshold: 0.3 }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                duration: 3,
                stagger: 0.02,
                ease: "elastic.out(1, 0.3)",
                delay: 0.1,
            });
        });
    });

    opacIn.forEach((item) => {
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0.05,
            transformStyle: "preserve-3d",
        });
        IO(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                stagger: elem.length > 100 ? 0.025 : 0.035,
                duration: elem.length > 100 ? 0.5 : 0.6,
                ease: "power1.inOut",
                delay: 0.1,
            });
        });
    });
};
