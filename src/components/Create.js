import { useState } from "react"
import discImage from '../image/musicDisk.png'
import { useDispatch } from "react-redux"
import {addMusic} from "../redux/action"
import { useNavigate } from 'react-router-dom';




function Create(){

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [name,setName]=useState('')
    const [nameError,setNameError]=useState('')
    const [artist,setArtist]=useState('')
    const [artistError,setArtistError]=useState('')
    const [catagory,setCatagory]=useState('')
    const [catagoryError,setCatagoryError]=useState('')
    const [duration,setDuration]=useState('')
    const [durationError,setDurationError]=useState('')

    const createMusic=(data)=>{
        dispatch(addMusic(data))
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!name){
            setNameError("please fill the music name!")
        }else if(!artist){
            setArtistError("please fill the artist name!")
        }else if(!catagory){
            setCatagoryError("please fill the music catagory!")
        }else if(!duration){
            setDurationError("please fill the duration of music!")
        }else{
            const liked=false
            createMusic({name,artist,catagory,duration,liked})
            setNameError('')
            setName('')
            setArtistError('')
            setArtist('')
            setCatagoryError('')
            setCatagory('')
            setDurationError('')
            setDuration('')
            navigate('/', { replace: true })
        }
    }



    return (
        <div className="main">
        <div className="form-container">
            <div className="logo">
                <img src={discImage} alt="" />
            </div>
            <form onSubmit={onSubmit}>
                <div className="form-cont">
                    <input type="text" name="name" placeholder="Name Of The Music" value={name} onChange={(e)=>setName(e.target.value)} />
                    { nameError && <p className="errorMessage">{nameError}</p>}
                </div>
                <div className="form-cont">
                    <input type="text" name="artist" placeholder="Name Of The Artist" value={artist} onChange={(e)=>setArtist(e.target.value)} />
                    { artistError && <p className="errorMessage">{artistError}</p>}
                </div>
                <div className="form-cont">
                    <input type="text" name="catagory" placeholder="Catagory Of The Music" value={catagory} onChange={(e)=>setCatagory(e.target.value)} />
                    { catagoryError && <p className="errorMessage">{catagoryError}</p>}
                </div>
                <div className="form-cont">
                    {duration}sec.
                    <input type="range" min="1" max="14" name="duration" value={duration} onChange={(e)=>setDuration(e.target.value)} />
                    { durationError && <p className="errorMessage">{durationError}</p>}
                </div>
                <div className="form-cont">
                    <div className="button">
                        <input type="reset" name="reset" value="Reset" />
                        <input type="submit" name="submit" value="Create" />
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Create