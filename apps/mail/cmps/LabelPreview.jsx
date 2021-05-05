

export function LabelPreview({ label, onClickLabels }) {
    return (
        <li onClick={() => onClickLabels(label)}>{label}</li>
    )
}