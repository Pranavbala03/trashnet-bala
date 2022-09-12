import react from "react";
import { Link } from "react-router-dom";


// export default () => {
//     const [imageUpload, setImageupload] = useState(null)
//     const uploadimage = () => {
//         if (imageUpload === null) return;
//         const imageRef = ref(storage, `images/${imageUpload.name}`)
//         uploadBytes(imageRef, imageUpload)
//         .then(() => {
//             alert("Uploaded")
//         })
//         .catch(e => console.log)

//     }
//     return (
//         <>
//         <Mobilebottomnavbar/>
//             <Container>
//                 <br /> <Form>
//                     <Form.Control type='text' />
//                     <input
//                         type="file"
//                         onChange={(event) => { setImageupload(event.target.files[0]) }}
//                     />
//                     <br />
//                     <Button type='submit' onClick={uploadimage}>Submit</Button>
//                 </Form></Container>

//         </>
//     )
// }