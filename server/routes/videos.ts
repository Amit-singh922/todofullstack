import  Router from 'express';
import * as db from '../db/db'
const router = Router()

// GET 'api/v1/videos

router.get('/', async (req, res) => {
    try {
        const videos = await db.getVideos()
        res.json(videos)
    } catch (error) {
        console.error (`Database error ${error}`)
        res.sendStatus(500)
    }
    })
// GET 'api/v1/videos/:id'
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const video = await db.getVideoById(id)
        res.json(video)
    } catch (error) {
        console.error (`Database error ${error}`)
        res.sendStatus(500)
    }
    })

// POST  'api/v1/videos'

router.post('/', async (req, res) => {
    const newVideo = req.body
    try {
        await db.addVideo(newVideo)
        res.sendStatus(200)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus(500)
    }
})

// // DEL 'api/v1/videos/:id'
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await db.deleteVideo(id);
        if (result) {
            res.sendStatus(204); // Using 204 for successful deletion without content
        } else {
            res.sendStatus(404); // Video not found
        }
    } catch (error) {
        console.error(`Database error ${error}`);
        res.sendStatus(500);
    }
});

//PATCH 'api/v1/videos/watched/:id' <- sets watched to true
router.patch('watched/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        await db.updateAsWatched(id)
        res.sendStatus(200)
    } catch (error) {
        console.error(`Database error ${error}`)
        res.sendStatus
    }
})

// PATCH 'api/v1/videos/not-watched/:id' <- sets watched to false
router.patch('not-watched/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        await db.updateAsNotWatched(id)
        res.sendStatus(200)
    } catch (error) {
        console.error(`Database error: ${error}`)
        res.sendStatus(500)
    }
}
)
export default router