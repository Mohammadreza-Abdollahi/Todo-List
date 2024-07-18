const InputBox = () => {
    return ( 
        <>
            <section className="inp-box">
                <div className="inp-container">
                    <input className="add-inp" type="text" placeholder="نام برنامه ، وظیفه و..." />
                </div>
                <div className="btn-container">
                    <button className="add-btn">ثبت</button>
                </div>
            </section>
        </>
     );
}
 
export default InputBox;