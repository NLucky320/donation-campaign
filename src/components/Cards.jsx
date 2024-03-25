import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
ButtonGroup
} from "@material-tailwind/react";
const Cards = ({card}) => {
    console.log(card)
    return (
  
          <Card style={{backgroundColor: card.cardBg}} className="mt-6">
      <CardHeader color="blue-gray" className=" mb-4">
        <img
          src={card.image}
          alt="card-image"
        />
        </CardHeader>
 <ButtonGroup  size="sm"  className=' ml-5'>
        
       <Button style={{backgroundColor: card.
categoryBg, color: card.textColor

}}   >{ card.category}</Button>
      </ButtonGroup>

      <CardBody>
        <Typography style={{ color: card.textColor

}}  variant="h6" color="blue-gray" className="mb-2">
        {card.title}
        </Typography>
      </CardBody>
    
          
     
    </Card>
     
    );
};

export default Cards;