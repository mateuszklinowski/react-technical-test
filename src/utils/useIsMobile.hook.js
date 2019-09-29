import React, { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from './../constants/media';

export function useIsMobile(mobileBreakpoint = MOBILE_BREAKPOINT) {
    const [isMobile, setIsMobile] = useState(window.screen.availWidth < mobileBreakpoint);

    const getValue = ({ target: { innerWidth }}) => {
        setIsMobile(innerWidth < mobileBreakpoint);
    };

    useEffect(
        () => {
            window.addEventListener('resize', getValue);
            return () =>window.removeEventListener('resize', getValue);
        }, []
    );

    return isMobile
}