import request from 'superagent'
import {Video, VideoData} from '../../models/videos'

const rootURL = '/api/v1/videos'

export async function fetchVideos(): Promise<Video[]> {
    const res = await request.get(rootURL)
    return res.body
}

export async function fetchVideoById(id: number): Promise<Video> {
    const res = await request.get(`${rootURL}/${id}`)
    return res.body
}

export async function addNewVideo(newVideo: VideoData): Promise<void> {
    await request.post(rootURL).send(newVideo);
}

export async function deleteVideo(id: number): Promise<void> {
    await request.delete(`${rootURL}/${id}`);
}