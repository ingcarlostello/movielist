import React from "react";

const StarRater = ({ numberOfStarts }) => {
  const stars = ['★', '★★', '★★★', '★★★★', '★★★★★'];
  return (
    <>
      {
        stars.map((star, i) => (
          <div 
            style={{color: (i+1 <=2  && 'red') || (i+1 === 3 && 'orange') || (i+1 >3 && 'green') }} 
            data-testid="star-rater"
          >
            {(i+1) === numberOfStarts && numberOfStarts + star}
          </div>
        )) 
      }
    </>
  );
};

export default StarRater;
