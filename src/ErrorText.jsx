export default function ErrorText(props) {
  if (!props.errText) {
    return null;
  }

  return (
    <div className="pt-form-helper-text">
      <div className="pt-form-helper-text">{props.errText}</div>
    </div>
  );
}
