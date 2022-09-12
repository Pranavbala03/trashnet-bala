

import { Link } from "react-router-dom";
import { Routes } from "../../../routes";

import { Typography } from "@material-tailwind/react";
import {
    Recycle,
    CarSimple,
    MapPinLine,
    Clock,
  } from "phosphor-react";

import {
    Button,
    Card
} from "react-bootstrap";
import { useState, useEffect } from "react";

import "react-step-progress-bar/styles.css";
import { ProgressBar , Step} from "react-step-progress-bar";

const DashboardCard = (props) => {
    

    var steps = 0
    const [progress, setProgress] = useState(0)

    //figure out how many steps of transaction have taken place
    

    const transactionDetails = []
    useEffect(() => {
    
    

        var t = props.rem
        console.log(t[1])
        steps = t[1].length
        if(steps === 1){
            setProgress(17)
        }
        if(steps === 2){
            setProgress(51)
        }
        if(steps === 3){
            setProgress(83)
        }
        if(steps === 4){
            setProgress(100)
        }

        console.log(steps, progress)
      }, [] )


    useEffect(() => {

        
    
    }, [steps] )

    return (
        <>
            {console.log(props.rem[1].typeOfPlastic)}
            <Card>
              <Card.Body>
                <div className="d-grid gap-2">
                  <Recycle /> 
                  <Typography variant="h5"> Cycle ID: <div><b> {props.rem[0]}</b></div></Typography>
                  <Typography variant="h5"> Plastic Type: <div><b>{props.rem[1][0].typeOfPlastic}</b></div></Typography>
                  <Typography variant="h5"> Weight: <div><b>{props.rem[1][0].weight}</b></div></Typography>
                  
                  <Typography variant="h5">
                    {" "}
                    Arriving at <MapPinLine />{" "}
                    <div><Typography variant="h6"> Station</Typography></div>
                  </Typography>
                  <Typography variant="h5">
                    {" "}
                    Vehicle no. <CarSimple /><div><b>{props.rem[1][0].vehicle_no}</b></div>
                    <div><Typography variant="h6"> </Typography></div>
                  </Typography>

                  {/* <Typography variant="h5">
                    {" "}
                    at <Clock /> <div><Typography variant="h6"> 12:00</Typography></div>
                  </Typography> */}
                    <ProgressBar
                        percent={progress}
                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                        
                    >
                         <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                style={{ marginLeft:10 , filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                width="30"
                                src="https://i.imgur.com/FshRj2U.png"
                                />
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                width="30"
                                src="https://i.imgur.com/FshRj2U.png"
                                />
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                width="30"
                                src="https://i.imgur.com/FshRj2U.png"
                                />
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <img
                                crossOrigin 
                                style={{ marginRight:30 , filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                width="30"
                                src="https://i.imgur.com/FshRj2U.png"
                                />
                            )}
                        </Step>
                    </ProgressBar>
                  <br></br>
                  <Button
                    as={Link}
                    to={Routes.RecyclerConfirmation.path}
                    variant="outline-primary"
                  >
                    {" "}
                    Update Status
                  </Button>
                </div>
              </Card.Body>
            </Card>

        </>
    )
}

export default DashboardCard;