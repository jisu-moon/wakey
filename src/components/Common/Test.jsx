import { useScroll, motion, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

function Item() {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollY, 'change', latest => {
    console.log(scrollYProgress.current);
  });
  return (
    <div ref={ref} style={{ height: '99vh' }}>
      <figure className='progress'>
        <svg id='progress' width='75' height='75' viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='30' pathLength='1' className='bg' />
          <motion.circle
            cx='50'
            cy='50'
            r='30'
            pathLength='1'
            className='indicator'
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </figure>
    </div>
  );
}

export default Item;
