fetch(
    "http://app.twig-me.com/rest/v17/lite/submissions?pagination=%7B%22limit%22%3A150%2C%22offset%22%3A0%7D&filter=%5B%7B%22operator%22%3A%22%3D%22%2C%22value%22%3A2953%2C%22column%22%3A%22FormID%22%7D%5D",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
        jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcHAudHdpZy1tZS5jb21cL3Jlc3QiLCJpYXQiOjE2NzAwNjg3MDUsIm5iZiI6MTY3MDA2ODcwNSwiZXhwIjoxNjcwNjczNTA1LCJ1c2VyaWQiOjEsIm9yZ3p2aWNlaWQiOjMwMDAyNzkwODQsImVtYWlsaWQiOiJ6dm9sdnRyYWluaW5nMkBnbWFpbC5jb20ifQ.zPrJhCOM-UYE6CAPHkDh0CxIHHNkI5ZmLYmSYOWCdvk",
        businessDomain: "zvolv-training",
        businessTagID: "98NCMBD2KBZ4R",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data.elements);
      functionName(res.data.elements);
      functionCode(res.data.elements);
      functionDefinition(res.data.elements);
      sampleCode(res.data.elements);
      functionParameter(res.data.elements);
    })
    .catch((err) => console.log(err));
  
  function functionName(data) {
    var mainContainer = document.getElementById("functionName");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      //   data[i].inputs.find((input)=>input.label=='Product Name');
      var functionNameObject = data[i].inputs.find(
        (input) => input.label == "Function Name"
      );
      div.innerHTML = "" + functionNameObject.value;
      mainContainer.appendChild(div);
    }
  }

//   function codeFile(data) {
//     var mainContainer = document.getElementById("codeFile");
//     for (var i = 0; i < data.length; i++) {
//       var div = document.createElement("div");
//       //   data[i].inputs.find((input)=>input.label=='Product Name');
//       var codeFileObject = data[i].inputs.find(
//         (input) => input.label == "Sample Code"
//       );
//       div.innerHTML = "" + codeFileObject.value;
//       mainContainer.appendChild(div);
//     }
//   }
  
//   function functionCode(data) {
//     var mainContainer = document.getElementById("functionCode");
//     for (var i = 0; i < data.length; i++) {
//       var div = document.createElement("div");
//       //   data[i].inputs.find((input)=>input.label=='Product Name');
//       var functionCodeObject = data[i].inputs.find(
//         (input) => input.label == "Function Code"
//       );
//       div.innerHTML = "" + functionCodeObject.value;
//       mainContainer.appendChild(div);
//     }
//   }

function functionCode(data) {
    var mainContainer = document.getElementById("functionCode");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      //   data[i].inputs.find((input)=>input.label=='Product Name');
      var functionCodeObject = data[i].inputs.find(
        (input) => input.label == "Function Code"
      );
      div.innerHTML = "" + functionCodeObject.value;
      mainContainer.appendChild(div);
    }
  }


  function functionDefinition(data) {
    var mainContainer = document.getElementById("functionDefinition");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      //   data[i].inputs.find((input)=>input.label=='Product Name');
      var functionDefinitionObject = data[i].inputs.find(
        (input) => input.label == "Function Definition"
      );
      div.innerHTML = "" + functionDefinitionObject.value;
      mainContainer.appendChild(div);
    }
  }

  function sampleCode(data) {
    var mainContainer = document.getElementById("sampleCode");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      //   data[i].inputs.find((input)=>input.label=='Product Name');
      var sampleCodeObject = data[i].inputs.find(
        (input) => input.label == "Example Code"
      );
      div.innerHTML = "" + sampleCodeObject.value;
      mainContainer.appendChild(div);
    }
  }

  function functionParameter(data) {
    var mainContainer = document.getElementById("functionParameter");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      //   data[i].inputs.find((input)=>input.label=='Product Name');
      var functionParameterObject = data[i].inputs.find(
        (input) => input.label == "Parameter"
      );
      div.innerHTML = "" + functionParameterObject.value;
      mainContainer.appendChild(div);
    }
  }