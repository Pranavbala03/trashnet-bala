import React, { useState, useEffect } from "react";

import {
  Navbar,
  Container,
  Button,
  Image,
  Row,
  Col,
  Stack,
  Figure,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Routes } from "../../../routes";
import { Link } from "react-router-dom";
import { Typography, Color } from "@material-tailwind/react";
import {
  Scales,
  CaretDown,
  Camera,
  List,
  Recycle,
  CarSimple,
  House,
  User,
  Plus,
  MapPinLine,
  Clock,
} from "phosphor-react";
import Mobiletopnavbar from "../../datacomponents/navtop-mobile";
import Mobilebottomnavbar from "../../datacomponents/navbar-bottom-mobile";
import Greetings from "../../datacomponents/greeting-mobile";
import { db, storage } from "../../../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, getDocs, where, doc, setDoc } from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import { v4 } from "uuid";
import {ref, uploadBytes} from 'firebase/storage'
const initialFormData = Object.freeze({
  weight: "",
  typeOfPlastic: "",
  vehicle_no: ""
});

// var list = []
var PWP_List = [];
var loc = null


export default () => {
  const [weightofrematerialcollec, SetWeightofrematerialcollec] = useState("");
  const [mfrecyclingfacility, setMfrerecyclingfacility] = useState("");
  const [collecimage, setCollecimage] = useState("");
  const [formData, updateFormData] = useState(initialFormData);
  const [mfcollecvehicle, setMfcollecvehicle] = useState("");
  var showdate = new Date();
  var displaytodaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
  var displaytimenow = showdate.getHours() + ' : ' + showdate.getMinutes();

  const history = useHistory();

  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);


  //auth and redirection
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user)
      // console.log(uid)
      // document.getElementById('collector_id').value = uid;
      // ...
    } else {
      // User is signed out
      // ...
      console.log(auth)
      console.log("you shouldn't be here")
      history.push("/mobile/dashboard/mobiledashboard")
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const a = document.getElementById('recycler_name');
    const t = { recycler: a.value }

    if (formData.weight === 0 || formData.weight === null) {
      alert("Form not correctly filled");
      return
    }
    if (collecimage == null ) return ;
    var imgName = `${collecimage.name + " id: " + v4()}`
    const imageRef = ref(storage, `images/manuconf/${imgName}`)
    uploadBytes(imageRef, collecimage).then(() => {
      console.log("image uploaded"  )
      console.log(imgName )
    })
    // console.log(t)
    await addDoc(collection(db, "cycles"), t).then(async (tid) => {


      console.log(tid.id)
      console.log("handlesubmit called")

      const cycle_id = String(tid.id)
      const weight = String(formData.weight)
      const typeOfPlastic = String(formData.typeOfPlastic)
      const recycler_id = String(a.value)
      const vehicle_no = String(formData.vehicle_no)
      const geolocationPosition = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        timestamp: loc.timestamp
      }
      console.log(geolocationPosition)

      const payload = {

        cycle_id: cycle_id,
        //DO NOT modify creator role within the scope of this component
        transaction_creator_role: "c",
        collector_id: user.uid,
        weight: weight,
        typeOfPlastic: typeOfPlastic,
        recycler_id: recycler_id,
        vehicle_no: vehicle_no,
        geolocationPosition: geolocationPosition
      }

      console.log(payload)

      const docRef = await addDoc(collection(db, "transactions"), payload)

      formData.weight = 0
      document.getElementById("weight").value = 0;
      history.push("/mobile/dashboard/mobiledashboard")

    })
  }

  const position = () => {

    navigator.geolocation.getCurrentPosition(
      (position) => { loc = position; console.log(loc); },
      err => console.log(err)
    )
    // console.log(loc)
    // console.log(formData)
    // console.log(list)
  }


  const getPWPs = async () => {
    const q = query(collection(db, "users"), where("role", "==", "r"));
    // console.log(PWP_List)
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      PWP_List.push(doc.data())


      console.log(PWP_List)

    });
    setList(PWP_List.map(pwp => <option value={pwp.uid} key={pwp.uid}>{pwp.username}</option>))
    // console.log(list.length)

  }


  const handleChange = (e) => {
    console.log("handleChange called")
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });

  };

  useEffect(() => {
    PWP_List = [];
    getPWPs();
    position();
  }, [])

  // const manusubmit = async (e) => {
  //   e.preventDefault();
  //   if (weightofrematerialcollec === "") {
  //     alert("Form not filled completely.")
  //   } else {
  //     console.log("working")
  //     const mfsubmitRef = collection(db, 'Manuconfirm')
  //     // const imageRef = ref(storage, `collector/${collecimage.name}`)
  //     // await uploadBytes(imageRef, collecimage)
  //     await addDoc(mfsubmitRef, { 
  //       "1. Form": "Manufacturer Confirmation", 
  //       "2. date": displaytodaydate, 
  //       "3. time": displaytimenow, 
  //       "4. weight of material received": weightofrematerialcollec + " kgs", 
  //       "5. Recycler": mfrecyclingfacility, 
  //       "6. Vehicle no.": mfcollecvehicle  
  //     })

  //   }
  // }
  return (
    <>
      {" "}
      <Mobilebottomnavbar />
      <Mobiletopnavbar />
      <Greetings />
      <Container>
        <Stack direction="vertical">
          <Typography variant="h2"> Manufacturer Confirmation</Typography>
          <Card >
            <Card.Header>
              <Stack gap={3} direction="horizontal">
                <div>

                  <Recycle size={24} />
                </div>
                <div>
                  <Typography variant="paragraph" id=" Manufactuer-Input">{user.uid}</Typography>
                </div>
              </Stack>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" >
                  <Form.Label>Weight of Material Received</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <Scales size={20} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      name="weight"
                      id="weight"
                      onChange={handleChange}
                      placeholder="100"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Recycling Facility</Form.Label>
                  <Form.Select
                    aria-label="Role Selection"
                    name="role"
                    id="recycler_name"
                    onChange={handleChange}>

                    {list}
                    {/* <option>Click to Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Pictures of Received Material</Form.Label>
                  <Stack direction="Vertical" gap={3}>
                  <Button> <label for="collec">
                      <Camera /> </label> </Button>
                   <input   
                    id="collec"  
                    type="file" 
                    accept="image/*"        
                    capture="environment"
                    style={{ display: "none" }}
                    onChange={(event) => {setCollecimage(event.target.files[0])}}/>
                  </Stack>
                  <Form.Text className="text-muted">
                    Pictures of Plastic Received
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="weight-collected">
                  <Form.Label>Vehicle No.</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <CarSimple size={20} />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="KAXX 00 XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="weight-collected">
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      // as={Link}
                      // to={Routes.mobiledashboard.path}
                      onClick={handleSubmit}
                    >
                      {" "}
                      Submit
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
