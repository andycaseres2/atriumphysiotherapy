import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i> 
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Damian</b></span>
                <span className="singlePostDate">1 Hour Ago</span>
<p className="singlePostDesc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corrupti veniam laborum tempore possimus ratione corporis non ea natus optio sed neque, dignissimos provident? Maiores temporibus dolore necessitatibus vero eos laudantium laboriosam, incidunt ducimus, quod, quae quibusdam recusandae quasi corrupti!
</p>


            </div>
        </div>
    </div>
  )
}
