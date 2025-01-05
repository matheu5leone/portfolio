export const handleMouseMove = (yOffsetMultiplier: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xOffset = (x / rect.width - 0.5) * yOffsetMultiplier;
    const yOffset = (y / rect.height - 0.5) * yOffsetMultiplier;

    target.style.transform = `perspective(1000px) rotateX(${yOffset}deg) rotateY(${xOffset}deg)`;
};

export const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
};
