const fetch = require("node-fetch");

exports.handler = async (evt) => {
  const bookRequest = {
    buyer_id: "sugimoto", // whatever value
    start_date: "2020-03-13", // YYYY-MM-DD
    end_date: "2020-03-15", // YYYY-MM-DD
    near: "tate gallery", // "tate gallery", "vatican museum", "joan miro foundation"
  };

  return fetch(
    "https://tjcutz0647.execute-api.us-east-1.amazonaws.com/Prod/hotel",
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
