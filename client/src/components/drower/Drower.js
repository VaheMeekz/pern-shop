import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

const Drower = () => {

    const types = useSelector(state => state?.typeReducer.types)
    const [checkedType,setCheckedType] = useState(1)

    const check = (id) => {
      setCheckedType(id)
    }

    return (
        <div>
            <ListGroup>
                {
                    types.map(({id,name})=>{
                        return  <ListGroup.Item key={id} onClick={()=>check(id)}
                        style={{ color: checkedType === id ? "blue" : null,cursor:"pointer"}}>
                            {name}
                        </ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
    );
};

export default Drower;