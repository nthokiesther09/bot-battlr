import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ collection, clickHandler, handeleDelete }) {
  
 return (
    <div id="yourarmy" className="ui segment inverted blue bot-army">
      
      <div id="text"   className="ui five column grid">
       
        {"Click on a Bot on the bot collection to enlist it to your army."}
        <div className="row bot-army-row">
          {collection.map((bot) => (
            <BotCard key={bot.id} bot={bot} clickHandler={clickHandler} handleDelete={handeleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;