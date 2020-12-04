import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";

function PublicIp() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [ip, setIp] = useState([]);
  useEffect(() => {
    axiosInstance.get("public-ip/").then((res) => {
      const allPosts = res.data;
      console.log(allPosts)
      setIp(allPosts);
    });
  }, [setIp]);


  return (
    <div>
     <div>
     {!show &&  (
       <button className='gateway' onClick={() => {
        handleShow();
      }} ><h2>Find Your Public Ip</h2></button>
     )}
     </div>

     <div >{show &&  (
       <button className='gateway' onClick={() => {
        handleClose();
      }} ><h1>{ip}</h1></button>
     )}</div>
     
    </div>
  );
}
export default PublicIp;
