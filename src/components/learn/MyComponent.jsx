
import './style.css'
// () => {}

const MyComponent = () => {
    const testName = "Hoàng Năng Hưng";
    const arrSoNguyen = [1, 2, 3];
    const testObj = {
        name: "Vũ Thị Thùy Dung",
        age: "22",
    }
   return(
      // fragment
      <>
         <h2 className="test1" style={{fontSize: "50px"}}> {testName} {arrSoNguyen} {testObj.name}
             {testObj.age}
             
             {JSON.stringify(testObj)}
              My Component</h2>
      </>
   );
}


export default MyComponent // file này tôi chỉ xuất ra 1 biến MyComponent 
