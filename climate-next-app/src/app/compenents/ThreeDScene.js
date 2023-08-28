'use client'
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function ThreeDScene() {
  return (
    <Suspense fallback={<img src="/earth" alt="Loading..." />}>
      <Spline scene="https://prod.spline.design/rVXwAlmlFNMcBGju/scene.splinecode" />
    </Suspense>
  );
}
  
  
  