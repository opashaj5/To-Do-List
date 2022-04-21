// import { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Show() {
//     const { id } = useParams()
//     const [showData, setShowData] = useState({})
//     const navigate = useNavigate()

//     useEffect(() => {
//         (async () => {
//             try {
//                 const { data } = await axios.get(`http://localhost:3000/tasks/${id}`);
//                 setShowData(data)
//             } catch (err) {
//                 console.log(err)
//             }
//         })()
//     }, [])

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:3000/tasks/${id}`)
//         } catch (err) {
//             console.log()
//         } finally {
//             navigate(-1)
//         }
//     }

//     return (
//         <div className="showPage">
//             <Link to="/"><button className='button'>Home</button></Link>
//             <div className="taskContainer">
//                 <h1>Entry: {showData.entry}</h1>
//                 <p>Status: {showData.status}</p>
//                 <button onClick={handleDelete}>Delete</button>
//             </div>
//         </div>
//     )
// };