export function NoteAudio({ note }) {
    console.log(note)
  return <div> <audio
  className="audio-container"
  controls
  src={note.info.audio}
  type="audio/mpeg"
></audio></div>;
}
