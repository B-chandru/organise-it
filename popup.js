
document.addEventListener("DOMContentLoaded",  ()=>{

  window.onload =()=>{
   
    var ul=document.querySelector("ul");
var del = document.getElementById("delete");
 
// checks whether the mentioned key in the chrome storage.
//If the key that we mentioned is present  then it will create a li element and anchor element with href points to the value of that key  all this elements are append to ul.
//And then button element created with the key as an id and append to del(mentioned above).
// whenever you click that button a function will be executed which will remove that key in the chrome storage.  

 chrome.storage.sync.get("Instagram", function(data) {
      if(data.Instagram){
    var li = document.createElement("li");
    li.innerHTML =`<a href="${data.Instagram}" target="_blank" rel="noopener noreferrer"><div class="round">I</div></a>`;
  ul.append(li);
  var Button = document.createElement("button");
  Button.setAttribute("id",'Instagram');
  Button.setAttribute("class",'delete_btn');
  Button.innerText="Instagram";
  Button.onclick =  function del(event){
    var Id =event.target.id;
    chrome.storage.sync.remove(`${Id}`,function() {
   location.reload();
     })
  };
del.append(Button);
      }
       });
        chrome.storage.sync.get("Github", function(data) {
         if(data.Github){
    var li = document.createElement("li");
        li.innerHTML =`<a href="${data.Github}" target="_blank" rel="noopener noreferrer"><div class="round">g</div></a>`;
      ul.append(li);
      var Button = document.createElement("button");
  Button.setAttribute("id",'Github');
  Button.setAttribute("class",'delete_btn');
  Button.innerText="Github";
  Button.onclick =  function del(event){
    var Id =event.target.id;
    chrome.storage.sync.remove(`${Id}`,function() {
   location.reload();
     })
  };
del.append(Button);
         }
           });
         
           chrome.storage.sync.get("hackerrank", function(data) {
            if(data.hackerrank){
             var li = document.createElement("li");
             li.innerHTML =`<a href="${data.hackerrank}" target="_blank" rel="noopener noreferrer"><div class="round">I</div></a>`;
               ul.append(li);
               var Button = document.createElement("button");
               Button.setAttribute("id",'hackerrank');
                  Button.setAttribute("class",'delete_btn');
               Button.innerText="hackerrank";
               Button.onclick =  function del(event){
                 var Id =event.target.id;
                 chrome.storage.sync.remove(`${Id}`,function() {
                location.reload();
                  })
               };
             del.append(Button);
            }

                    });
                    chrome.storage.sync.get("Amazon", function(data) {
                      if(data.Amazon){
                       var li = document.createElement("li");
                       li.innerHTML =`<a href="${data.Amazon}" target="_blank" rel="noopener noreferrer"><div class="round">A</div></a>`;
                         ul.append(li);
                         var Button = document.createElement("button");
                         Button.setAttribute("id",'Amazon');
                            Button.setAttribute("class",'delete_btn');
                         Button.innerText="Amazon";
                         Button.onclick =  function del(event){
                           var Id =event.target.id;
                           chrome.storage.sync.remove(`${Id}`,function() {
                          location.reload();
                            })
                         };
                       del.append(Button);
                      }
                              });
                              chrome.storage.sync.get("Flipkart", function(data) {
                                if(data.Flipkart){
                                 var li = document.createElement("li");
                                 li.innerHTML =`<a href="${data.Flipkart}" target="_blank" rel="noopener noreferrer"><div class="round">F</div></a>`;
                                   ul.append(li);
                                   var Button = document.createElement("button");
                                   Button.setAttribute("id",'Flipkart');
                                      Button.setAttribute("class",'delete_btn');
                                   Button.innerText="Flipkart";
                                   Button.onclick =  function del(event){
                                     var Id =event.target.id;
                                     chrome.storage.sync.remove(`${Id}`,function() {
                                    location.reload();
                                      })
                                   };
                                 del.append(Button);
                                }
                   
                                        });
                                        chrome.storage.sync.get("Sixphrase", function(data) {
                                          if(data.Sixphrase){
                                           var li = document.createElement("li");
                                           li.innerHTML =`<a href="${data.Sixphrase}" target="_blank" rel="noopener noreferrer"><div class="round">M</div></a>`;
                                            ul.append(li);
                                             var Button = document.createElement("button");
                                             Button.setAttribute("id",'Sixphrase');
                                                Button.setAttribute("class",'delete_btn');
                                             Button.innerText="Sixphrase";
                                             Button.onclick =  function del(event){
                                               var Id =event.target.id;
                                               chrome.storage.sync.remove(`${Id}`,function() {
                                              location.reload();
                                                })
                                             };
                                           del.append(Button);
                                          }
                             
                                                  }); 
                                                  chrome.storage.sync.get("Superset", function(data) {
                                                    if(data.Superset){
                                                     var li = document.createElement("li");
                                                     li.innerHTML =`<a href="${data.Superset}" target="_blank" rel="noopener noreferrer"><div class="round">S</div></a>`;
                                                       ul.append(li);
                                                       var Button = document.createElement("button");
                                                       Button.setAttribute("id",'Superset');
                                                          Button.setAttribute("class",'delete_btn');
                                                       Button.innerText="Superset";
                                                       Button.onclick =  function del(event){
                                                         var Id =event.target.id;
                                                         chrome.storage.sync.remove(`${Id}`,function() {
                                                        location.reload();
                                                          })
                                                       };
                                                     del.append(Button);
                                                    }
                                       
                                                            });
                                                            chrome.storage.sync.get("Tcs", function(data) {
                                                              if(data.Tcs){
                                                               var li = document.createElement("li");
                                                               li.innerHTML =`<a href="${data.Tcs}" target="_blank" rel="noopener noreferrer"><div class="round">T</div></a>`;
                                                                ul.append(li);
                                                                 var Button = document.createElement("button");
                                                                 Button.setAttribute("id",'Tcs');
                                                                    Button.setAttribute("class",'delete_btn');
                                                                 Button.innerText="Tcs";
                                                                 Button.onclick =  function del(event){
                                                                   var Id =event.target.id;
                                                                   chrome.storage.sync.remove(`${Id}`,function() {
                                                                  location.reload();
                                                                    })
                                                                 };
                                                               del.append(Button);
                                                              }
                                                 
                                                                      }); 
  }

// when you submit the form the below function will happen.
// It takes the input value and checks whether the input values contains the word that we mentioned.
// If the mentioned word is in the input value then it locally stores the input value with  the keyword that we mentioned. 
document.querySelector("form").onsubmit=function (){
var input = document.querySelector("input").value;

if (input.includes("www.instagram.com") ) {
  chrome.storage.sync.set({"Instagram": input}, function() {
     });

    }else if (input.includes("www.facebook.com")){
      chrome.storage.sync.set({"Facebook": input}, function() {
         });
       } else if (input.includes("www.linkedin.com")){
        chrome.storage.sync.set({"Linkedin": input}, function() {
           });
      } else if (input.includes("www.hackerrank.com")){
        chrome.storage.sync.set({"hackerrank": input}, function() {
           }); 
      } else if (input.includes("amazon")){
        chrome.storage.sync.set({"Amazon": input}, function() {
           });
      } else if (input.includes("www.flipkart.com")){
        chrome.storage.sync.set({"Flipkart": input}, function() {
           });
      }else if (input.includes("github.com")){
        chrome.storage.sync.set({"Github": input}, function() {
           });
      }else if (input.includes("tcs")){
        chrome.storage.sync.set({"Tcs": input}, function() {
           });
      }else if (input.includes("sixphrase")){
        chrome.storage.sync.set({"Sixphrase": input}, function() {
          alert("hello")
           });
          }else if (input.includes("superset")){
            chrome.storage.sync.set({"Superset": input}, function() {
               });
      }
}
})
            
