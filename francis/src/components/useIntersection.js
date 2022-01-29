import { useState, useEffect } from "react";

function useIntersection(element, rootMargin) {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        let currentElement = element.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                    observer.unobserve(currentElement);
                }
            },
            {
                rootMargin
            }
        );

        element.current && observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    });

    return isVisible;
};

export default useIntersection;