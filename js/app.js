// <!-- Sam Goldberg
// 11/7/26
// Week 2 assignment -->

const singerTable = document.getElementById("singerTable");
const remixTable = document.getElementById("remixTable");
//The fetch statements use a promise to return either the table data or an error saying the
//data cannot be found. If the promise is fulfilled, the JSON data goes into the bootstrap table.
// If it is rejected, an error message shows up.

//Fetch statement and promise handling for the Singer table
fetch("singers.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((singers) => {
    let rowSinger = "";
    singers.forEach((singer) => {
      rowSinger += `
                <tr>
                    <td>${singer.Name}</td>
                    <td>${singer.Song}</td>
                    <td>${singer.Year}</td>
                </tr>`;
    });
    //This statement puts the table we've built above into the webpage. It "injects" the data into the page.
    singerTable.innerHTML = rowSinger;
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });
//Fetch statement and promise handling for the Remixer table
fetch("remixes.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((remixes) => {
    //This is the Boostrap table being built. At this point, the table hasn't
    //been inserted into the webpage.
    let rowRemix = "";
    remixes.forEach((remix) => {
      rowRemix += `
                <tr>
                    <td>${remix.Remix}</td>
                    <td>${remix.Remixer}</td>
                    <td>${remix.Year}</td>
                </tr>`;
    });

    remixTable.innerHTML = rowRemix;
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });
