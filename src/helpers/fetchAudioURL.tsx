  export const fetchAudioURL = async (dashURL: string) => {
    const response = await fetch(dashURL);
    const responseText = await response.text();
    const parsedResponse = new window.DOMParser().parseFromString(
      responseText,
      "text/xml"
    );
    const fileName = parsedResponse
      .querySelector('[contentType="audio"]')
      .querySelector("BaseURL").textContent;
    const fullURL = dashURL.split("DASHPlaylist")[0] + fileName;
    return (
      <video>
        <source src={fullURL} type="audio/mp4" />
      </video>
    );
  };
