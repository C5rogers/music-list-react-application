import  {musicList,editMusic} from "../redux/action"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import discImage from '../image/musicDisk.png'
import liked from '../image/liked1.png'
import unliked from '../image/unliked4.png'


function Home(){

    const dispatch=useDispatch()

    let data=useSelector((state)=>state.musicData)

    useEffect(()=>{
        dispatch(musicList())
    },[])


    const TogleLike=(item)=>{
        item.liked=!item.liked
        dispatch(editMusic(item))
    }

    return (
        <div className="main">
        <div className="items"> 
            {
               data.length>0 ? data.map((item)=>
                    <div className="item" key={item.id}>
                        <div className="image">
                            <img src={discImage} alt="" className="img" />
                            <div className="likeDislike">
                                {item.liked ? <button onClick={()=>TogleLike(item)} ><img src={liked} alt="" /></button> : <button onClick={()=>TogleLike(item)} ><img src={unliked} alt="" className="disliked" /></button>}
                            </div>
                        </div>
                        <div className="name">
                            <h4>{item.name}</h4>
                        </div>
                        <div className="artist">
                            <h5>{item.artist}</h5>
                        </div>
                        <div className="duration">
                            [{item.duration}]
                        </div>
                        <div className="catagory">
                            {item.catagory}
                        </div>
                    </div>

                )
               : ''
            }
        </div>
        </div>
    )
}

export default Home