"use client";

import { useState, useEffect } from "react";

export function useTypewriter({
    words,
    loop = true,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
}: {
    words: string[];
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setText((prev) => currentWord.substring(0, prev.length - 1));
            } else {
                setText((prev) => currentWord.substring(0, prev.length + 1));
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), delayBetweenWords);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return text;
}
