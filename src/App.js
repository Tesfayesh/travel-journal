import React from "react";
import Header from "./Header";
import Travel from "./Travel";
import data from './data'

function App() { 
  const travels = data.map((item,index) =>{
    return(
      <Travel 
          key={index}
          title={item.title}
          location={item.location}
          map={item.googleMapsUrl}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          image={item.imageUrl}          
      />
    )
  })
  return (
    <main>
      <Header />
      {travels}
    </main>
  );
}

export default App;
