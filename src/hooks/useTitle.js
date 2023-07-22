import  { useEffect } from 'react';

const useTitle = (title) => {
     useEffect(() => {
        document.title = `Figlandia || ${title}`;
    }, [title])
};

export default useTitle;