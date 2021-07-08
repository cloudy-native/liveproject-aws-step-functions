const fetch = require("node-fetch");

exports.handler = async (evt) => {
 

  return fetch(
    "https://tjcutz0647.execute-api.us-east-1.amazonaws.com/Prod/museum",
    {
      method: "POST",
      body: JSON.stringify(bookRequest),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);

      return {
        statusCode: 200,
        body: json,
      };
    })
    .catch((err) => {
      return {
        statusCode: 400,
        body: err,
      };
    });
};
