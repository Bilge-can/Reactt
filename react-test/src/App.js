import './App.css';
import Header from "./companents/Header";
import User from "./companents/User";

//const name = "Bilge";
//const surname ="Can";
//const isLoggedIn = false;

function App() {
  return (
      <div>
          <Header />
          <p className="xyz">
            sdfghjklşslkdjldsjhfkfjhgjkdhkjfhglkjdfhgkjdfhgkdjhfgkjhkjh
              fjhsdkjfhsldjfhldsjkhfslkdjfhsdljhflsdkjfhldsjfhsjdfhslkdhdfj
              sdkjhfsdfhhldfsjkdhfsldjhflskdjfsldjfhslkjdhflsjdflskdjfhskdljh
          </p>
          <label htmlFor ="myinput">
            Name
              <input id ="myinput"/>
          </label>
      </div>
  );
}

export default App;

//function App(){
//    return (
//        <div>
//            <h1>{`Benim adım ${name}, soyadım ${surname}.`}</h1>
//            <h1>
//                {
//                    isLoggedIn
//                    ?`Benim adım ${name}, soyadım ${surname}.`
//                    :"Giriş yapmadınız."
//                }
//            </h1>
//        </div>
//    )
//}
//export default App;