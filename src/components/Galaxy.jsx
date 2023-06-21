// eslint-disable-next-line react/prop-types
export default function Galaxy ({id,name,diameter}){
    return (
      <div className="form-galaxy">
          <h3>
              ({id}) {name}
          </h3>
          <div>Diameter : {diameter.toLocaleString("id-ID")}</div>
      </div>
    );
  }
  