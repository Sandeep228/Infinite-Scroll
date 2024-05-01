import React from "react";

const MovieCard = ({ myData }) => {
  const { quote, author, id } = myData;
  return (
        <div>
                        <blockquote >
                     <span>{id}</span>
                    {quote}
                    <footer>{author}</footer>
                </blockquote>
                   </div>
  );
};

export default MovieCard;
