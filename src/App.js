import React, { useState, useEffect } from "react";
import  { DropdownList }  from "./components/DropdownList";
import { DomainDisplay } from "./components/DomainDisplay";

function App() {
  const [domains, setDomains] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
      async function fetchDomains(){
          const response = await fetch('/api/domains');
          const fetchedDomains = await response.json(response);
          setDomains(fetchedDomains);
      }
      fetchDomains();    
  }, []);
  
  const handleChange = e => {
      //e.preventDefault();
      setSelectedId(e);
      console.log(`this is ${e}`)
  }
  return (
      <>
           <DropdownList 
                  domains = {domains}
                  formLabel = 'Select a domain'
                  handleChange = {handleChange}
                  
              /> 
              <DomainDisplay {...domains[selectedId]} />
      </>
  );
}

export default App;
