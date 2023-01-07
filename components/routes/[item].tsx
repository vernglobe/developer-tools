import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Item = (props: any) => {
  const { page, content, id } = props;
  //console.log("here")
  //console.log({page})
  console.log({content})

  if (page === "homepage") {
    return <></>;
  } else {
    return (
      <>
      {content}
      </>
      
    );
  }
};

export default Item;
