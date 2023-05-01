import {musicList,deleteMusic} from '../redux/action'
import { useDispatch,useSelector } from "react-redux"
import discImage from '../image/musicDisk.png'
import { useEffect } from "react"
import { Link } from 'react-router-dom'


function MyMusics(){

    const dispatch=useDispatch()

    let data=useSelector((state)=>state.musicData)

    useEffect(()=>{
        dispatch(musicList())
    },[])


    const deleteMusicItem=(id)=>{
        dispatch(deleteMusic(id))
    }


    return (
        <div className="main">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Catagory</th>
                            <th>Duration</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          data.length>0 ? data.map((item,index)=>
                                 <tr key={item.id}>
                                     <td className="withTwo">
                                         <div className="number">{index+1}</div>
                                         <div className="image">
                                             <img src={discImage} alt="" />
                                         </div>
                                     </td>
                                     <td>
                                         {item.name}
                                     </td>
                                     <td>
                                         {item.artist}
                                     </td>
                                     <td>
                                         {item.catagory}
                                     </td>
                                     <td className="durationInTable">
                                         [{item.duration}]
                                     </td>
                                     <td className="editMusicLink">
                                        <Link to={'/edit/'+item.id}>Edit</Link>
                                     </td>
                                     <td className="deleteMusicButton">
                                         <button onClick={()=>deleteMusicItem(item.id)}>&times;</button>
                                     </td>
                                 </tr>
                                ) : ''
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyMusics