import connection from './connection';
import {Video} from '../../models/videos'

const db = connection

export function getVideos(): Promise<Video[]>{
    return db('videos').select()
}

export function getVideoById(id: number): Promise<Video>{
    return db('videos').where({id}).select().first()
}

export function addVideo(newVideo: Video) {
    return db('videos').insert(newVideo)
}

export function updateAsWatched(id: number) {
    return db('videos').where({id}).update('watched', true)
}

export function updateAsNotWatched(id: number) {
    return db('videos').where({id}).update('watched', false)
}

export function deleteVideo(id: number): Promise<number> {
    return db('videos').where({ id }).del();
  }