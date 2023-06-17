import classNames from 'classnames';
import React from 'react';
// import Image from 'next/image'

export type BannerWrapperProps = {
  children: React.ReactNode;
  imageOpacity?: number;
  imageScale?: number;
  className?: string;
};

const BannerWrapper = ({
  children,
  imageOpacity,
  imageScale,
  className,
}: BannerWrapperProps) => {
  return (
    <div className="rounded-2xl p-4 w-full lg:p-6 lg:mb-12 mb-6 bg-gradient-to-tr overflow-hidden from-emerald-300 to-emerald-700 relative shadow-lg shadow-emerald-200 dark:shadow-emerald-800 transition-all">
      <div className={classNames('z-20 relative', className)}>{children}</div>
      {/* <div style={{opacity: imageOpacity, transform: `scale(${imageScale})`}} className='absolute top-2 right-0 w-44 h-32 z-10'>
            <Image
                src='/quran.png'
                layout='fill'
                objectFit='contain'
                alt='Quran illustration'
            />
        </div> */}
    </div>
  );
};

export default BannerWrapper;
