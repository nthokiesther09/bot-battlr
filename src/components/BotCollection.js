import React from "react";
import BotCard from "./BotCard";

function BotCollection({ collection, clickHandler, handleDelete }) {

  return (
    <div id ="coll" className="ui four column grid">
      {"View Bot Collection."}
      <div className="row">
        {collection.map((bot) => (
          <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;