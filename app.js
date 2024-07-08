import { EventEmitter } from 'events';
import http from 'http';
import url from 'url';
import axios  from "axios";
import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PORT);



// class Post extends EventEmitter {
//     constructor(title , description) {
//         super();
//         this.title = title;
//         this.description = description;
//         this.likeCount = 0;
//     }
//
//     increaseLikes(){
//         this.likeCount++;
//         this.emit('likeIncreased',this.likeCount);
//     }
//     hopeLikes(){
//         this.likeCount--;
//         this.emit('likeHope',this.likeCount);
//     }
// }
// const myPost = new Post('My Post' , 'this is the new post');
//
// myPost.on('likeIncreased', (newLikeCount) => {
//     console.log('like count', newLikeCount);
// });
// myPost.on('likeHope', (newLikeCount) => {
//     console.log('like count', newLikeCount);
// });
//
// myPost.increaseLikes();
// myPost.hopeLikes();
//
// const users = []
//
//
// const getRequestBody = async (req) =>{
//     return new Promise((resolve, reject) => {
//         let body = '';
//
//         req.on('data', (chunk) => {
//             body+= chunk.toString()
//         })
//
//         req.on('end', () => {
//             resolve(body)
//         })
//         req.on('error', (err) => {
//             reject(err)
//         })
//     })
// }
//
//
// const server = http.createServer(async (req, res) => {
//     if (req.method === 'POST') {
//         try {
//             const body = JSON.parse(await getRequestBody(req))
//
//             res.writeHead(200, {'Content-Type': 'application/json'})
//             console.log(body)
//             users.push({
//                 'lName': body.lName,
//                 'fName' : body.fName
//
//             })
//
//             res.end(JSON.stringify({message: 'OK', data: body}));
//
//
//         } catch (err) {
//             res.writeHead(500, {'Content-Type': 'text/plain'})
//             res.end(JSON.stringify({error: err}))
//         }
//
//     }else if (req.method === 'GET') {
//         try {
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(users))
//
//
//
//         } catch (err) {
//             res.writeHead(500, {'Content-Type': 'text/plain'})
//             res.end(JSON.stringify({error: err}))
//         }
//     }
//
//     else {
//         res.writeHead(405, {'Content-Type': 'text/plain'})
//         res.end('only post method')
//     }
//
// })
//
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(   `Listening on ${PORT}`);
// })

const newPost = {
    title: "New Post",
    body: "bar",
    userId:1
}

const getPosts = async ()=>{
    try{
        const respons = await axios.post('https://api.themoviedb.org/3/posts',newPost);
        console.log(respons)
    }catch (error){
        console.log(error);
    }
}
