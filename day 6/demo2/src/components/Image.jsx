import download from "./download.jpg";
function Image(){
    return (<div>
        <h1>Image loading...</h1>
        <img src={download} alt="image" width="1000" height="500"/>
    </div>
    );
}
export default Image;