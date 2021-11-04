import { Flex } from '@chakra-ui/layout'
import { Box, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { Social } from './Social'

export const smoothScroll = function (targetEl, duration = 500) {
  let target = document.querySelector(targetEl);
  if (!target) { return }
  let targetPosition = target.getBoundingClientRect().top - document.documentElement.clientHeight/2 + 100;
  let startPosition = window.pageYOffset;
  let startTime = null;

  const ease = function(t,b,c,d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const animation = function(currentTime){
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0,run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

const scrollDown = (e) => {
    e.preventDefault();
    smoothScroll("#scrolldown1")
}

export function Hero() {
  return (
    <Flex
      width="100%"
      maxWidth="1440px"
      position="relative"
      justifyContent="space-between"
      align="center"
      mt={151}
    >
      <Box position="absolute" left="0" top="0">
        <Image
          src="/assets/hero/taylor-sign-hero.png"
          width={379}
          height={84}
          alt="scroll down"
        />
      </Box>

      <a href="#scrolldown1" onClick={scrollDown}>
        <Image
          src="/assets/hero/scroll-down.png"
          width={88}
          height={137}
          alt="scroll down"
        />
      </a>
      <Flex direction="column" align="center">
        <Image
          src="/assets/hero/logo-hero-3x.png"
          alt="logo hero"
          width={561}
          height={464}
        />
        <Social />
        <Image
          src="/assets/opensea-logo.svg"
          alt="open sea"
          width={182}
          height={42}
        />
      </Flex>
      <a href="#" onClick={scrollDown}>
        <Image
          src="/assets/hero/scroll-down.png"
          width={88}
          height={137}
          alt="scroll down"
        />
      </a>
    </Flex>
  )
}
