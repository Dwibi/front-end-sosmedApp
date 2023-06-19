import { useEffect, useState } from "react";
import CardPost from "../../Components/CardPost/CardPost";
import axios from "axios";
import ReactInfiteScroll from "react-infinite-scroll-component";
import { findAllByDisplayValue } from "@testing-library/react";
import { toast } from "react-hot-toast";

export default function Home() {
  // useEffect(() => {}, []);
  const [post, setPost] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5999/posts?lastId=${lastId}&limit=${3}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setHasMore(response.data.hasMore);
      setPost([...post, ...response.data.data]);
      setLastId(response.data.last_id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id, index) => {
    try {
      const deleteData = await axios.delete(
        `http://localhost:5999/posts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(deleteData.data.message);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex justify-center h-full ">
      <div className="max-w-[470px]">
        <div className="max-[767px]:h-[48px]"></div>
        <ReactInfiteScroll
          next={fetchData}
          hasMore={hasMore}
          dataLength={post.length}
          loader={<h4>Loading</h4>}
          endMessage={<h4>This is the end</h4>}
          scrollThreshold={0.7}
        >
          {post.map((value, index) => {
            return (
              <CardPost
                key={index}
                data={value}
                index={index}
                deleteFunc={deletePost}
              />
            );
          })}
        </ReactInfiteScroll>
        <div className="max-[767px]:h-[48px]"></div>
      </div>
    </div>
  );
}

// Dwibi, Dwibi@123
