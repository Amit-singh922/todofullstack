// import { Video} from "../../models/videos"
import { useQuery } from '@tanstack/react-query'
import Video from './Video'
import {fetchVideos} from '../apis/apiClient'

export default function VideoList(){
    const {data: videos, isPending, isError, error} = useQuery({queryKey: ['videos'], queryFn: () => fetchVideos()})

    if (isError){
        return <p>Error: {error.message}</p>
    }

    if (isPending) {
        return <p>Loading...</p>
    }
    return (
		<div>
			{videos.map((vid, i) => {
				return (
					<div key={i}>
						<Video key={i} id={vid.id} name={vid.name} url={vid.url} watched={vid.watched} />
					</div>
				)
			})}
		</div>
	)
}