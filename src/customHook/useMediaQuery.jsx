import { useState, useEffect } from 'react';

/**
 * The useMediaQuery function in JavaScript React allows for checking a specified media query and
 * updating the state based on the match result.
 * @returns The `useMediaQuery` custom hook is returning a boolean value `matches`, which indicates
 * whether the media query specified in the `query` parameter currently matches the document.
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
