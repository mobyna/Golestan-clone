import baner from '/Images/baner.png'
const Baner = () => {
    return ( 
        <div className="h-[250px] bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${baner})`}} >
        </div>
     );
}
 
export default Baner;