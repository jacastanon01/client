import  Dropdown from "react-bootstrap/Dropdown";
  
  export const DropdownList = ( { domains, handleChange, formLabel }) => {
    let optionItems = domains.map(i => 
       <Dropdown.Item eventKey={i.id} key={i.id}>{i.domainName}</Dropdown.Item>
    )
    return (
        <Dropdown onSelect={(e) => handleChange(e)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {formLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {optionItems}
            </Dropdown.Menu>
        </Dropdown>
    );   
  }
