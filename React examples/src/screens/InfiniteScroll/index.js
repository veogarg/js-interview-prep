import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import Posts from "./Posts";

const postsPerPage = 10;

function InfiniteScoll() {
  const {
    data: postsList,
    error,
    loading: loader,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [currentPosts, setCurrentPosts] = useState([])
  const [page, setPage] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(false)
  const [lastElement, setLastElement] = useState(null);

  const lastPostObserver = useRef(new IntersectionObserver(entries => {
    if(!entries[0].isIntersecting) return;
    setPage(page => page+1)
  }, {threshold: 1}))

  useEffect(()=>{
    page<=totalPage && loadPosts()
  },[page])
  
  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = lastPostObserver.current;

    if (currentElement) {
        currentObserver.observe(currentElement);
    }

    return () => {
        if (currentElement) {
            currentObserver.unobserve(currentElement);
        }
    };
}, [lastElement]);

const loadPosts = useCallback(() => {
  if(postsList) {
    setLoadingPosts(true)
    const newPosts = postsList.slice(0, page*postsPerPage)
    if(newPosts.length){
      setTimeout(() => {
        setCurrentPosts(newPosts)
        setLoadingPosts(false)
      }, 1000);
    }
  }
}, [postsList, setLoadingPosts, setCurrentPosts, page])

const totalPage = useMemo(() => {
  if( postsList?.length) {
    loadPosts()
      return Math.ceil(postsList.length/postsPerPage)
  }
  return 1
}, [postsList, loadPosts])

  if (loader) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something went wrong</div>;
  }

  return (
    <>
      <h1>Posts</h1>
      <div className="all-posts">
        {currentPosts.map((post, index) => {
          return index===currentPosts.length-1 && !loadingPosts && page<=totalPage ? <div ref={setLastElement} key={post.id}><Posts post={post} /></div> : <Posts post={post} key={post.id} />;
        })}
      </div>
      {loadingPosts && <p className='text-center'>loading...</p>}
    </>
  );
}

export default InfiniteScoll;
