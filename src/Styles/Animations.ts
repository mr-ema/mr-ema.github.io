import React from 'react';
import { bounceIn, bounceInLeft, bounceInRight, hinge, lightSpeedOut, rollIn, rubberBand, slideOutRight, tada, wobble } from 'react-animations';
import { keyframes } from 'styled-components';

/**
 * Reset Animations within element 
 * @param delay: string = 'animation-delay In ms Default To 0ms' 
 */
export function resetAnimation(element: React.SyntheticEvent<HTMLElement>, delay = '0ms'): void {

  element.currentTarget.style.animationDelay = `${delay}`;
  element.currentTarget.getAnimations()
    .forEach((anim: Animation) => {
      anim.cancel();
      anim.play();
  })
}

// Reset All Animations In Dom
export function resetAllAnimations(): void {
  document.getAnimations()
    .forEach((anim: Animation) => {
      anim.cancel();
      anim.play();
    })
}

export function playAnimation(element: any): void {
  element.currentTarget.style.animationPlayState = 'running';
}

export const bounceInAnimation = keyframes`${bounceIn}`;
export const bounceInLeftAnimation = keyframes`${bounceInLeft} 100%{opacity: 1}`;
export const bounceInRightAnimation = keyframes`${bounceInRight} 100%{opacity: 1}`;
export const hingeAnimation = keyframes`${hinge}`;
export const rollInAnimation = keyframes`${rollIn}`;
export const wobleAnimation = keyframes`${wobble}`;
export const rubberAnimation = keyframes`${rubberBand}`;
export const tadaAnimation = keyframes`${tada}`;
export const slideOutRightAnimation = keyframes`${slideOutRight}`;
export const speedLightOutRight = keyframes`${lightSpeedOut}`;

export const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`