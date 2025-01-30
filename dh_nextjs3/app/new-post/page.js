import { createPost } from "@/actions/posts";
import PostForm from "@/components/post-submit";

export default function NewPostPage() {
  return <PostForm action={createPost}/>
}