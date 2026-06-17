"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Track cursor position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for follow effect
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Disable cursor follower on touch-based devices (mobiles/tablets)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    // 2. Mouse move handler
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // 3. Mouse enter/leave boundary handlers
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // 4. Track hover on interactive elements to scale up and change style
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Select anchors, buttons, interactive roles, or explicit custom cursor elements
      const interactiveEl = target.closest("a, button, [role='button'], [data-cursor-hover]");

      if (interactiveEl) {
        setIsHovered(true);
        // Custom text support (e.g. data-cursor-text="View")
        const text = interactiveEl.getAttribute("data-cursor-text");
        if (text) {
          setCursorText(text);
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. The Smooth Follower (Outer Ring/Bubble) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
        style={{
          x: followerX,
          y: followerY,
          width: isHovered ? (cursorText ? 80 : 54) : 32,
          height: isHovered ? (cursorText ? 80 : 54) : 32,
          backgroundColor: isHovered ? "rgba(197, 160, 89, 0.15)" : "rgba(197, 160, 89, 0)",
          borderColor: isHovered ? "rgba(197, 160, 89, 0.9)" : "rgba(197, 160, 89, 0.45)",
          boxShadow: isHovered ? "0 0 20px rgba(197, 160, 89, 0.2)" : "none",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.25 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-black text-accent tracking-widest uppercase select-none pointer-events-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* 2. The Direct Pointer (Inner Dot - optional, follows cursor instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
