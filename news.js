hp-exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "HP Current Affairs API is working!",
      news: [
        "HP Government announced new power reforms.",
        "HPPTCL infrastructure upgrade ongoing.",
        "Recruitment notifications expected soon."
      ]
    })
  };
};