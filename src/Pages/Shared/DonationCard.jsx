import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const DonationCard = ({data}) => {
    return (
        <Card style={{backgroundColor: data.
categoryBg
}} className="w-full max-w-[48rem] flex-row">
            
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={data.image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
            <CardBody>
                 
        
       <Button style={{backgroundColor: data.
categoryBg, color: data.textColor

}}   >{ data.category}</Button>
     
      
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {data.title}
                </Typography>
                  <Typography style={{ color: data.textColor

}}   variant="h6" color="gray" className="mb-4 uppercase">
        ${data.price}.00
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          <Button style={{backgroundColor: data.
categoryBg, color: data.textColor

}}   >View Details</Button>
        </Typography>
     
          
    
      </CardBody>
    </Card>
    );
};

export default DonationCard;