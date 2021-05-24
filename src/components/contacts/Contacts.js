import {FiSend} from "react-icons/fi";



function Contacts(){
    return(
      <div className="main main-contacts">
          <div className="contacts">
            <form action="">
                 <div className="row">
                    <div className="left">
                  <label htmlFor="">Name: </label>
                  <input type="text"/>
                  </div>
                 <div className="right">
                  <label htmlFor="">Nachname: </label>
                  <input type="text"/>
                  </div>
                  </div>
                  
                  <div className="row">
                    
                  <label htmlFor="">E-mail: </label>
                  <input type="text"/>
                  </div>
                  
                 <div className="row">
                  <label htmlFor="">Details: </label>
                  <textarea name="" id="textarea" cols="20" rows="10"></textarea>
                </div>
                 <div>
                
                  <button type="submit" className="send">
                    <FiSend className="icon-send"/>
                </button>
                </div>
              
               
              </form>
          </div>
      </div>  

    );

}export default Contacts;