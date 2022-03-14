{/*I used a combo of HTML, CSS, Bootstrap & React to complete this project*/}

const pads = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const App = () => {
  {/*Using react hooks (learnt about it with sololearn) to manage the display area,
    where displayID is a var and setDisplayID is the function that controles said var*/}
  const [displayID, setDisplayID] = React.useState("Pad Name HERE");
  const [volume, setVolume] = React.useState("0.5");

  return /*#__PURE__*/(
    React.createElement("div", { className: "container text-center" }, /*#__PURE__*/
    React.createElement("h1", { id: "title" }, "Drum Machine fCC"), /*#__PURE__*/
    React.createElement("div", { id: "display", className: "card" }, /*#__PURE__*/
    React.createElement("p", { className: "card-body" }, displayID)), /*#__PURE__*/

    React.createElement("div", { id: "drum-machine" },

    pads.map((audioClip) => /*#__PURE__*/
    React.createElement(DrumPad, {
      key: audioClip.id,
      audioClip: audioClip,
      setDisplayID: setDisplayID,
      volume: volume }))), /*#__PURE__*/



    React.createElement("div", { className: "volume" }, "Volume control", /*#__PURE__*/
    React.createElement("input", { type: "range",
      value: volume,
      step: "0.01",
      min: "0",
      max: "1",
      onChange: e => setVolume(e.target.value) })), /*#__PURE__*/

    React.createElement("footer", { id: "footer" }, "\xA9 2021 Van B-C.")));


};

{/*my DrumPad react component, with audioClip & the setDisplayID function as parameters*/}
const DrumPad = ({ audioClip, setDisplayID, volume }) => {
  {/*following part is the same as componentDidMount and componentWillUnmount*/}
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  {/*this is my event handler, essential to play actual sounds*/}
  const handleKeyPress = event => {
    if (event.keyCode === audioClip.keyCode) {
      playPad();
    }
  };

  {/*this is the function that gets triggered when handleKeyPress handles an event*/}
  const playPad = () => {
    const getSound = document.getElementById(audioClip.keyTrigger);
    getSound.play();
    setDisplayID(audioClip.id);
    getSound.volume = volume;
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "text-center" }, /*#__PURE__*/
    React.createElement("button", {
      id: "",
      onClick: playPad,
      className: "btn btn-success btn-outline-success drum-pad" }, /*#__PURE__*/
    React.createElement("audio", {
      id: audioClip.keyTrigger,
      className: "clip",
      src: audioClip.url }),
    audioClip.keyTrigger)));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("App"));