import React, { useEffect } from "react";
import lottie from "lottie-web";

export const useLottie = (ref: React.MutableRefObject<HTMLElement | null>, path: string) => {
    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const animation = lottie.loadAnimation({
            container: ref.current,
            loop: true,
            autoplay: true,
            path,
        });

        return () => animation.destroy();
    }, []);
};
