import Splitting from "splitting";

export const split = () => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }

    const blurredText = document.querySelectorAll("[data-animation='blurIn']:not([data-split='true'])");
    const p = document.querySelectorAll("[data-animation='p']:not([data-split='true'])");
    const opacIn = document.querySelectorAll("[data-animation='opacIn']:not([data-split='true'])");
    const H = document.querySelectorAll("[data-animation='h']:not([data-split='true'])");
    const B = document.querySelectorAll("[data-animation='bounce']:not([data-split='true'])");

    const markAsSplit = (item: Element) => {
        item.setAttribute("data-split", "true");
    };

    blurredText.forEach((item) => {
        Splitting({
            target: item,
            by: "lines",
        });
        markAsSplit(item);
    });

    p.forEach((item) => {
        const line = Splitting({
            target: item,
            by: "lines",
        });
        line.forEach((splitResult: Record<string, any>) => {
            const wrappedLines = splitResult.words
                .map(
                    (wordsArr: Record<string, any>) => `
                       <span class="word_wrap">
                             ${wordsArr.outerHTML}
                        </span>`
                )
                .join("");
            splitResult.el.innerHTML = wrappedLines;
        });
        markAsSplit(item);
    });

    H.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        markAsSplit(item);
    });

    B.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        markAsSplit(item);
    });

    opacIn.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        markAsSplit(item);
    });

    B.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        markAsSplit(item);
    });
};
