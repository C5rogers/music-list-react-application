// have a bug here


import { useDispatch,useSelector } from "react-redux"
import {getMusic,editWholeMusic} from '../redux/action'
import discImage from '../image/musicDisk.png'
import { useEffect ,useState} from "react"
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';


function Edit({music}){

	const navigate=useNavigate()

	 const params= useParams()

	 const dispatch=useDispatch()

	 let [data]=useState([])


	 const [name,setName] =useState('')
	 const [nameError,setNameError] =useState('')
	 const [artist,setArtist]=useState('')
	 const [artistError,setArtistError]=useState('')
	 const [catagory,setCatagory]=useState('')
	 const [catagoryError,setCatagoryError]=useState('')
	 const [duration,setDuration]=useState('')
	 const [durationError,setDurationError]=useState('')
	 const [liked,setLiked]=useState('')
	 // const [id,setId]=useState('')


	 useEffect(()=>{
	 	dispatch(getMusic(params.id))
	 },[])	 

	 data=useSelector((state)=>state.musicData)


	 const editData=(data)=>{
	 	dispatch(editWholeMusic(data))
	 }


	 const onSubmit=(e)=>{
	 	e.preventDefault()
	 	if(!name){
	 		setNameError("please Edit the name!")
	 	}else if(!artist){
	 		setArtistError("please Edit the artist name!")
	 	}else if(!catagory){
	 		setCatagoryError("please Edit the music catagory!")
	 	}else if(!duration){
	 		setDurationError("please Edit the music duration")
	 	}else{

	 		setLiked(data.liked)

	 		setNameError('')
	 		setArtistError('')
	 		setCatagoryError('')
	 		setDurationError('')
	 		setName('')
	 		setArtist('')
	 		setCatagory('')
	 		setDuration('')

	 		const id=data.id

	 		editData({
	 			name,artist,catagory,duration,liked,id
	 		})

            navigate('/', { replace: true })

	 	}
	 }

	return(
		<div className="main">
			<div className="form-container">
				<div className="logo">
                	<img src={discImage} alt="" />
            	</div>
            	<form onSubmit={onSubmit}>
            		<div className="form-cont">
            			<input type="text" name="name" placeholder="Music Name" defaultValue={data.name} onChange={(e)=>setName(e.target.value)} />
            			{ nameError && <p className="errorMessage">{nameError}</p>}
            		</div>
            		<div className="form-cont">
            			<input type="text" name="artist" placeholder="Artist Name" defaultValue={data.artist}  onChange={(e)=>setArtist(e.target.value)} />
            			{ artistError && <p className="errorMessage">{artistError}</p>}
            		</div>
            		<div className="form-cont">
            			<input type="text" name="catagory" placeholder="Catagory" defaultValue={data.catagory} onChange={(e)=>setCatagory(e.target.value)} />
            			{ catagoryError && <p className="errorMessage">{catagoryError}</p>}
            		</div>
            		<div className="form-cont">
            			{duration}sec.
            			<input type="range" min="1" max="14" name="duration"  defaultValue={data.duration} onChange={(e)=>setDuration(e.target.value)} />
            			{ durationError && <p className="errorMessage">{durationError}</p>}
            		</div>
            		<div className="form-cont">
            			<div className="button">
            				<input type="reset" name="reset" value="Emptyze" />
            				<input type="submit" name="edit" value="Edit" />
            			</div>
            		</div>
            	</form>
			</div>
		</div>
		)
}

export default Edit