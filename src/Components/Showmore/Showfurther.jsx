import React, { useState } from "react";


const ShowMoreMessage = ({ message, initialLength = 20 }) => {
  // State to manage whether the full message is shown
  const [isExpanded, setIsExpanded] = useState(false);

  // Handler to toggle the message expansion
  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="showmoreexample">
      <p>
        {isExpanded ? message : `${message.substring(0, initialLength)}...`}
      </p>
      <button onClick={handleShowMore}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

// Example usage of ShowMoreMessage component
const Showfurther = () => {
  const longMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <div>

      <ShowMoreMessage message={longMessage} initialLength={0} />
    </div>
  );
};

export default Showfurther;
