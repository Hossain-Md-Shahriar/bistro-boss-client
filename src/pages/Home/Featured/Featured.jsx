import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-24">
      <div className="bg-black/45 pt-8">
        <SectionTitle subHeading={"check it out"} heading={"featured item"} />
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featured} alt="" />
          </div>
          <div className="md:ml-10 space-y-2">
            <p>Aug 22, 2028</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              ipsa corrupti nisi, provident sequi dolor voluptas ratione commodi
              expedita asperiores maiores fugiat obcaecati et amet ea harum,
              facilis quos officiis id? Voluptates sed amet consectetur quis hic
              ad odio omnis?
            </p>
            <button className="btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
