export const handleNextIndex = (currentIndex: number, length: number): number => {
    return (currentIndex + 1) % length;
};

export const handlePrevIndex = (currentIndex: number, length: number): number => {
    return (currentIndex - 1 + length) % length;
};