import { Prisma, PrismaClient } from "@prisma/client";
import { Router } from "express";

const router: Router = Router();
const prisma = new PrismaClient();

// router.post(`/`, async (req, res) => {
//   const { name, email, posts } = req.body

//   const postData = posts?.map((post: Prisma.PostCreateInput) => {
//     return { title: post?.title, content: post?.content }
//   })

//   const result = await prisma.user.create({
//     data: {
//       name,
//       email,
//       posts: {
//         create: postData,
//       },
//     },
//   })
//   res.json(result)
// })

export const TrackRouter: Router = router;