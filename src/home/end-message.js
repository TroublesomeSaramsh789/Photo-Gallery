import React from  "react";
function value(prop) {
    return(
        <h2 style={style} className="bye">{prop.message}</h2>
    )

}
const style = {
    color: "#444444",
    textAlign: "center",
    fontSize: "2rem"
}
export default value;