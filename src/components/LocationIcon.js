const LocationIcon = () => {
  return (
    // hidden until small
    <svg
      xmlns='http://www.w3.org/2000/svg'
      // mobile first
      // https://tailwindcss.com/docs/responsive-design
      // https://tailwindcss.com/docs/responsive-design
      className='sm:w-9 sm:h-9 md:w-14 md:h-14 lg:w-18 lg:h-18'
      fill='none'
      viewBox='0 0 24 24'
      stroke='#1A86E9'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
      />
    </svg>
  );
};

export default LocationIcon;
