import  { useEffect } from 'react';

const useTitle = title => {
    return (
        useEffect(() =>{
            document.title = `${title} - Smooth Styling`
        },[title])
    );
};

export default useTitle;