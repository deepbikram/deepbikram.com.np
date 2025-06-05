"use client";

import React, { useState, useRef, useCallback, useEffect, forwardRef, ReactNode } from "react";
import classNames from "classnames";

const defaultCharset = ["X", "$", "@", "a", "H", "z", "o", "0", "y", "#", "?", "*", "0", "1", "+"];

function getRandomCharacter(charset: string[], seed: number): string {
  const randomIndex = Math.floor((seed * 9301 + 49297) % 233280 / 233280 * charset.length);
  return charset[randomIndex];
}

function createEventHandler(
  originalText: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  inProgress: boolean,
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>,
  speed: "fast" | "medium" | "slow",
  charset: string[],
  setHasAnimated?: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const speedSettings = {
    fast: {
      BASE_DELAY: 10,
      REVEAL_DELAY: 10,
      INITIAL_RANDOM_DURATION: 100,
    },
    medium: {
      BASE_DELAY: 30,
      REVEAL_DELAY: 30,
      INITIAL_RANDOM_DURATION: 300,
    },
    slow: {
      BASE_DELAY: 60,
      REVEAL_DELAY: 60,
      INITIAL_RANDOM_DURATION: 600,
    },
  };
  const { BASE_DELAY, REVEAL_DELAY, INITIAL_RANDOM_DURATION } = speedSettings[speed];

  let seedCounter = 0;
  const generateRandomText = () =>
    originalText
      .split("")
      .map((char) => (char === " " ? " " : getRandomCharacter(charset, seedCounter++)))
      .join("");

  return async () => {
    if (inProgress) return;

    setInProgress(true);    let randomizedText = generateRandomText();
    const startTime = performance.now();
    const endTime = startTime + INITIAL_RANDOM_DURATION;

    while (performance.now() < endTime) {
      setText(randomizedText);
      await new Promise((resolve) => setTimeout(resolve, BASE_DELAY));
      randomizedText = generateRandomText();
    }

    for (let i = 0; i < originalText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, REVEAL_DELAY));
      setText(`${originalText.substring(0, i + 1)}${randomizedText.substring(i + 1)}`);
    }

    setInProgress(false);
    if (setHasAnimated) {
      setHasAnimated(true);
    }
  };
}

type LetterFxProps = {
  children: ReactNode;
  trigger?: "hover" | "instant" | "custom";
  speed?: "fast" | "medium" | "slow";
  charset?: string[];
  onTrigger?: (triggerFn: () => void) => void;
  className?: string;
  style?: React.CSSProperties;
};

const LetterFx = forwardRef<HTMLSpanElement, LetterFxProps>(
  (
    {
      children,
      trigger = "hover",
      speed = "medium",
      charset = defaultCharset,
      onTrigger,
      className,
      style,
    },
    ref,
  ) => {
    const [text, setText] = useState<string>(typeof children === "string" ? children : "");
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
    const originalText = useRef<string>(typeof children === "string" ? children : "");

    const eventHandler = useCallback(() => {
      createEventHandler(
        originalText.current,
        setText,
        inProgress,
        setInProgress,
        speed,
        charset,
        trigger === "instant" ? setHasAnimated : undefined,
      )();
    }, [inProgress, speed, charset, trigger, setHasAnimated]);

    useEffect(() => {
      if (typeof children === "string") {
        setText(children);
        originalText.current = children;

        if (trigger === "instant" && !hasAnimated) {
          eventHandler();
        }
      }
    }, [children, trigger, eventHandler, hasAnimated]);

    useEffect(() => {
      if (trigger === "custom" && onTrigger) {
        onTrigger(eventHandler);
      }
    }, [trigger, onTrigger, eventHandler]);

    return (
      <span
        ref={ref}
        className={classNames(className)}
        style={style}
        onMouseOver={trigger === "hover" ? eventHandler : undefined}
      >
        {text}
      </span>
    );
  },
);

LetterFx.displayName = "LetterFx";

export { LetterFx };
