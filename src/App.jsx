import InputBox from "./inputBox";
import Tasks from "./tasks";

const App = ()=>{
  return (
    <>
      <section className="main-sec">
        <h1>برنامه روزانه</h1>
        <InputBox/>
        <Tasks/>
      </section>
    </>
  );
}

export default App;
