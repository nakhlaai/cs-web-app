const URL =
  "https://prod-205.westeurope.logic.azure.com:443/workflows/cd87df94d16f4962b20e10b8ddf3f2a4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yeJ-owgCSn92q4U3etxlCtHbvQTUYX1nn0i-BT3pmGg";

export default async function SubscribeUseCase(email: string) {
  const data = {
    firstName: "N/A",
    lastName: "N/A",
    email: email
  };

  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.ok;
}
