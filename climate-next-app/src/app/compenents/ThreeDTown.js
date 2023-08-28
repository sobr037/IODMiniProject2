'use client'
import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function ThreeDTown() {
  return (
    <Suspense fallback={<img src="/sustCity" alt="Loading..." />}>
      <Spline scene="https://prod.spline.design/pzJQj3havzptRkSK/scene.splinecode" />
    </Suspense>
  );
}
  