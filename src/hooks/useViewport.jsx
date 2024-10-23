import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const useViewport = () => {
  const ref = useRef(null);
  const [viewport, setViewport] = useState({ y: 0, height: 0 });
  const viewportHandler = useCallback(() => {
    const { top, height } = ref.current.getBoundingClientRect();
    const y = window.scrollY + top;
    if (y !== viewport.y) {
      setViewport({ y, height });
    }
  }, [viewport]);

  useLayoutEffect(() => {
    viewportHandler();
    window.addEventListener('resize', viewportHandler);
    return () => {
      window.removeEventListener('resize', viewportHandler);
    };
  }, [viewportHandler]);
  return {
    ref,
    viewport,
  };
};

export default useViewport;
