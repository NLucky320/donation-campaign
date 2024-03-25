import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDonationData from "../Hooks/useDonationData";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  ButtonGroup,
} from "@material-tailwind/react";
import { saveToLocalStorage } from "../Utils/localstorage";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = useDonationData();
//   console.log(id, singleData);
    const handleDonate = () => {
        // console.log('clicked')
    saveToLocalStorage(singleData)
}
    
  useEffect(() => {
    const singleData = data.find((item) => item.id == id);
    setSingleData(singleData);
  }, [data, id]);
  const { title, image, categoryBg, description, price } =
    singleData || {};

  return (
    <div>
      <Card className="max-w-6xl mx-auto overflow-hidden mt-6">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img className="w-full" src={image} alt="ui/ux review check" />
          <div className="absolute bottom-0 bg-opacity-40 w-full h-28 pl-8 bg-black">
            <ButtonGroup className="mt-12">
              <Button onClick={handleDonate} style={{ backgroundColor: categoryBg }}>
                Donate {price}
              </Button>
            </ButtonGroup>
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationDetails;
