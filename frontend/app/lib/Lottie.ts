import React, { useEffect, useState } from "react";
import lottie from "lottie-web";

interface LottieData {
    loading: boolean;
}

export const useLottie = (
    ref: React.MutableRefObject<HTMLElement | null>,
    path: string
): LottieData => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const animation = lottie.loadAnimation({
            container: ref.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path,
        });

        const onLoaded = () => {
            setLoading(false);
        };

        animation.addEventListener("DOMLoaded", onLoaded);
        return () => {
            animation.removeEventListener("DOMLoaded", onLoaded);
            animation.destroy();
        };
    }, []);

    return {
        loading,
    };
};
