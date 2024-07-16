import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { addNewVideo } from "../apis/apiClient"
import { VideoData } from "../../models/videos"

export default function VideoForm() {
const [newVideo, setNewVideo] = useState('')
const [newUrl, setNewUrl] = useState('')
const queryClient = useQueryClient()
const addMutation = useMutation({
    mutationFn: (video: VideoData) => addNewVideo(video),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['videos']})
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewVideo(e.target.value)
}

const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl(e.target.value)
}

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    addMutation.mutate({name: newVideo, url: newUrl, watched: false})
}

// if(addMutation.isSuccess){
//     return <p>Submitted: newVideo</p>
// }
    return (
        <div>
            {addMutation.isSuccess && <p>Submitted: {newVideo}</p>}
            <form onSubmit={handleSubmit}>            
            <label htmlFor="name">Name:</label>
            <input onChange={handleChange} value={newVideo} id="name"></input>
            <label htmlFor="url">Url:</label>
            <input onChange={handleUrlChange} value={newUrl} id="url"></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}