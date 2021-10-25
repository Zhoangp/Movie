import React, { useEffect, useRef, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import "./backToTop.css"

const BackToTop = () => {
   
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)
    return (
        <div className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
            <BsArrowUp  />
            </div>
    );

};

export default BackToTop;