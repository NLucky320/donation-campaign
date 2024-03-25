import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
ButtonGroup
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const Cards = ({card}) => {
    console.log(card)
    return (
  
      <div className="mt-6">
        <Link to={`/donation-details/${card.id}`}>
          <Card style={{backgroundColor: card.cardBg}} >
            <div>
              <CardHeader color="blue-gray" className='mt-5 mb-2'>
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
    
      </div>
          
     
    </Card>
        </Link>
      </div>
     
    );
};

export default Cards;