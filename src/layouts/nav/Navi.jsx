import "./navi.scss";
import { BsListUl, BsSearch } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
export default function Navi() {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <nav className="nav">
        <div className="nav_image">
          <img
            src={"../../../assets/images/kocuni.png"}
            alt="kocuni.png"
            className="nav_image_koc"
          ></img>
        </div>

        <div className="nav">
          <div className="nav_content">
            <a href="#section1">Bölümlerimiz</a>
          </div>
          <div className="nav_content">
            <a href="#section2"> Doktorlarımız</a>
          </div>
          <div className="nav_content">
            <a href="#"> Bize ulaşın </a>
          </div>
          <div className="nav_content">
            <a href="#">Kurumsal</a>
          </div>
        </div>
        <div className="nav_menu">
          <div className="nav_menu-right">
            <BsSearch size={30} style={{ marginRight: "10px" }} />
          </div>
          <div className="nav_menu-right">
            <BsListUl size={30} style={{ marginRight: "10px" }} />
          </div>
          <div className="nav_menu-right" onClick={()=>onClickMenu()}>
            {" "}
            <BiWorld size={30} style={{ marginRight: "10px" }} />
          </div>
        </div>
      </nav>
    </div>

  
  );
  function onClickMenu(){
      console.log("Naber aslanım");
}
}
