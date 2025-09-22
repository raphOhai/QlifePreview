export const IO = (item: Element, options?: IntersectionObserverInit) => {
    return new Promise<void>((resolve) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    resolve();
                }
            });
        }, options);
        observer.observe(item);
    });
};