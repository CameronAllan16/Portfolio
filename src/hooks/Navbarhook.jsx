import {useState, useEffect} from 'react';

// const useIfMobile = (breakpoint = 768) => {
//     const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

//     useEffect(() => {
//       const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, [breakpoint]);
//     return isMobile;
//   };


//I like this one better so using this
  const useIfMobile = (query = '(max-width: 768px)') => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
  };



  export default useIfMobile;