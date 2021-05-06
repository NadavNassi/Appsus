

export function LabelPreview({ label, onClickLabels }) {
    return (
        <li onClick={() => onClickLabels(label)}>{label !== 'Inbox' && label !== 'Sent' && label !== 'All' && label}</li>
    )
}