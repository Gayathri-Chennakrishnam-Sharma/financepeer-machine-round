import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { loginPage } from '../LoginPage';


const UploadPage = ({history}) => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth)
    const [ file, setFile ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ isJSON, setIsJSON ] = useState(false)

    useEffect(() => {
        if(isLoggedIn) {
            dispatch(profileAction.getDetails());
        }
    },[isLoggedIn, dispatch]);

    if (!isLoggedIn) {
        return <Redirect to={ loginPage }  />
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        const fileType = e.target.files[0].name.split(".")[1]
        if(fileType !== "json") {
            setIsJSON(false)
            setMessage("Invalid File Type: Only JSON Files Allowed")
            setTimeout(() => {
                setMessage("")
            }, 6000)
        }
        else {
            setIsJSON(true)
            setMessage("")
        }
    }

    const uploadFile = () => {
        const formData = new FormData()
        formData.append('uploadFile', file)
        dispatch(profileAction.uploadJSONFile(formData, setMessage))
        setFile(null)
        history.push(PATHS.HOME)
    }

    return (
        <>
            <div className="container col-12 d-flex flex-column align-items-center">
                <Toast message={message} />
                <div className="card col-12 col-md-6">
                    <div className="card-header">Upload JSON</div>
                    <div className="card-body">
                        <input
                        className="form-control image-input mb-2"
                        name="uploadFile"
                        type="file"
                        onChange={onFileChange}
                        />
                        <button className={`btn btn-primary mt-2 ${isJSON ? null : "disabled"}`} onClick={uploadFile}>Upload</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPage ;