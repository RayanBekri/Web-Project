import React, { useState } from "react";

export default function ReadMore({ content, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent = content.length >= maxLength ? `${content.substring(0, maxLength)}...` : content;

  return (
    <div>
      <p style={{ textAlign: "justify" }}>
        {isExpanded ? content : truncatedContent}
        <span
          style={{ fontWeight: "bold", cursor: "pointer", color: "blue" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? " show less" : " show more"}
        </span>
      </p>
    </div>
  );
}
